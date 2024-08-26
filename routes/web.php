<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\UserController;

Route::prefix('auth')->group(function () {
    Route::view('/{any}', 'dashboard')->where('any', '.*');
    Route::post('/login', [UserController::class, 'login'])->name('login');
    Route::post('/register', [UserController::class, 'register']);
    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
});

Route::prefix('admin')->middleware('auth:sanctum')->group(function () {
    Route::view('/{any}', 'dashboard')->where('any', '.*');
});

// Frontend Routes
Route::view('/{any}', 'welcome')->where('any', '^(?!admin).*$');
