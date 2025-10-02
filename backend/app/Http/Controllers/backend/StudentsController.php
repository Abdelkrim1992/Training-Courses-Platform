<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;

class StudentsController extends Controller
{
    public function index(){

        $StudentsList = Student::all();

        if(!empty($StudentsList)){
            return response()->json([
                'status' => 200,
                'message' => 'Students',
                'data' => $StudentsList
            ]);
        }

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

    public function show($id){

        $student = Student::find($id);
        return response()->json([
            'status' => 200,
            'data' => $student
        ]);
    }

    public function update(Request $request, $id){

        $student = Student::find($id);
        $student->name = $request->name;
        $student->phone = $request->phone;
        $student->email = $request->email;
        $student->course_name = $request->course_name;
        $student->save();

        return response()->json(['status' => 200, 'message' => 'Student updated successfully']);

    }

    public function destroy($id){

        $student = Student::find($id);

        if ($student) {
            $student->delete();
            return response()->json([
                'status' => 200, 
                'message' => 'Student deleted successfully',
                'data' => []
            ]);
        } else {
            return response()->json(['status' => 404, 'message' => 'Student not found','data' => []]);
        }

    }
}
