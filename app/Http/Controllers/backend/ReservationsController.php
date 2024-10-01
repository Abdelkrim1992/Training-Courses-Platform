<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Reservation; // Assuming you have a Reservation model
use App\Models\Student;     // Assuming you have a Student model

class ReservationsController extends Controller
{
    // Store the reservation data from the form
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'client_name' => 'required|string|max:255',
            'client_email' => 'required|email',
            'client_phone' => 'required|string|max:15',
            'message' => 'required|string',
        ]);

        $reservation = Reservation::create($validatedData);

        return response()->json([
            'status' => 200,
            'message' => 'Reservation submitted successfully!',
            'data' => $reservation,
        ]);
    }

    // Get all reservations with status 'pending'
    public function getPendingReservations()
    {
        $reservations = Reservation::where('status', 'pending')->get();
        return response()->json([
            'status' => 200,
            'data' => $reservations,
        ]);
    }

    // Accept or refuse the reservation
    public function updateReservationStatus(Request $request, $id)
    {
        $validatedData = $request->validate([
            'status' => 'required|in:accepted,refused',
        ]);

        $reservation = Reservation::findOrFail($id);

        if ($validatedData['status'] === 'accepted') {
            // Move reservation data to the Student table
            $student = new Student();
            $student->name = $reservation->client_name;
            $student->email = $reservation->client_email;
            $student->phone = $reservation->client_phone;
            $student->course_title = $reservation->course_choosed;
            $student->save();

            // Mark the reservation as accepted
            $reservation->status = 'accepted';
            $reservation->save();

            return response()->json([
                'status' => 200,
                'message' => 'Reservation accepted and student added!',
            ]);
        } elseif ($validatedData['status'] === 'refused') {
            // Handle refusal with confirmation
            $reservation->delete();

            return response()->json([
                'status' => 200,
                'message' => 'Reservation refused and deleted!',
            ]);
        }
    }
}
