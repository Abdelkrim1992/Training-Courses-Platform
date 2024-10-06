<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\ProjectImage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProjectsController extends Controller
{
    public function index()
    {
        $projects = Project::with('projectImage')->get()->map(function ($project) {
            // Get the latest image if available
            $latestImage = $project->projectImage()->latest('created_at')->first();
            $project->project_image_url = $latestImage ? asset('storage/' . $latestImage->project_image) : null;
            return $project;
        });
    
        return response()->json([
            'status' => 200,
            'data' => $projects
        ]);
    }
    

    public function store(Request $request)
    {
        // Validate input with custom messages
        $request->validate([
            'project_description' => 'required|string|max:2000',
            'project_tasks' => 'required|string|max:2000',
            'short_description' => 'required|string|max:2000',
            'project_name' => 'required|string|max:255',
            'domaine' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'started_date' => 'required|string',
            'dead_line' => 'required|string',
            'image' => 'nullable|array', // Expecting an array of images
            'image.*' => 'image|mimes:jpg,jpeg,png|max:2048', // Validate each image
        ]);
    
        // Create a new project instance
        $project = new Project();
        
        // Assign values to project fields
        $project->project_description = $request->project_description;
        $project->project_tasks = $request->project_tasks;
        $project->project_name = $request->project_name;
        $project->short_description = $request->short_description;
        $project->domaine = $request->domaine;
        $project->city = $request->city;
        $project->dead_line = $request->dead_line;
        $project->started_date = $request->started_date;
        
        // Save the project to the database
        $project->save();
    
        // Save each uploaded image (if any)
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $image) {
                // Create a unique name for the image
                $uniqueName = time() . '-' . Str::random(10) . '.' . $image->getClientOriginalExtension();
                
                // Save the image to the public storage
                $imagePath = $image->storeAs('images/projects_images', $uniqueName, 'public');
    
                // Create a new ProjectImage record
                ProjectImage::create([
                    'project_id' => $project->id,
                    'project_image' => $imagePath,
                ]);
            }
        }
    
        // Return success response
        return response()->json(['status' => 200, 'message' => 'Project created successfully']);
    }
    

    public function show($id)
    {
        // Find the course by ID, including its related image
        $project = Project::with('projectImage')->find($id);
    
        if (!$project) {
            return response()->json(['status' => 404, 'message' => 'project not found']);
        }
    
        // Get the latest image if available
        $latestImage = $project->projectImage()->latest('created_at')->first();
        $project->project_image_url = $latestImage ? asset('storage/' . $latestImage->project_image) : null;
    
        return response()->json([
            'status' => 200,
            'data' => $project
        ]);
    }
       
    public function update(Request $request, $id)
    {
        // Validate input
        $request->validate([
            'project_description' => 'required|string|max:2000',
            'project_tasks' => 'required|string|max:2000',
            'project_name' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'short_description' => 'required|string|max:2000',
            'domaine' => 'required|string|max:255',
            'dead_line' => 'required|string',
            'started_date' => 'required|string',
            'image' => 'nullable|array', // Expecting an array of images
        ]);

        $project = Project::find($id);

        if (!$project) {
            return response()->json(['status' => 404, 'message' => 'Course not found']);
        }

        $project->project_description = $request->project_description;
        $project->project_tasks = $request->project_tasks;
        $project->domaine = $request->domaine;
        $project->project_name = $request->project_name;
        $project->city = $request->city;
        $project->short_description = $request->short_description;
        $project->dead_line = $request->dead_line;
        $project->started_date = $request->started_date;
        

        // Save each image
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $image) {
                $uniqueName = time() . '-' . Str::random(10) . '.' . $image->getClientOriginalExtension();
                $imagePath = $image->storeAs('images/projects_images', $uniqueName, 'public');

                ProjectImage::create([
                    'project_id' => $project->id,
                    'project_image' => $imagePath,
                ]);
            }
        }

        $project->update($request->except('image'));

        $project->save();

        return response()->json(['status' => 200, 'message' => 'project updated successfully']);
    }

    public function destroy($id)
    {
        $project = Project::find($id);

        if ($project) {
            // Delete associated images
            ProjectImage::where('project_id', $project->id)->get()->each(function ($image) {
                Storage::disk('public')->delete($image->project_image);
                $image->delete();
            });

            // Delete the course
            $project->delete();

            return response()->json([
                'status' => 200,
                'message' => 'project deleted successfully',
                'data' => []
            ]);
        }

        return response()->json(['status' => 404, 'message' => 'project not found', 'data' => []]);
    }
}
