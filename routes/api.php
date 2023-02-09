<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\Auth\AuthController;

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
//login user
Route::post('/login', [LoginController::class,'login'])->name('login');
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
Route::post('/refresh', [LoginController::class, 'refresh'])->name('refresh');
Route::get('/my-profile', [LoginController::class, 'userProfile'])->name('my-profile');

Route::post('register', [RegisterController::class, 'register'])->name('register');
Route::get('verif-email/{token}', [RegisterController::class,'verifEmail'])->name('verif-email');
Route::prefix('/webmin')->name('webmin.')->group(function () {
    Route::post('login', [AuthController::class, 'loginAdmin'])->name('login');

    //must login
    Route::middleware(['auth:admin'])->group(function () {
        //category
        Route::prefix('/category')->name('category.')->group(function () {
            Route::get('/',[CategoryController::class, 'index']);
            Route::post('/store', [CategoryController::class,'store'])->name('store');
            Route::get('/edit/{id}', [CategoryController::class,'edit'])->name('edit');
            Route::put('/update/{id}', [CategoryController::class,'update'])->name('update');
            Route::delete('/destroy/{id}', [CategoryController::class, 'destroy'])->name('destroy');
        });
    });

});
