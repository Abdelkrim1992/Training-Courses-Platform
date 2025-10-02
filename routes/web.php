<?php

use Illuminate\Support\Facades\Route;

// Health check or root JSON response
Route::get('/', function () {
    return response()->json(['status' => 'ok', 'app' => 'api']);
});

// Fallback to return JSON 404 for any non-API paths
Route::fallback(function () {
    return response()->json([
        'message' => 'Not Found',
    ], 404);
});