<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Team;

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
            'member_phone'=>'required',
            'member_phone'=>'required',
            'member_service'=>'required',
        ]);

        $team = new Team ;
        $team->member_name = $request-> member_name;
        $team->member_phone = $request-> member_phone;
        $team->member_email = $request-> member_email;
        $team->member_service = $request-> member_service;

        $team->save();

        return response()->json([
            ['message' => 'team registered successfully']
        ]);
    }

    public function show($id){

        $team = Team::find($id);
        return response()->json([
            'status' => 200,
            'data' => $team
        ]);
    }

    public function update(Request $request, $id){

        $team = Team::find($id);
        $team->member_name = $request->member_name;
        $team->member_phone = $request->member_phone;
        $team->member_email = $request->member_email;
        $team->member_service = $request->member_service;
        $team->save();

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
