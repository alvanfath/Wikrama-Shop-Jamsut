<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index(){
        $verified = DB::table('users')->where('status', 1)->get();
        $unverif = DB::table('users')->where('status', 2)->get();
        $blocked = DB::table('users')->where('status', 3)->get();
        return response()->json([
            'verified' => $verified,
            'unverif' => $unverif,
            'blocked' => $blocked
        ]);
    }
}
