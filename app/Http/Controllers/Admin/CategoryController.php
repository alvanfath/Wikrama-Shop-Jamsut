<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = DB::table('category')->get();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        abort(404);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            $validator = Validator::make($request->all(),[
                'category' => 'required|unique:category,category'
            ],[
                'category.required' => 'Kategori wajib diisi',
                'category.unique' => 'Kategori sudah ada sebelumnya'
            ]);

            if($validator->fails()){
                return response()->json($validator->errors(),422);
            }
            $no_category = $this->codeCategory();
            DB::table('category')->insert([
                'no_category' => $no_category,
                'category' => $request->input('category'),
                'created_at' => Carbon::now()
            ]);
            return response()->json([
                'success' => true,
                'message' => 'Add category success'
            ],200);
        }catch(\Throwable $th){
            return response()->json([
                'success' => false,
                'message' => 'Add category failed'
            ],500);
        }

    }

    public function codeCategory(){
        $digit = 'CTGR';
        $code = strtoupper($digit);
        $data = $code . '-' . Str::random(7);
        $category = DB::table('category')->where('no_category', $data)->first();
        if ($category) {
            return $this->codeCategory();
        }
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = DB::table('category')->where('no_category', $id)->first();
        if($data){
            return response()->json([
                'exist' => true,
                'data' =>$data,
            ]);
        }else{
            return response()->json([
                'exist' => false,
                'data' => 'not exist'
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = DB::table('category')->where('no_category', $id)->first();
        if($data){
            $validator = Validator::make($request->all(),[
                'category' => 'required|unique:category,category,'.$data->id
            ]);
            if($validator->fails()){
                return response()->json([
                    'data' => 'exist',
                    'success' => false,
                    'message' => $validator->errors()
                ],422);
            }
            DB::table('category')->where('no_category', $id)->update([
                'category' => $request->input('category')
            ]);
            return response()->json([
                'data' => 'exist',
                'success' =>  true,
                'message' => 'Update Category Successfully'
            ],200);
        }else{
            return response()->json([
                'data' => 'not exist',
                'success' => false,
                'message' => 'Data Not Found'
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = DB::table('category')->where('no_category', $id)->first();
        if($data){
            DB::table('category')->where('no_category', $id)->delete();
            return response()->json([
                'data' => 'exist',
                'success' =>  true,
                'message' => 'Delete Category Successfully'
            ],200);
        }else{
            return response()->json([
                'data' => 'not exist',
                'statusCode' => 404,
                'success' =>  false,
                'message' => 'Data not found'
            ],404);
        }
    }
}
