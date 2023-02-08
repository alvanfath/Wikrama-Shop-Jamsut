<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Admin\LoginAdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [RegisterController::class, 'register'])->name('register');
Route::get('verif-email/{token}', [RegisterController::class,'verifEmail'])->name('verif-email');
Route::prefix('/webmin')->name('webmin.')->group(function () {
    Route::post('login', [LoginAdminController::class, 'login'])->name('login');

    //category
    Route::prefix('/category')->name('category.')->group(function () {
        Route::get('/',[CategoryController::class, 'index']);
        Route::post('/store', [CategoryController::class,'store'])->name('store');
        Route::get('/edit/{id}', [CategoryController::class,'edit'])->name('edit');
        Route::put('/update/{id}', [CategoryController::class,'update'])->name('update');
        Route::delete('/destroy/{id}', [CategoryController::class, 'destroy'])->name('destroy');
    });
});
