<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\SupplierController;
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
// Route::group(['middleware' => ['web']], function () {
//     Route::get('login/google', [RegisterController::class, 'google'])->name('.google');
//     Route::get('/google/callback', [RegisterController::class, 'googleCallback'])->name('google.callback');
// });

Route::post('/login', [LoginController::class,'login'])->name('login');

//google


Route::middleware(['auth'])->group(function () {
    //auth
    Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
    Route::post('/refresh', [LoginController::class, 'refresh'])->name('refresh');
    Route::get('/my-profile', [LoginController::class, 'userProfile'])->name('my-profile');
});

Route::post('register', [RegisterController::class, 'register'])->name('register');
Route::get('verif-email/{token}', [RegisterController::class,'verifEmail'])->name('verif-email');
Route::prefix('/webmin')->name('webmin.')->group(function () {
    Route::post('login', [AuthController::class, 'loginAdmin'])->name('login');
    //must login
    Route::middleware(['auth:admin'])->group(function () {
        //auth
        Route::get('logout', [AuthController::class, 'logout'])->name('logout');
        Route::post('/refresh', [AuthController::class, 'refresh'])->name('refresh');
        Route::get('/my-profile', [AuthController::class, 'adminProfile'])->name('my-profile');

        //category
        Route::prefix('/category')->name('category')->group(function () {
            Route::get('/',[CategoryController::class, 'index'])->name('.index');
            Route::post('/store', [CategoryController::class,'store'])->name('.store');
            Route::get('/edit/{id}', [CategoryController::class,'edit'])->name('.edit');
            Route::put('/update/{id}', [CategoryController::class,'update'])->name('.update');
            Route::delete('/destroy/{id}', [CategoryController::class, 'destroy'])->name('.destroy');
        });

        //supplier
        Route::prefix('supplier')->name('supplier')->group(function () {
            Route::get('/', [SupplierController::class, 'index'])->name('.index');
            Route::post('/store', [SupplierController::class, 'store'])->name('.store');
            Route::get('/edit/{id}', [SupplierController::class, 'edit'])->name('.edit');
            Route::put('/update/{id}', [SupplierController::class, 'update'])->name('.update');
            Route::delete('/destroy/{id}', [SupplierController::class, 'destroy'])->name('.destroy');
        });

        //product
        Route::prefix('product')->name('product')->group(function () {
            Route::get('/',[ProductController::class,'index'])->name('.index');
            Route::get('/create',[ProductController::class,'create'])->name('.create');
            Route::post('/store', [ProductController::class, 'store'])->name('.store');
            Route::get('/edit/{id}',[ProductController::class, 'edit'])->name('.edit');
            Route::put('/update/{id}', [ProductController::class, 'update'])->name('.update');
            Route::delete('/destroy/{id}', [ProductController::class, 'destroy'])->name('.destroy');
        });
    });

    Route::middleware(['auth:api'])->group(function () {

    });
});
