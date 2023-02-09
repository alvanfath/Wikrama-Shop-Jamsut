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

class RegisterController extends Controller
{
    public function register(Request $request){
        try {
            $token = Str::random(20);
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|unique:users,email',
                'username' => 'required|unique:users,username',
                'password' => 'required',
                'confirm_password' => 'required|same:password'
            ]);

            if($validator->fails()){
                return response()->json([
                    'statusCode' => 400,
                    'success' => false,
                    'message' => 'validation error',
                    'error_response' => $validator->errors()
                ]);
            }

            Mail::to($request->email)->send(new SendRegister($request->name, $token));

            DB::table('users')->insert([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'username' => $request->input('username'),
                'password' => Hash::make($request->input('password')),
                'token' => $token,
                'driver' => 'register'
            ]);

            return response()->json([
                'statusCode' => 200,
                'success' => true,
                'message' => 'Register Success'
            ]);

        } catch (\Throwable $th) {
            return response()->json([
                'statusCode' => 500,
                'success' => false,
                'message' => 'error'
            ]);
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
                    'statusCode' => 200,
                    'success' => true,
                    'message' => 'Verified email success'
                ]);
            }else{
                return response()->json([
                    'statusCode' => 400,
                    'success' => false,
                    'message' => 'Your account not found'
                ]);
            }
        }catch(\Throwable $th){
            return response()->json([
                'statusCode' => 500,
                'success' => false,
                'message' => 'Verified email failed'
            ]);
        }
    }

    public function facebook(){
        return Socialite::driver('facebook')->redirect();
    }

    public function facebookCallback(){

    }
}
