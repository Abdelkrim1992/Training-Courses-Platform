<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\ServiceImage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
class ServicesController extends Controller
{
    public function index()
    {
        $services = Service::with('serviceImage')->get()->map(function ($service) {
            // Get the latest image if available
            $latestImage = $service->serviceImage()->latest('created_at')->first();
            $service->service_image_url = $latestImage ? asset('storage/' . $latestImage->service_image) : null;
            return $service;
        });
    
        return response()->json([
            'status' => 200,
            'data' => $services
        ]);
    }
    

    public function store(Request $request)
    {
        // Validate input with custom messages
        $request->validate([
            'service_title' => 'required|string|max:2000',
            'short_description' => 'required|string',
            'image' => 'nullable|array', // Expecting an array of images
            'image.*' => 'image|mimes:jpg,jpeg,png|max:2048', // Validate each image
        ]);
    
        // Create a new service instance
        $service = new Service();
        
        // Assign values to service fields
        $service->service_title = $request->service_title;
        $service->short_description = $request->short_description;
        
        // Save the service to the database
        $service->save();
    
        // Save each uploaded image (if any)
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $image) {
                // Create a unique name for the image
                $uniqueName = time() . '-' . Str::random(10) . '.' . $image->getClientOriginalExtension();
                
                // Save the image to the public storage
                $imagePath = $image->storeAs('images/services_images', $uniqueName, 'public');
    
                // Create a new ServiceImage record
                ServiceImage::create([
                    'service_id' => $service->id,
                    'service_image' => $imagePath,
                ]);
            }
        }
    
        // Return success response
        return response()->json(['status' => 200, 'message' => 'Service created successfully']);
    }
    

    public function show($id)
    {
        // Find the course by ID, including its related image
        $service = Service::with('serviceImage')->find($id);
    
        if (!$service) {
            return response()->json(['status' => 404, 'message' => 'service not found']);
        }
    
        // Get the latest image if available
        $latestImage = $service->serviceImage()->latest('created_at')->first();
        $service->service_image_url = $latestImage ? asset('storage/' . $latestImage->service_image) : null;
    
        return response()->json([
            'status' => 200,
            'data' => $service
        ]);
    }
       
    public function update(Request $request, $id)
    {
        // Validate input
        $request->validate([
            'service_title' => 'required|string|max:255',
            'short_description' => 'required|string|max:2000',
            'image' => 'nullable|array', // Expecting an array of images
        ]);

        $service = Service::find($id);

        if (!$service) {
            return response()->json(['status' => 404, 'message' => 'Course not found']);
        }

        $service->service_title = $request->service_title;
        $service->short_description = $request->short_description;
        

        // Save each image
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $image) {
                $uniqueName = time() . '-' . Str::random(10) . '.' . $image->getClientOriginalExtension();
                $imagePath = $image->storeAs('images/services_images', $uniqueName, 'public');

                ServiceImage::create([
                    'service_id' => $service->id,
                    'service_image' => $imagePath,
                ]);
            }
        }

        $service->update($request->except('image'));

        $service->save();

        return response()->json(['status' => 200, 'message' => 'service updated successfully']);
    }

    public function destroy($id)
    {
        $service = Service::find($id);

        if ($service) {
            // Delete associated images
            ServiceImage::where('service_id', $service->id)->get()->each(function ($image) {
                Storage::disk('public')->delete($image->service_image);
                $image->delete();
            });

            // Delete the course
            $service->delete();

            return response()->json([
                'status' => 200,
                'message' => 'service deleted successfully',
                'data' => []
            ]);
        }

        return response()->json(['status' => 404, 'message' => 'service not found', 'data' => []]);
    }
}
