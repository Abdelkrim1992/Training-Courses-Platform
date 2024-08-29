<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Review;

class ReviewsController extends Controller
{
    public function index(){

        $ReviewsList = Review::all();

        if(!empty($ReviewsList)){
            return response()->json([
                'status' => 200,
                'message' => 'reviews',
                'data' => $ReviewsList
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

        $review = new Review ;
        $review->name = $request-> name;
        $review->email = $request-> email;
        $review->phone = $request-> phone;
        $review->course_name = $request-> course_name;

        $review->save();

        return response()->json([
            ['message' => 'review registered successfully']
        ]);
    }

    public function show($id){

        $review = Review::find($id);
        return response()->json([
            'status' => 200,
            'data' => $review
        ]);
    }

    public function update(Request $request, $id){

        $review = Reviews::find($id);
        $review->name = $request->name;
        $review->phone = $request->phone;
        $review->email = $request->email;
        $review->course_name = $request->course_name;
        $review->save();

        return response()->json(['status' => 200, 'message' => 'review updated successfully']);

    }

    public function destroy($id){

        $review = Review::find($id);

        if ($review) {
            $review->delete();
            return response()->json([
                'status' => 200, 
                'message' => 'review deleted successfully',
                'data' => []
            ]);
        } else {
            return response()->json(['status' => 404, 'message' => 'review not found','data' => []]);
        }

    }
}
