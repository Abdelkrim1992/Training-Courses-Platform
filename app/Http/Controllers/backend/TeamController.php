<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Team;
use App\Models\MemberPhoto;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TeamController extends Controller
{
    public function index(){

        $TeamMemberList = Team::all();

        if(!empty($TeamMemberList)){
            return response()->json([
                'status' => 200,
                'message' => 'Team',
                'data' => $TeamMemberList
            ]);
        }

    }

    public function store(Request $request){

        $request->validate([
            'member_name'=>'required',
            'member_email'=>'required',
            'member_phone'=>'required',
            'member_service'=>'required',
            'facebook'=>'required',
            'instagram'=>'required',
            'linkden'=>'required',
            'image' => 'nullable|array', // Expecting an array of images
            'image.*' => 'image|mimes:jpg,jpeg,png|max:2048', // Validate each image
        ]);

        $team = new Team ;
        $team->member_name = $request-> member_name;
        $team->member_phone = $request-> member_phone;
        $team->member_email = $request-> member_email;
        $team->facebook = $request->facebook;
        $team->instagram = $request->instagram;
        $team->linkden = $request->linkden;
        $team->member_service = $request-> member_service;

        $team->save();

        if ($request->hasFile('photo')) {
            foreach ($request->file('photo') as $image) {
                // Create a unique name for the image
                $uniqueName = time() . '-' . Str::random(10) . '.' . $image->getClientOriginalExtension();
                
                // Save the image to the public storage
                $imagePath = $image->storeAs('images/members_photos', $uniqueName, 'public');
    
                // Create a new ProjectImage record
                MemberPhoto::create([
                    'member_id' => $team->id,
                    'member_photo' => $imagePath,
                ]);
            }
        }

        return response()->json([
            ['message' => 'team registered successfully']
        ]);
    }

    public function show($id)
{
    // Find the team member by ID, including the related image (memberPhoto)
    $team = Team::with('memberPhoto')->find($id);

    if (!$team) {
        return response()->json(['status' => 404, 'message' => 'Team member not found']);
    }

    // Get the latest image if available
    $latestImage = $team->memberPhoto()->latest('created_at')->first();

    // Add the member's photo URL to the response
    $team->member_photo_url = $latestImage ? asset('storage/' . $latestImage->member_photo) : null;

    return response()->json([
        'status' => 200,
        'data' => $team
    ]);
}


    public function update(Request $request, $id){

        $request->validate([
            'member_name'=>'required',
            'member_email'=>'required',
            'member_phone'=>'required',
            'member_service'=>'required',
            'facebook'=>'required',
            'instagram'=>'required',
            'linkden'=>'required',
            'image' => 'nullable|array', // Expecting an array of images
            'image.*' => 'image|mimes:jpg,jpeg,png|max:2048', // Validate each image
        ]);

        $team = Team::find($id);
        $team->member_name = $request->member_name;
        $team->member_phone = $request->member_phone;
        $team->member_email = $request->member_email;
        $team->facebook = $request->facebook;
        $team->instagram = $request->instagram;
        $team->linkden = $request->linkden;
        $team->member_service = $request->member_service;
        $team->save();

                // Save each uploaded image (if any)
        if ($request->hasFile('photo')) {
            foreach ($request->file('photo') as $image) {
                // Create a unique name for the image
                $uniqueName = time() . '-' . Str::random(10) . '.' . $image->getClientOriginalExtension();
                
                // Save the image to the public storage
                $imagePath = $image->storeAs('images/members_photos', $uniqueName, 'public');
    
                // Create a new ProjectImage record
                MemberPhoto::create([
                    'member_id' => $team->id,
                    'member_photo' => $imagePath,
                ]);
            }
        }

        return response()->json(['status' => 200, 'message' => 'team updated successfully']);

    }

    public function destroy($id){

        $team = Team::find($id);

        if ($team) {
            $team->delete();
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
