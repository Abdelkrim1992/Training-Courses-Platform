<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    public function register(Request $request)
    {
        // Check if there is already a user in the database
    if (User::exists()) {
        return response()->json([
            'message' => 'Registration is closed. No more users can register.'
        ], 403); // HTTP 403 Forbidden
    } else  {
        // Your existing registration logic for creating a user
    $request->validate([
        'email' => 'required|string|email|max:255',
        'password' => 'required|string',
    ]);

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => $request->password,
    ]);

    $user->save();

    $token = $user->createToken('authToken')->plainTextToken;

    return response()->json([
        'status' => 200,
        'message' => 'Registration successful.',
        'user' => $user,
    ], 200); // HTTP 201 Created
    }
    }

    public function login(Request $request) {

        $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('email', 'password');
    
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('API Token')->plainTextToken;
            
            return response()->json(['token' => $token]);
        }
    
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    
    public function logout() {
        Auth::user()->tokens()->delete();
        return response()->json(['message' => 'Logged out']);
    }
    
}