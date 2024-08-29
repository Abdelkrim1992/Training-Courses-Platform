<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\UserController;
use App\Http\Controllers\backend\SiteSettingController;
use App\Http\Controllers\backend\StudentsController;
use App\Http\Controllers\backend\TeamController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//auth
Route::post('/login', [UserController::class, 'login'])->name('login');
Route::post('/register', [UserController::class, 'register']);
Route::post('/logout', [UserController::class, 'logout'])->name('logout');

// students//
Route::get('/get_students', [StudentsController::class, 'index']);
Route::post('/add_student', [StudentsController::class, 'store']);
Route::get('/get_student/{id}', [StudentsController::class, 'show']);
Route::put('/update_student/{id}', [StudentsController::class, 'update']);
Route::delete('/delete_student/{id}', [StudentsController::class, 'destroy']);

// students//
Route::get('/get_team_member', [TeamController::class, 'index']);
Route::post('/add_team_member', [TeamController::class, 'store']);
Route::get('/get_team_member/{id}', [TeamController::class, 'show']);
Route::put('/update_team_member/{id}', [TeamController::class, 'update']);
Route::delete('/delete_team_member/{id}', [TeamController::class, 'destroy']);
