<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\VariantController;
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
Route::post('/login', [LoginController::class,'login'])->name('login');

//user
Route::middleware(['auth'])->group(function () {
    //auth
    Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
    Route::post('/refresh', [LoginController::class, 'refresh'])->name('refresh');
    Route::get('/my-profile', [LoginController::class, 'userProfile'])->name('my-profile');
    Route::put('update-profile', [ProfileController::class, 'updateProfile'])->name('update-profile');
    Route::put('update-password', [ProfileController::class, 'updatePassword'])->name('update-password');

    Route::prefix('address')->name('address')->group(function () {
        Route::get('/', [AddressController::class, 'index'])->name('.index');
        Route::get('/create', [AddressController::class, 'create'])->name('.create');
        Route::post('/get-city', [AddressController::class, 'getCity'])->name('.get-city');
        Route::post('/get-district', [AddressController::class, 'getDistrict'])->name('.get-district');
        Route::post('/get-village', [AddressController::class, 'getVillage'])->name('.get-village');
        Route::post('/store', [AddressController::class, 'store'])->name('.store');
        Route::get('{no_address}/edit', [AddressController::class, 'edit'])->name('.edit');
        Route::put('{no_address}/update', [AddressController::class, 'update'])->name('.update');
        Route::delete('{no_address}/destroy', [AddressController::class, 'destroy'])->name('.destroy');
    });
});

//admin
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
        Route::put('/update-profile', [AuthController::class, 'updateProfile'])->name('update-profile');
        Route::put('/update-password', [AuthController::class, 'updatePassword'])->name('update-password');
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

            //variant
            Route::prefix('variant')->name('.variant')->group(function () {
                Route::get('/{product_code}', [VariantController::class,'index'])->name('.index');
                // Route::get('/create/{product_code}', [VariantController::class, 'create'])->name('.create');
                Route::post('/{product_code}/store', [VariantController::class, 'store'])->name('.store');
                Route::get('/{product_code}/{no_variant}/edit', [VariantController::class, 'edit'])->name('.edit');
                Route::put('/{product_code}/{no_variant}/update', [VariantController::class, 'update'])->name('.update');
                Route::delete('/{product_code}/{no_variant}/destroy', [VariantController::class, 'destroy'])->name('.destroy');
            });
        });

        Route::prefix('user')->group(function () {
            Route::get('/', [UserController::class, 'index'])->name('.index');
        });
    });

    Route::middleware(['auth:api'])->group(function () {

    });
});
