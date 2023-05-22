<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TransaksiKasirController extends Controller
{
    public function index(){
        $data = DB::table('transaction_group')->get();

        return response()->json($data, 200);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'product_code.*' => 'required',
            'variant_code.*' => 'required',
            'quantity.*' => 'required|numeric'
        ],[
            'product_code.required' => 'Produk wajib diisi',
            'variant_code.required' => 'Varian wajib diisi',
            'quantity.required' => 'Kuantitas wajib diisi',
            'quantity.numeric' => 'Kuantitas harus berupa angka',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //combine array
        $combined = array_map(function($item1,$item2,$item3){
            return [
                'product_code' => $item1,
                'variant_code' => $item2,
                'quantity' => $item3
            ];
        },$request->product_code, $request->variant_code, $request->quantity);

        foreach ($combined as $item) {
            $product = DB::table('product')->where('no_product', $item['product_code'])->first();
            if ($product) {
                $variant = DB::table('variant')->where('product_code',$item['product_code'])->where('no_variant', $item['variant_code'])->first();
                if ($variant->stock < $item['quantity']) {
                    return response()->json([
                        'message' => 'Stok produk '.$product->product_name.' varian ' . $variant->variant_name . ' kurang dari kuantitas yang diminta'
                    ], 400);
                }
            }
        }

        $code = $this->generateCodeTransaction();
        $result = [];
        foreach ($combined as $item) {
            $product = DB::table('product')->where('no_product', $item['product_code'])->first();
            if ($product) {
                $variant = DB::table('variant')->where('product_code',$item['product_code'])->where('no_variant', $item['variant_code'])->first();
                if ($variant) {
                    $total = intval($variant->price) * intval($item['quantity']);
                    DB::table('transaction')->insert([[
                        'nomor_transaksi' => $code,
                        'product_code' => $product->no_product,
                        'variant_code' => $variant->no_variant,
                        'quantity' => $item['quantity'],
                        'total_price' => $total,
                        'status' => 'live transaction',
                        'created_at' => now()
                    ]]);
                    DB::table('variant')->where('product_code',$product->no_product)->where('no_variant', $request->variant_code)->update([
                        'stock' => intval($variant->stock) - intval($item['quantity'])
                    ]);
                }
            }
            $result[] = [
                'produk' => $product->product_name,
                'variant' => $variant->variant_name,
                'quantity' => $item['quantity'],
                'total' => $total
            ];
        }

        $sumTotal = 0;

        foreach ($result as $item) {
            $sumTotal += $item['total'];
        }

        DB::table('transaction_group')->insert([
            'nomor_transaksi' => $code,
            'total_amount' => $sumTotal,
            'status' => 'Unpaid',
            'created_at' => now()
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil membuat transaksi',
            'transaction_code' => $code,
            'result' => $result,
            'total_amount' => $sumTotal,
            'tanggal_transaksi' => now(),
            'url_pay' => route('webmin.transaction.pay-transaction', $code)
        ], 201);

    }

    public function detailTransaction($no_transaction){
        $transaction_group = DB::table('transaction_group')->where('nomor_transaksi', $no_transaction)->first();
        if ($transaction_group) {
            $item = DB::table('transaction')->where('nomor_transaksi', $no_transaction)
            ->join('product', 'transaction.product_code', '=', 'product.no_product')
            ->join('variant', 'transaction.variant_code', '=', 'variant.no_variant')
            ->select('transaction.*', 'product.product_image', 'product.product_name as product', 'variant.variant_image', 'variant.variant_name as variant', 'variant.price')
            ->get();
            $transaction_group->buying_item = $item;
            return response()->json([
                'transaksi' => $transaction_group
            ], 200);
        }
        return response()->json([
            'message' => 'Data transaksi tidak ditemukan'
        ], 404);
    }

    public function payTransaction(Request $request, $no_transaction){
        $transaction_group = DB::table('transaction_group')->where('status', 'unpaid')->where('nomor_transaksi', $no_transaction)->first();
        $validator = Validator::make($request->all(),[
            'cash' => 'required|numeric|min:'.$transaction_group->total_amount
        ],[
            'cash.required' => 'Tunai wajib diisi',
            'cash.numeric' => 'Tunai harus berupa angka',
            'cash.min' => 'Tunai tidak boleh kurang dari Rp.' . number_format($transaction_group->total_amount)
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 401);
        }
        if ($transaction_group) {
            DB::table('transaction_group')->where('nomor_transaksi', $no_transaction)->update([
                'cash' => $request->cash,
                'cash_out' => intval($request->cash) - intval($transaction_group->total_amount),
                'status' => 'Paid'
            ]);

            return response()->json([
                'data' => DB::table('transaction_group')->where('nomor_transaksi', $no_transaction)->first(),
                'message' => 'Berhasil melakukan transaksi.'
            ], 200);
        }

        return response()->json([
            'message' => 'Data transaksi tidak ditemukan'
        ], 200);
    }
    public function getVariant($no_product){
        $product = DB::table('product')->where('no_product', $no_product)->first();
        $data = DB::table('variant')->select('no_variant', 'variant_name', 'variant_image')->where('product_code', $no_product)->get();
        if ($product) {
            return response()->json($data, 200);
        }
        return response()->json([
            'status' => 'product not found'
        ], 404);

    }

    protected function generateCodeTransaction(){
        $digit = 'TRSN';
        $first = strtoupper($digit);
        $code = Str::random(7);
        $new_code = $first . '-' .$code;
        $data = DB::table('transaction')->where('nomor_transaksi', $new_code)->first();
        if ($data) {
            return $this->generateCodeTransaction();
        }
        return $new_code;
    }
}
