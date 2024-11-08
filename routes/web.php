<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\UserController;

// Auth Routes
Route::prefix('auth')->group(function () {
    Route::view('/{any}', 'dashboard')->where('any', '.*');
    Route::post('/login', [UserController::class, 'login']);
    Route::post('/register', [UserController::class, 'register'])->middleware('blockRegisterIfUserExists');;
    Route::post('/logout', [UserController::class, 'logout']);
});

// Admin Routes (Require Authentication)
Route::prefix('admin')->group(function () {
    Route::view('/{any}', 'dashboard')->where('any', '.*');
});

// Frontend Client Routes (Public)
Route::view('/{any}', 'welcome')->where('any', '^(?!admin).*$');
