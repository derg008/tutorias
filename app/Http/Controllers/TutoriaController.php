<?php

namespace App\Http\Controllers;

use App\Models\Tutoria;
use App\Models\Student;
use App\Models\Tutor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TutoriaController extends Controller
{
    public function index()
    {
        $tutorias = Tutoria::with(['student.user', 'tutor.user'])
            ->latest()
            ->paginate(15);

        return Inertia::render('Tutoria/Index', [
            'tutorias' => $tutorias
        ]);
    }

    public function create()
    {
        $students = Student::with('user')->get();
        $tutors   = Tutor::with('user')->get();

        return Inertia::render('Tutoria/Create', [
            'students' => $students,
            'tutors'   => $tutors,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'student_id' => 'required|exists:students,id',
            'tutor_id'   => 'required|exists:tutors,id',
            'materia'    => 'required|string|max:100',
            'start_time' => 'required|date',
            'end_time'   => 'required|date|after:start_time',
        ]);

        Tutoria::create($validated);

        return redirect()->route('tutorias.index')
                         ->with('success', 'Tutoría creada correctamente.');
    }
}