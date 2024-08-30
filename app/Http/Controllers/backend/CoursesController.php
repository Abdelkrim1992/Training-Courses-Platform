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
            'course_title'=>'required',
            'teacher_name'=>'required',
            'duration'=>'required',
            'date' => 'required',
            'course_description' =>'required',
            'course_tips' =>'required',
        ]);

        $course = new Course ;
        $course->course_title = $request-> course_title;
        $course->teacher_name = $request-> teacher_name;
        $course->course_description = $request-> course_description;
        $course->course_tips = $request-> course_tips;
        $course->duration = $request-> duration;
        $course->date = $request-> date;

        $course->save();

        return response()->json([
            ['message' => 'course added']
        ]);
    }

    public function show($id){

        $course = Course::find($id);
        return response()->json([
            'status' => 200,
            'data' => $course,
        ]);
    }

    public function update(Request $request, $id){

        $course = Course::find($id);
        $course->course_title = $request-> course_title;
        $course->teacher_name = $request-> teacher_name;
        $course->course_description = $request-> course_description;
        $course->course_tips = $request-> course_tips;
        $course->duration = $request-> duration;
        $course->date = $request-> date;
        $course->save();

        return response()->json(['status' => 200, 'message' => 'Student updated successfully']);

    }

    public function destroy($id){

        $course = Course::find($id);

        if ($course) {
            $course->delete();
            return response()->json([
                'status' => 200, 
                'message' => 'course deleted successfully',
                'data' => []
            ]);
        } else {
            return response()->json(['status' => 404, 'message' => 'course not found','data' => []]);
        }

    }

}
