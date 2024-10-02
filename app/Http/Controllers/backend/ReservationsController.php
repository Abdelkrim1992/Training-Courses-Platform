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

    public function getPendingReservations()
    {
        $reservations = Reservation::where('status', 'pending')->get();
        return response()->json(['data' => $reservations], 200);
    }

    // Accept reservation and move to the student table
    public function acceptReservation($id)
    {
        // Find the reservation by ID
        $reservation = Reservation::findOrFail($id);

        // Move the data to the Student table
        $student = new Student();
        $student->name = $reservation->client_name;
        $student->email = $reservation->client_email;
        $student->phone = $reservation->client_phone;
        $student->course_title = $reservation->course_choosed;
        $student->save();

        // Delete the reservation or mark it as accepted
        $reservation->delete();

        return response()->json(['message' => 'Reservation accepted and moved to the student list'], 200);
    }

    // Remove a reservation from the system
    public function deleteReservation($id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->delete();

        return response()->json(['message' => 'Reservation successfully deleted'], 200);
    }
}
