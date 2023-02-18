<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AddressController extends Controller
{
    public function index(){
        $data = DB::table('address')->where('user_id', Auth::user()->id)
        ->join('provinces', 'address.province_id', '=', 'provinces.id')
        ->join('regencies', 'address.city_id', '=', 'regencies.id')
        ->join('districts', 'address.district_id', '=', 'districts.id')
        ->join('villages', 'address.village_id', '=', 'villages.id')
        ->select('address.no_address', 'address.user_id' , 'provinces.name as province', 'regencies.name as city', 'districts.name as district' , 'villages.name as village', 'address.detail')
        ->get();
        return response()->json($data, 200);
    }

    public function create(){
        $province = DB::table('provinces')->get();
        return response()->json($province);
    }

    public function getCity(Request $request){
        $city = DB::table('regencies')->where('province_id', $request->province_id)->get();
        return response()->json($city, 200);
    }
    public function getDistrict(Request $request){
        $district = DB::table('districts')->where('regency_id', $request->regency_id)->get();
        return response()->json($district, 200);
    }
    public function getVillage(Request $request){
        $city = DB::table('villages')->where('district_id', $request->district_id)->get();
        return response()->json($city, 200);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'province_id' => 'required',
            'city_id' => 'required',
            'district_id' => 'required',
            'village_id' => 'required',
            'detail' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $no_address = $this->generateNoAddress();
            DB::table('address')->insert([
                'user_id' => Auth::user()->id,
                'no_address' => $no_address,
                'province_id' => $request->province_id,
                'city_id' => $request->city_id,
                'district_id' => $request->district_id,
                'village_id' => $request->village_id,
                'detail' => $request->detail
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Alamat berhasil ditambahkan'
            ],200);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Ada masalah teknis silakan coba beberapa saat lagi'
            ]);
        }

    }

    public function generateNoAddress(){
        $result = Str::random(20);
        $data = DB::table('address')->where('no_address', $result)->first();
        if ($data) {
            return $this->generateNoAddress();
        }
        return $result;
    }

    public function edit($no_address){
        $data = DB::table('address')->where('no_address', $no_address)->where('user_id', Auth::user()->id)->first();
        if ($data) {
            return response()->json($data, 200);
        }else{
            return response()->json([
                'exist' => false,
                'success' => false,
                'message' => 'Data alamat tidak ada'
            ],404);
        }
    }

    public function update(Request $request, $no_address){
        $data = DB::table('address')->where('no_address', $no_address)->where('user_id', Auth::user()->id)->first();
        try {
            if ($data) {
                $validator = Validator::make($request->all(), [
                    'province_id' => 'required',
                    'city_id' => 'required',
                    'district_id' => 'required',
                    'village_id' => 'required',
                    'detail' => 'required'
                ]);

                if ($validator->fails()) {
                    return response()->json($validator->errors(), 422);
                }

                DB::table('address')->where('no_address', $no_address)->where('user_id', Auth::user()->id)->update([
                    'province_id' => $request->province_id,
                    'city_id' => $request->city_id,
                    'district_id' => $request->district_id,
                    'village_id' => $request->village_id,
                    'detail' => $request->detail
                ]);

                return response()->json([
                    'exist' => true,
                    'success' => true,
                    'message' => 'Alamat berhasil di update'
                ], 200);
            }else{
                return response()->json([
                    'exist' => false,
                    'success' => false,
                    'message' => 'Data alamat tidak ada'
                ], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'exist' => false,
                'success' => false,
                'message' => 'Ada masalah teknis silakan coba beberapa saat lagi'
            ], 500);
        }
    }

    public function destroy($no_address){
        $data = DB::table('address')->where('no_address', $no_address)->where('user_id', Auth::user()->id)->first();
        try {
            if ($data) {
                DB::table('address')->where('no_address', $no_address)->where('user_id', Auth::user()->id)->delete();

                return response()->json([
                    'exist' => true,
                    'success' => true,
                    'message' => 'Alamat berhasil dihapus'
                ], 200);
            }else{
                return response()->json([
                    'exist' => false,
                    'success' => false,
                    'message' => 'Alamat berhasil dihapus'
                ], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'exist' => false,
                'success' => false,
                'message' => 'Ada masalah teknis silakan coba beberapa saat lagi'
            ], 500);
        }
    }
}
