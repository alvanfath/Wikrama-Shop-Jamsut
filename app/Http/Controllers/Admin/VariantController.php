<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class VariantController extends Controller
{
    public function index($no_product){
        $data = DB::table('variant')->where('product_code', $no_product)->get();
    }
}
