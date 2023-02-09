<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class SupplierController extends Controller
{
    public function index(){
        $data = DB::table('supplier')->get();
        return response()->json($data);
    }

    public function store(Request $request){
        try{
            $validator = Validator::make($request->all(),[
                'name' => 'required',
                'email' => 'required|unique:supplier,email,',
                'phone_number' => 'required|unique:supplier,phone_number'
            ]);

            if($validator->fails()){
                return response()->json($validator->errors(), 422);
            }
            DB::table('supplier')->insert([
                'name' => $request->name,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'created_at' => Carbon::now()
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Berhasil menambahkan supplier'
            ],200);

        }catch(\Throwable $th){
            return response()->json([
                'success' => false,
                'message' => 'Gagal menambahkan supplier'
            ], 500);
        }
    }

    public function edit($id){
        $data = DB::table('supplier')->where('id', $id)->first();
        return response()->json($data);
    }

    public function update(Request $request,$id){
        $data = DB::table('supplier')->where('id', $id)->first();
        if($data){
            $validator = Validator::make($request->all(),[
                'name' => 'required',
                'email' => 'required|unique:supplier,email,'.$data->id,
                'phone_number' => 'required|unique:supplier,phone_number,'.$data->id
            ]);

            if($validator->fails()){
                return response()->json($validator->errors(), 422);
            }

            DB::table('supplier')->where('id', $id)->update([
                'name' => $request->name,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'updated_at' => Carbon::now()
            ]);
            return response()->json([
                'exist' => true,
                'success' => true,
                'message' => 'Berhasil mengedit supplier'
            ],200);
        }else{
            return response()->json([
                'exist' => false,
                'success' => false,
                'message' => 'Supplier tidak terdaftar'
            ],404);
        }
    }

    public function destroy($id){
        $data = DB::table('supplier')->where('id', $id)->first();
        if($data){
            DB::table('supplier')->where('id', $id)->delete();
            return response()->json([
                'success' => true,
                'message' => 'Berhasil menghapus supplier'
            ],200);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'Supplier tidak terdaftar'
            ],404);
        }
    }
}
