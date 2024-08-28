<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;

class StudentsController extends Controller
{
    public function index(){

        $students = Student::all();
        $students = $students->latest()-get();

        return response()->json([
            'students' => $students,
        ]);
    }

    public function store(Request $request){

        $request->validate([
            'name'=>'required',
            'email'=>'required',
            'phone'=>'required',
            'course_name'=>'required',
        ]);

        $student = new Student ;
        $student->name = $request-> name;
        $student->email = $request-> email;
        $student->phone = $request-> phone;
        $student->course_name = $request-> course_name;

        $student->save();

        return response()->json([
            ['message' => 'User registered successfully']
        ]);
    }
}
