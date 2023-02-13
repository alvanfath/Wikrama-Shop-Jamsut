<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request){
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
        if (! $token = auth()->attempt([$email_or_us => $request->input('email'), 'password' => $request->input('password')])) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }else{
            if (auth()->user()->email_verified_at == null){
                return response()->json(['error' => 'your account not verified']);
            }else{
                return $this->createNewToken($token);
            }
        }
    }

    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {
        return response()->json(auth()->user());
    }

    public function logout(Request $request) {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }

    public function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}
