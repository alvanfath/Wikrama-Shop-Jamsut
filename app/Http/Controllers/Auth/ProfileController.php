<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    public function updateProfile(Request $request){
        $data = Auth::user();
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:admin,email|unique:users,email,'.$data->id,
            'username' => 'required|unique:admin,username|unique:users,username,'.$data->id,
            'phone_number' => 'required|unique:users,phone_number,'.$data->id
        ],[
            'name.required' => 'Nama wajib diisi',
            'email.required' => 'Email wajib diisi',
            'email.unique' => 'Email sudah ada sebelumnya',
            'username.required' => 'Username wajib diisi',
            'username.unique' => 'Username sudah ada sebelumnya',
            'phone_number.required' => 'Nomor telepon wajib diisi',
            'phone_number.unique' => 'Nomor telepon sudah ada sebelumnya',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        DB::table('users')->where('id', $data->id)->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'username' => $request->input('username'),
            'phone_number' => $request->input('phone_number')
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Update Profile berhasil'
        ], 200);
    }

    public function updatePassword(Request $request){
        $data = Auth::user();
        $validator = Validator::make($request->all(), [
            'current_password' => ['required', new MatchOldPassword],
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

        DB::table('users')->where('id', $data->id)->update([
            'password' => Hash::make($request->input('new_password'))
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Update Password berhasil'
        ], 200);
    }
}
