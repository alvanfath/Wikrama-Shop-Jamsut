<?php

namespace App\Http\Controllers\Auth;

use Carbon\Carbon;
use App\Mail\SendRegister;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Auth\LoginController;

class RegisterController extends Controller
{
    public function register(Request $request){
        try {
            $token = Str::random(20);
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|unique:users,email',
                'username' => 'required|unique:users,username',
                'phone_number' => 'required|unique:users,phone_number',
                'password' => 'required',
                'confirm_password' => 'required|same:password'
            ],[
                'name.required' => 'Nama wajib diisi',
                'email.required' => 'Email wajib diisi',
                'email.unique' => 'Email tidak tersedia',
                'username.required' => 'Username wajib diisi',
                'username.unique' => 'Username sudah ada sebelumnya',
                'phone_number.required' => 'Nomor telepon wajib diisi',
                'phone_number.unique' => 'Nomor telepon sudah ada sebelumnya',
                'password.required' => 'Password wajib diisi',
                'confirm_password.required' => 'Konfirmasi password wajib diisi',
                'confirm_password.same' => 'Konfirmasi password salah'
            ]);

            if($validator->fails()){
                return response()->json($validator->errors(),422);
            }

            Mail::to($request->email)->send(new SendRegister($request->name, $token));

            DB::table('users')->insert([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'username' => $request->input('username'),
                'phone_number' => $request->input('phone_number'),
                'password' => Hash::make($request->input('password')),
                'token' => $token,
                'driver' => 'register',
                'created_at' => Carbon::now()
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Registrasi Berhasil'
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Ada masalah teknis, silakan coba lagi dalam beberapa saat'
            ], 500);
        }
    }

    public function verifEmail($token){
        try{
            $new_token = Str::random(20);
            $data = DB::table('users')->where('token', $token)->first();
            if($data){
                DB::table('users')->where('token', $token)->update([
                    'email_verified_at' => Carbon::now(),
                    'status' => 1,
                    'token' => $new_token
                ]);
                return response()->json([
                    'success' => true,
                    'message' => 'Verifikasi email sukses'
                ],200);
            }else{
                return response()->json([
                    'success' => false,
                    'message' => 'Akunmu tidak ditemukan'
                ],422);
            }
        }catch(\Throwable $th){
            return response()->json([
                'success' => false,
                'message' => 'Verified email failed'
            ],500);
        }
    }

    // public function google(){
    //     return Socialite::driver('google')->redirect();
    // }

    // public function googleCallback(){
    //     //
    // }
}
