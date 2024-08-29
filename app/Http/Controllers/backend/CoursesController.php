<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;

class CoursesController extends Controller
{
    public function index(){

        $CourseList = Cousre::all();

        if(!empty($CourseList)){
            return response()->json([
                'status' => 200,
                'message' => 'Students',
                'data' => $CourseList
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

        $course = new Course ;
        $course->name = $request-> name;
        $course->email = $request-> email;
        $course->phone = $request-> phone;
        $course->course_name = $request-> course_name;

        $course->save();

        return response()->json([
            ['message' => 'course added']
        ]);
    }

    public function show($id){

        $course = Course::find($id);
        return response()->json([
            'status' => 200,
            'data' => $course
        ]);
    }

    public function update(Request $request, $id){

        $course = Course::find($id);
        $course->name = $request->name;
        $course->phone = $request->phone;
        $course->email = $request->email;
        $course->course_name = $request->course_name;
        $course->save();

        return response()->json(['status' => 200, 'message' => 'Student updated successfully']);

    }

    public function destroy($id){

        $course = Course::find($id);

        if ($course) {
            $course->delete();
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
