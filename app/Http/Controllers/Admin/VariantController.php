<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class VariantController extends Controller
{
    public function index($no_product){
        try {
            $product = DB::table('product')->where('no_product', $no_product)->first();
            if ($product) {
                $data = DB::table('variant')->where('product_code', $no_product)->get();
                $array = [];
                foreach ($data as $item) {
                    if ($item->variant_image == null || $item->variant_image == '') {
                        $image = asset("uploads/product/{$product->product_image}");
                    }else{
                        $image = asset("uploads/variant/{$item->variant_image}");
                    }
                    $array[] = [
                        'id' => $item->id,
                        'no_variant' => $item->no_variant,
                        'variant_image' => $image,
                        'variant_name' => $item->variant_name,
                        'price' => $item->price,
                        'stock' => $item->stock,
                        'product_code' => $item->product_code,
                        'alt_image' => asset("uploads/product/{$product->product_image}")
                    ];
                }
                return response()->json($array,200);
            }else{
                return response()->json([
                    'exist' => false,
                    'success' => false,
                    'message' => 'Data produk tidak ada'
                ], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'exist' => false,
                'success' => false,
                'message' => 'Maaf sepertinya ada yang salah'
            ], 500);
        }
    }

    // public function create($no_product){
    //     return response()->json($no_product);
    // }

    public function store($no_product,Request $request){
        try {
            $product = DB::table('product')->where('no_product', $no_product)->first();
        if ($product) {
            $validation = Validator::make($request->all(),[
                'variant_image' => 'nullable|mimes:png,jpg',
                'variant_name' => 'required',
                'price' => 'required|numeric',
                'stock' => 'required|numeric|min:10',
            ],[
                'variant_image.mimes' => 'Gambar varian harus berupa png atau jpg',
                'variant_name.required' => 'Nama varian wajib diisi',
                'price.required' => 'Harga varian wajib diisi',
                'price.numeric' => 'Harga varian harus berupa nomor',
                'stock.required' => 'Stok varian wajib diisi',
                'stock.numeric' => 'Stok varian harus berupa nomor',
                'stock.min' => 'Stok varian minimal 10'
            ]);

            if ($validation->fails()) {
                return response()->json($validation->errors(), 422);
            }
            $code = $this->generateCodeVariant();
            if ($request->hasFile('variant_image')) {
                $str = Str::random(6);
                $file_name = time() . '_' .$str. '_'. $request->variant_image->getClientOriginalName();
                $request->file('variant_image')->move(public_path('uploads/variant'), $file_name);
                DB::table('variant')->insert([
                    'no_variant' => $code,
                    'variant_image' => $file_name,
                    'variant_name' => $request->input('variant_name'),
                    'price' => $request->input('price'),
                    'stock' => $request->input('stock'),
                    'product_code' => $product->no_product
                ]);
            }else{
                DB::table('variant')->insert([
                    'no_variant' => $code,
                    'variant_name' => $request->input('variant_name'),
                    'price' => $request->input('price'),
                    'stock' => $request->input('stock'),
                    'product_code' => $product->no_product
                ]);
            }
            return response()->json([
                'exist' => true,
                'success' => true,
                'message' =>  "Berhasil menambah varian di produk $product->product_name"
            ],200);
        }else{
            return response()->json([
                'exist' => false,
                'success' => false,
                'message' => 'Produk tidak ada'
            ],404);
        }
        } catch (\Throwable $th) {
            return response()->json([
                'exist' => false,
                'success' => false,
                'message' => 'Maaf sepertinya ada yang salah'
            ],500);
        }

    }

    protected function generateCodeVariant(){
        $code = Str::random(20);
        $data = DB::table('variant')->where('no_variant', $code)->first();
        if ($data) {
            return $this->generateCodeVariant();
        }
        return $code;
    }

    public function edit($no_product, $no_variant){

        try {
            $data = DB::table('variant')->where('product_code', $no_product)->where('no_variant', $no_variant)->first();
            if ($data) {
                return response()->json([
                    'exist' => true,
                    'success' => true,
                    'data' => $data
                ],200);
            }else{
                return response()->json([
                    'exist' => false,
                    'success' => false,
                    'data' => null
                ], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'exist' => false,
                'success' => false,
                'data' => 'Maaf sepertinya ada yang salah'
            ], 500);
        }
    }

    public function update(Request $request,$no_product, $no_variant){

        try {
            $data = DB::table('variant')->where('product_code', $no_product)->where('no_variant', $no_variant)->first();
            if ($data) {
                $validation = Validator::make($request->all(),[
                    'variant_image' => 'nullable|mimes:png,jpg',
                    'variant_name' => 'required',
                    'price' => 'required|numeric',
                    'stock' => 'required|numeric|min:10',
                ],[
                    'variant_image.mimes' => 'Gambar varian harus berupa png atau jpg',
                    'variant_name.required' => 'Nama varian wajib diisi',
                    'price.required' => 'Harga varian wajib diisi',
                    'price.numeric' => 'Harga varian harus berupa nomor',
                    'stock.required' => 'Stok varian wajib diisi',
                    'stock.numeric' => 'Stok varian harus berupa nomor',
                    'stock.min' => 'Stok varian minimal 10'
                ]);

                if ($validation->fails()) {
                    return response()->json($validation->errors(), 422);
                }

                if ($request->hasFile('variant_image')) {
                    $str = Str::random(6);
                    $file_name = time() . '_' .$str. '_'. $request->variant_image->getClientOriginalName();
                    $variant_image = public_path("uploads/variant/{$data->variant_image}");
                    if (File::exists($variant_image)) {
                        File::delete($variant_image);
                    }

                    $request->file('variant_image')->move(public_path('uploads/variant'), $file_name);

                    DB::table('variant')->where('product_code', $no_product)->where('no_variant', $no_variant)->update([
                        'variant_image' => $file_name,
                        'variant_name' => $request->input('variant_name'),
                        'price' => $request->input('price'),
                        'stock' => $request->input('stock')
                    ]);
                }else{
                    DB::table('variant')->where('product_code', $no_product)->where('no_variant', $no_variant)->update([
                        'variant_name' => $request->input('variant_name'),
                        'price' => $request->input('price'),
                        'stock' => $request->input('stock')
                    ]);
                }
                return response()->json([
                    'exist' => true,
                    'success' => true,
                    'message' => 'Berhasil mengupdate varian'
                ], 200);
            }else{
                return response()->json([
                    'exist' => false,
                    'success' => false,
                    'message' => 'Data variant tidak ada'
                ], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'exist' => false,
                'success' => false,
                'message' => 'Maaf sepertinya ada yang salah'
            ], 500);
        }
    }

    public function destroy($no_product, $no_variant){
        // try {
            $data = DB::table('variant')->where('product_code', $no_product)->where('no_variant', $no_variant)->first();
            if ($data) {
                $variant_image = public_path("uploads/variant/{$data->variant_image}");
                if (File::exists($variant_image)) {
                    File::delete($variant_image);
                }

                DB::table('variant')->where('product_code', $no_product)->where('no_variant', $no_variant)->delete();
                return response()->json([
                    'exist' => true,
                    'success' => true,
                    'message' => 'Berhasil menghapus varian'
                ], 200);
            }else{
                return response()->json([
                    'exist' => false,
                    'success' => false,
                    'message' => 'Data varian tidak ada'
                ], 404);
            }
        // } catch (\Throwable $th) {
        //     return response()->json([
        //         'exist' => false,
        //         'success' => false,
        //         'message' => 'Maaf sepertinya ada yang salah'
        //     ], 500);
        // }
    }
}
