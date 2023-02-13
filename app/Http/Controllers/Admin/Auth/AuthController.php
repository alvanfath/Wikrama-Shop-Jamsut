<?php

namespace App\Http\Controllers\Admin\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function loginAdmin(Request $request){
    	$validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required|string|min:6',
        ],[
            'email.required' => 'Email atau username wajib diisi',
            'password.'
        ]);
        $email_or_us = filter_var($request->input('email'), FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        if (! $token = auth()->guard('admin')->attempt([$email_or_us => $request->input('email'), 'password' => $request->input('password')])) {
            return response()->json(['error' => 'Autentikasi gagal'], 401);
        }else{
            return $this->createNewToken($token);
        }
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth()->guard('admin')->refresh());
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function adminProfile() {
        return response()->json(auth()->guard('admin')->user());
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request) {
        auth()->guard('admin')->logout();
        return response()->json(['message' => 'Berhasil logout']);
    }

    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->guard('admin')->factory()->getTTL() * 60,
            'user' => auth()->guard('admin')->user()
        ]);
    }
}
