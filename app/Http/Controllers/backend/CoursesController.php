<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\CourseImage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CoursesController extends Controller
{
    public function index()
    {
        $courses = Course::with('courseImage')->get();
        return response()->json([
            'status' => 200,
            'data' => $courses
        ]);
    }

    public function store(Request $request)
    {
        // Validate input
        $request->validate([
            'course_title' => 'required|string|max:255',
            'teacher_name' => 'required|string|max:255',
            'duration' => 'required|string|max:255',
            'date' => 'required|date',
            'category' => 'required|string|max:255',
            'course_description' => 'required|string',
            'course_tips' => 'required|string',
            'image' => 'nullable|array', // Expecting an array of images
            'image.*' => 'image|mimes:jpg,jpeg,png|max:2048', // Validate each image
        ]);

        // Save the course first
        $course = new Course();
        $course->course_title = $request->course_title;
        $course->teacher_name = $request->teacher_name;
        $course->course_description = $request->course_description;
        $course->course_tips = $request->course_tips;
        $course->category = $request->category;
        $course->duration = $request->duration;
        $course->date = $request->date;
        $course->save(); // Save course to get the ID

        // Save each image
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $image) {
                $uniqueName = time() . '-' . Str::random(10) . '.' . $image->getClientOriginalExtension();
                $imagePath = $image->storeAs('images', $uniqueName, 'public');

                CourseImage::create([
                    'course_id' => $course->id,
                    'course_image' => $imagePath,
                ]);
            }
        }

        return response()->json(['status' => 200, 'message' => 'Course added successfully']);
    }

    public function update(Request $request, $id)
    {
        // Validate input
        $request->validate([
            'course_title' => 'required|string|max:255',
            'teacher_name' => 'required|string|max:255',
            'duration' => 'required|string|max:255',
            'date' => 'required|date',
            'category' => 'required|string|max:255',
            'course_description' => 'required|string',
            'course_tips' => 'required|string',
            'image' => 'nullable|array', // Expecting an array of images
            'image.*' => 'image|mimes:jpg,jpeg,png|max:2048', // Validate each image
        ]);

        $course = Course::find($id);

        if (!$course) {
            return response()->json(['status' => 404, 'message' => 'Course not found']);
        }

        $course->course_title = $request->course_title;
        $course->teacher_name = $request->teacher_name;
        $course->course_description = $request->course_description;
        $course->course_tips = $request->course_tips;
        $course->category = $request->category;
        $course->duration = $request->duration;
        $course->date = $request->date;
        $course->save();

        // Save each image
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $image) {
                $uniqueName = time() . '-' . Str::random(10) . '.' . $image->getClientOriginalExtension();
                $imagePath = $image->storeAs('images', $uniqueName, 'public');

                CourseImage::create([
                    'course_id' => $course->id,
                    'course_image' => $imagePath,
                ]);
            }
        }

        return response()->json(['status' => 200, 'message' => 'Course updated successfully']);
    }

    public function destroy($id)
    {
        $course = Course::find($id);

        if ($course) {
            // Delete associated images
            CourseImage::where('course_id', $course->id)->get()->each(function ($image) {
                Storage::disk('public')->delete($image->course_image);
                $image->delete();
            });

            // Delete the course
            $course->delete();

            return response()->json([
                'status' => 200,
                'message' => 'Course deleted successfully',
                'data' => []
            ]);
        }

        return response()->json(['status' => 404, 'message' => 'Course not found', 'data' => []]);
    }
}
