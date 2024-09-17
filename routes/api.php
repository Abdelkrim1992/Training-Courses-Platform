<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\UserController;
use App\Http\Controllers\backend\SiteSettingController;
use App\Http\Controllers\backend\StudentsController;
use App\Http\Controllers\backend\TeamController;
use App\Http\Controllers\backend\ReviewsController;
use App\Http\Controllers\backend\CoursesController;
use App\Http\Controllers\backend\ProjectsController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//auth
Route::post('/login', [UserController::class, 'login'])->name('login');
Route::post('/register', [UserController::class, 'register']);
Route::post('/logout', [UserController::class, 'logout'])->name('logout');

Route::get('/get_setting/{id}', [SiteSettingController::class, 'show']);
Route::post('/add_setting', [SiteSettingController::class, 'store']);
Route::post('/update_setting/{id}', [SiteSettingController::class, 'update']);

// students//
Route::get('/get_students', [StudentsController::class, 'index']);
Route::post('/add_student', [StudentsController::class, 'store']);
Route::get('/get_student/{id}', [StudentsController::class, 'show']);
Route::put('/update_student/{id}', [StudentsController::class, 'update']);
Route::delete('/delete_student/{id}', [StudentsController::class, 'destroy']);

// team//
Route::get('/get_team_member', [TeamController::class, 'index']);
Route::post('/add_team_member', [TeamController::class, 'store']);
Route::get('/get_team_member/{id}', [TeamController::class, 'show']);
Route::put('/update_team_member/{id}', [TeamController::class, 'update']);
Route::delete('/delete_team_member/{id}', [TeamController::class, 'destroy']);

// reviews//
Route::get('/get_reviews', [ReviewsController::class, 'index']);
Route::post('/add_review', [ReviewsController::class, 'store']);
Route::get('/get_review/{id}', [ReviewsController::class, 'show']);
Route::put('/update_review/{id}', [ReviewsController::class, 'update']);
Route::delete('/delete_review/{id}', [ReviewsController::class, 'destroy']);

// courses//
Route::get('/get_courses', [CoursesController::class, 'index']);
Route::post('/upload_image', [CourseController::class, 'uploadImage']);
Route::post('/add_course', [CoursesController::class, 'store']);
Route::get('/get_course/{id}', [CoursesController::class, 'show']);
Route::post('/update_course/{id}', [CoursesController::class, 'update']);
Route::delete('/delete_course/{id}', [CoursesController::class, 'destroy']);

// project//
Route::get('/get_projects', [ProjectsController::class, 'index']);
Route::post('/upload_image', [ProjectsController::class, 'uploadImage']);
Route::post('/add_project', [ProjectsController::class, 'store']);
Route::get('/get_project/{id}', [ProjectsController::class, 'show']);
Route::post('/update_project/{id}', [ProjectsController::class, 'update']);
Route::delete('/delete_project/{id}', [ProjectsController::class, 'destroy']);