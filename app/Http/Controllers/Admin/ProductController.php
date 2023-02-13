<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = DB::table('product')->get();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $supplier = DB::table('supplier')->get();
        $category = DB::table('category')->get();
        return response()->json([
            'supplier' => $supplier,
            'category' => $category
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'product_image' => 'required|mimes:png,jpg',
            'product_name' => 'required',
            'description' => 'required|min:20',
            'supplier_id' => 'nullable',
            'variant_image' => 'nullable|mimes:png,jpg',
            'variant' => 'required',
            'stock' => 'required|numeric|min:10',
            'price' => 'required',
            'category_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),422);
        }

        if ($request->hasFile('product_image')) {
            $file_name = time(). '_' . $request->product_image->getClientOriginalName();
            $request->product_image->move(public_path('uploads/product'), $file_name);

            $code = $this->generateCode();
            if ($request->supplier_id != null) {
                $product = DB::table('product')->insert([
                    'no_product' => $code,
                    'product_image' => $file_name,
                    'product_name' => $request->input('product_name'),
                    'description' => $request->input('description'),
                    'supplier_id' => $request->input('supplier_id'),
                    'category_id' => $request->input('category_id')
                ]);
            }else{
                $product = DB::table('product')->insert([
                    'no_product' => $code,
                    'product_image' => $file_name,
                    'product_name' => $request->input('product_name'),
                    'description' => $request->input('description'),
                    'category_id' => $request->input('category_id')
                ]);
            }

            if ($request->hasFile('variant_image')) {
                $file_name_variant = time(). '_' . $request->variant_image->getClientOriginalName();
                $request->variant_image->move(public_path('uploads/variant'), $file_name);
                DB::table('variant')->insert([
                    'variant_image' => $file_name_variant,
                    'variant_name' => $request->input('variant'),
                    'price' => $request->input('price'),
                    'stock' => $request->input('stock'),
                    'product_code' => $code
                ]);
            }else{
                DB::table('variant')->insert([
                    'variant_name' => $request->input('variant'),
                    'price' => $request->input('price'),
                    'stock' => $request->input('stock'),
                    'product_code' => $code
                ]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Berhasil menambah product'
            ],200);
        }


    }

    public function generateCode(){
        $code = Str::random(20);
        $data = DB::table('product')->where('no_product', $code)->first();
        if ($data) {
            return $this->generateCode();
        }
        return $code;
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = DB::table('product')->where('no_product', $id)->join('category', 'product.category_id', '=', 'category.id')->first();
        $output =  [
            'id' => $data->id,
            'no_product' => $data->no_product,
            'product_image' => asset("uploads/product/{$data->product_image}"),
            'product_name' => $data->product_name,
            'description' => $data->description,
            'category_id' => $data->category_id,
            'category' => $data->category,
            'supplier_id' => $data->supplier_id,
            'discount' => $data->discount
        ];
        return response()->json($output,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = DB::table('product')->where('no_product', $id)->first();
        if ($data) {
            $validator = Validator::make($request->all(),[
                'product_image' => 'nullable|mimes:png,jpg',
                'product_name' => 'required',
                'description' => 'required|min:20',
                'category_id' => 'required'
            ],
            [
                'product_image.mimes' => 'Gambar produk harus berbentuk png atau jpg',
                'product_name.required' => 'Nama produk harus diisi',
                'description.required' => 'Deskripsi produk harus diisi',
                'description.min' => 'Deskripsi minimal 20 karakter',
                'category_id.required' => 'Kategori harus diisi'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }

            if ($request->hasFile('product_image')) {
                $old_foto = public_path("uploads/product/{$data->product_image}");
                if (File::exists($old_foto)) {
                    File::delete($old_foto);
                }
                $file_name = time(). '_' . $request->product_image->getClientOriginalName();
                $request->file('product_image')->move(public_path('uploads/product'), $file_name);
                DB::table('product')->where('no_product', $id)->update([
                    'product_image' => $file_name,
                    'product_name' => $request->input('product_name'),
                    'description' => $request->input('description'),
                    'category_id' => $request->input('category_id')
                ]);
            }else{
                DB::table('product')->where('no_product', $id)->update([
                    'product_name' => $request->input('product_name'),
                    'description' => $request->input('description'),
                    'category_id' => $request->input('category_id')
                ]);
            }
            return response()->json([
                'success' => true,
                'message' => 'Berhasil update product'
            ], 200);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'Data yang ingin anda update tidak ada di penyimpanan kami'
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = DB::table('product')->where('no_product', $id)->first();
        if ($data) {
            $variant = DB::table('variant')->where('product_code', $data->no_product)->get();
            $old_photo_varian = [];
            if ($variant->count() > 0) {
                foreach ($variant as $item) {
                    $variant_image = public_path("uploads/variants/{$item->variant_image}");
                    if (File::exists($variant_image)) {
                        File::delete($variant_image);
                    }
                    DB::table('variant')->where('id', $item->id)->delete();
                }
            }

            // File::delete($old_photo_varian);
            $old_foto_product = public_path("uploads/product/{$data->product_image}");
            if (File::exists($old_foto_product)) {
                File::delete($old_foto_product);
            }
            DB::table('product')->where('no_product', $id)->delete();
            return response()->json([
                'exists' => true,
                'success'=> true,
                'message' => 'Berhasil hapus product'
            ],200);
        }else{
            return response()->json([
                'exists' => false,
                'success' => false,
                'message' => 'Tidak ada data product'
            ], 404);
        }
    }
}
