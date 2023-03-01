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
        $data = DB::table('transaction')
        ->join('product', 'transaction.product_code', '=', 'product.no_product')
        ->join('variant', 'transaction.variant_code', '=', 'variant.no_variant')
        ->select('transaction.*', 'product.product_image', 'product.product_name as product', 'variant.variant_image', 'variant.variant_name as variant', 'variant.price')
        ->get();

        return response()->json($data, 200);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'product_code' => 'required',
            'variant_code' => 'required',
            'quantity' => 'required|numeric',
        ],[
            'product_code.required' => 'Produk wajib diisi',
            'variant_code.required' => 'Varian wajib diisi',
            'quantity.required' => 'Kuantitas wajib diisi',
            'quantity.numeric' => 'Kuantitas harus berupa angka'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $product = DB::table('product')->where('no_product', $request->product_code)->first();
        if ($product) {
            $variant = DB::table('variant')->where('product_code',$product->no_product)->where('no_variant', $request->variant_code)->first();
            if ($variant) {
                $code = $this->generateCodeTransaction();
                $total = intval($variant->price) * intval($request->quantity);
                DB::table('transaction')->insert([[
                    'nomor_transaksi' => $code,
                    'product_code' => $product->no_product,
                    'variant_code' => $variant->no_variant,
                    'quantity' => $request->quantity,
                    'total_price' => $total
                ]]);
                DB::table('variant')->where('product_code',$product->no_product)->where('no_variant', $request->variant_code)->update([
                    'stock' => intval($variant->stock) - intval($request->quantity)
                ]);
                return response()->json([
                    'success' => true,
                    'message' => 'Berhasil melakukan transaksi'
                ],200);
            }
            return response()->json([
                'success' => false,
                'message' => 'Gagal melakukan transaksi'
            ], 422);
        }
        return response()->json([
            'success' => false,
            'message' => 'Produk tidak ditemukan'
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
