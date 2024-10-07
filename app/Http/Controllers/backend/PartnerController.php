<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Partner;
use App\Models\PartnerImage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PartnerController extends Controller
{
    public function index()
    {
        $partners = Partner::with('partnerImage')->get()->map(function ($partner) {
            // Get the latest image if available
            $latestImage = $partner->partnerImage()->latest('created_at')->first();
            $partner->partner_image_url = $latestImage ? asset('storage/' . $latestImage->partner_image) : null;
            return $partner;
        });
    
        return response()->json([
            'status' => 200,
            'data' => $partners
        ]);
    }
    

    public function store(Request $request)
    {
        // Validate input with custom messages
        $request->validate([
            'partner_name' => 'required|string',
            'image' => 'nullable|array', // Expecting an array of images
            'image.*' => 'image|mimes:jpg,jpeg,png|max:2048', // Validate each image
        ]);
    
        // Create a new partner instance
        $partner = new Partner();
        
        // Assign values to partner fields
        $partner->partner_name = $request->partner_name;
        
        // Save the partner to the database
        $partner->save();
    
        // Save each uploaded image (if any)
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $image) {
                // Create a unique name for the image
                $uniqueName = time() . '-' . Str::random(10) . '.' . $image->getClientOriginalExtension();
                
                // Save the image to the public storage
                $imagePath = $image->storeAs('images/partners_images', $uniqueName, 'public');
    
                // Create a new PartnerImage record
                PartnerImage::create([
                    'partner_id' => $partner->id,
                    'partner_image' => $imagePath,
                ]);
            }
        }
    
        // Return success response
        return response()->json(['status' => 200, 'message' => 'Partner created successfully']);
    }
    

    public function show($id)
    {
        // Find the course by ID, including its related image
        $partner = Partner::with('partnerImage')->find($id);
    
        if (!$partner) {
            return response()->json(['status' => 404, 'message' => 'partner not found']);
        }
    
        // Get the latest image if available
        $latestImage = $partner->partnerImage()->latest('created_at')->first();
        $partner->partner_image_url = $latestImage ? asset('storage/' . $latestImage->partner_image) : null;
    
        return response()->json([
            'status' => 200,
            'data' => $partner
        ]);
    }
       
    public function update(Request $request, $id)
    {
        // Validate input
        $request->validate([
            'partner_name' => 'string|required',
            'image' => 'nullable|array', // Expecting an array of images
        ]);

        $partner = Partner::find($id);

        if (!$partner) {
            return response()->json(['status' => 404, 'message' => 'Course not found']);
        }

        
        $partner->partner_name = $request->partner_name;
        

        // Save each image
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $image) {
                $uniqueName = time() . '-' . Str::random(10) . '.' . $image->getClientOriginalExtension();
                $imagePath = $image->storeAs('images/partners_images', $uniqueName, 'public');

                PartnerImage::create([
                    'partner_id' => $partner->id,
                    'partner_image' => $imagePath,
                ]);
            }
        }

        $partner->update($request->except('image'));

        $partner->save();

        return response()->json(['status' => 200, 'message' => 'partner updated successfully']);
    }

    public function destroy($id)
    {
        $partner = Partner::find($id);

        if ($partner) {
            // Delete associated images
            PartnerImage::where('partner_id', $partner->id)->get()->each(function ($image) {
                Storage::disk('public')->delete($image->partner_image);
                $image->delete();
            });

            // Delete the course
            $partner->delete();

            return response()->json([
                'status' => 200,
                'message' => 'partner deleted successfully',
                'data' => []
            ]);
        }

        return response()->json(['status' => 404, 'message' => 'partner not found', 'data' => []]);
    }
}
