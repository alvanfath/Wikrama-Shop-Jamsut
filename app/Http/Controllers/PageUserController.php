<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PageUserController extends Controller
{
    public function index(){
        $produk = DB::table('product')->get();
        return response()->json($produk, 200);
    }

    public function productDetail($no_product){
        $product = DB::table('product')->where('no_product', $no_product)->first();
        if ($product) {
            $variant = DB::table('variant')->where('product_code', $no_product)->get();
            return response()->json([
                'product' => $product,
                'variant' => $variant
            ], 200);
        }
        return response()->json([
            'message' => 'Data produk tidak ditemukan'
        ],404);
    }

}
