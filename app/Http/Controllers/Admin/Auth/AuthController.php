<?php

namespace App\Http\Controllers\Admin\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Rules\MatchOldAdminPassword;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function loginAdmin(Request $request){
    	$validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ],[
            'email.required' => 'Email atau username wajib diisi',
            'password.required' => 'Password wajib diisi'
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

    public function updateProfile(Request $request){
        $data = Auth::guard('admin')->user();
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:users,email|unique:admin,email,'.$data->id,
            'username' => 'required|unique:users,username|unique:admin,username,'.$data->id
        ],[
            'name.required' => 'Nama wajib diisi',
            'email.required' => 'Email wajib diisi',
            'email.unique' => 'Email sudah ada sebelumnya',
            'username.required' => 'Username wajib diisi',
            'username.unique' => 'username sudah ada sebelumnya',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        DB::table('admin')->where('id', $data->id)->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'username' => $request->input('username')
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Update Profile berhasil'
        ], 200);
    }

    public function updatePassword(Request $request){
        $data = Auth::guard('admin')->user();
        $validator = Validator::make($request->all(), [
            'current_password' => ['required', new MatchOldAdminPassword],
            'new_password' => ['required'],
            'confirm_password' => ['required','same:new_password']
        ], [
            'current_password.required' => 'Password saat ini wajib diisi',
            'new_password.required' => 'Password baru wajib diisi',
            'confirm_password.required' => 'Konfirmasi password wajib diisi',
            'confirm_password.same' => 'Konfirmasi password tidak sesuai'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        DB::table('admin')->where('id', $data->id)->update([
            'password' => Hash::make($request->input('new_password'))
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Update Password berhasil'
        ], 200);
    }
}
