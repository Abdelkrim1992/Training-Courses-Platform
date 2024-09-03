<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CoursesController extends Controller
{
    public function index()
    {
        $courses = Course::all();
        return response()->json([
            'status' => 200,
            'data' => $courses
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'course_title' => 'required|string|max:255',
            'teacher_name' => 'required|string|max:255',
            'duration' => 'required|string|max:255',
            'date' => 'required|date',
            'category' => 'required|string|max:255',
            'course_description' => 'required|string',
            'course_tips' => 'required|string',
            'image' => 'nullable|string',
        ]);
    
        $course = new Course();
        $course->course_title = $request->input('course_title');
        $course->teacher_name = $request->input('teacher_name');
        $course->duration = $request->input('duration');
        $course->date = $request->input('date');
        $course->category = $request->input('category');
        $course->course_description = $request->input('course_description');
        $course->course_tips = $request->input('course_tips');
        $course->image = $request->input('image'); // Store the image path as a string
        $course->save();
    
        return response()->json(['status' => 200, 'message' => 'Course added successfully']);
    }

    public function show($id)
    {
        $course = Course::find($id);

        if ($course) {
            return response()->json([
                'status' => 200,
                'data' => $course,
            ]);
        }

        return response()->json([
            'status' => 404,
            'message' => 'Course not found',
            'data' => []
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'course_title' => 'required',
            'teacher_name' => 'required',
            'duration' => 'required',
            'date' => 'required',
            'category' => 'required',
            'course_description' => 'required',
            'course_tips' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
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

        if ($request->hasFile('image')) {
            // Delete old images if necessary
            if ($course->image) {
                Storage::disk('public')->delete($course->image);
                Storage::disk('public')->delete($course->thumbnail);
            }

            $image = $request->file('image');
            $imageName = time() . '-' . Str::slug($image->getClientOriginalName(), '-');

            // Save the original image
            $imagePath = $image->storeAs('backend/images', $imageName, 'public');

            // Generate thumbnail (optional)
            $thumbnailPath = 'backend/images/thumbnail/' . $imageName;
            $thumbnail = $this->createThumbnail($image, $thumbnailPath, 100, 100);

            $course->image = $imagePath; // Store the original image path in the database
            $course->thumbnail = $thumbnailPath; // Store the thumbnail path in the database
        }

        $course->save();

        return response()->json([
            'status' => 200,
            'message' => 'Course updated successfully',
        ]);
    }

    public function destroy($id)
    {
        $course = Course::find($id);

        if ($course) {
            // Delete images if necessary
            if ($course->image) {
                Storage::disk('public')->delete($course->image);
                Storage::disk('public')->delete($course->thumbnail);
            }

            $course->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Course deleted successfully',
                'data' => []
            ]);
        }

        return response()->json(['status' => 404, 'message' => 'Course not found', 'data' => []]);
    }

    public function uploadImage(Request $request)
    {
      $request->validate([
          'image' => 'required|image|mimes:jpg,jpeg,png,gif|max:2048',
      ]);
    
      $path = $request->file('image')->store('public/backend/images');
      $path = str_replace('public/', '', $path); // Convert to relative path
    
      return response()->json(['filePath' => $path]);
    }
    

}
