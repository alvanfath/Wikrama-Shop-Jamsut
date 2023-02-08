<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
        abort(404);
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
            ]);
            if($validator->fails()){
                return response()->json([
                    'statusCode' => 400,
                    'success' => false,
                    'message' => $validator->errors()
                ]);
            }
            DB::table('category')->insert([
                'category' => $request->input('category'),
                'created_at' => Carbon::now()
            ]);
            return response()->json([
                'statusCode' => 200,
                'success' => true,
                'message' => 'Add category success'
            ]);
        }catch(\Throwable $th){
            return response()->json([
                'statusCode' => 500,
                'success' => false,
                'message' => 'Add category failed'
            ]);
        }

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
        $data = DB::table('category')->where('id', $id)->first();
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
        $data = DB::table('category')->where('id', $id)->first();
        if($data){
            $validator = Validator::make($request->all(),[
                'category' => 'required|unique:category,category,'.$data->id
            ]);
            if($validator->fails()){
                return response()->json([
                    'data' => 'exist',
                    'statusCode' => 400,
                    'success' => false,
                    'message' => $validator->errors()
                ]);
            }
            DB::table('category')->where('id', $id)->update([
                'category' => $request->input('category')
            ]);
            return response()->json([
                'data' => 'exist',
                'statusCode' => 200,
                'success' =>  true,
                'message' => 'Update Category Successfully'
            ]);
        }else{
            return response()->json([
                'data' => 'not exist',
                'statusCode' => 404,
                'success' => false,
                'message' => 'Data Not Found'
            ]);
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
        $data = DB::table('category')->where('id', $id)->first();
        if($data){
            DB::table('category')->where('id', $id)->delete();
            return response()->json([
                'data' => 'exist',
                'statusCode' => 200,
                'success' =>  true,
                'message' => 'Delete Category Successfully'
            ]);
        }else{
            return response()->json([
                'data' => 'not exist',
                'statusCode' => 404,
                'success' =>  false,
                'message' => 'Data not found'
            ]);
        }
    }
}
