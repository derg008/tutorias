<?php

namespace App\Http\Controllers;

use App\Models\Tutoria;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TutoriaCalendarController extends Controller
{
    public function index()
    {
        $tutorias = Tutoria::with(['student.user', 'tutor.user'])
            ->get()
            ->map(function ($tutoria) {
                return [
                    'id'          => $tutoria->id,
                    'title'       => $tutoria->materia . ' - ' . $tutoria->student->user->name,
                    'start'       => $tutoria->start_time->toIso8601String(),
                    'end'         => $tutoria->end_time->toIso8601String(),
                    'color'       => $this->getColorByMateria($tutoria->materia),
                    'extendedProps' => [
                        'tutor'   => $tutoria->tutor->user->name,
                        'student' => $tutoria->student->user->name,
                        'estado'  => $tutoria->estado,
                    ]
                ];
            });

        return Inertia::render('Calendar', [
            'tutorias' => $tutorias
        ]);
    }

    private function getColorByMateria(string $materia): string
    {
        return match (strtolower($materia)) {
            'matemáticas', 'matematicas' => '#3b82f6',   // azul
            'física', 'fisica'           => '#10b981',   // verde
            'literatura'                 => '#8b5cf6',   // violeta
            'química', 'quimica'         => '#f59e0b',   // naranja
            'historia'                   => '#ef4444',   // rojo
            'inglés', 'ingles'           => '#14b8a6',   // teal
            default                      => '#6b7280',   // gris
        };
    }
}