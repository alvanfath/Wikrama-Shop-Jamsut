<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class LoginAdminController extends Controller
{
    public function login(Request $request){
        $item = [
            'nama' => $request->nama,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ];

        return response()->json($item);
    }
}
