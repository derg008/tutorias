<?php

namespace App\Http\Controllers;

use App\Models\Tutoria;
use App\Models\Student;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
{
    $stats = [
        'today_tutorias'   => 12,
        'active_students'  => 35,
        'total_hours'      => 245,
        'average_rating'   => 4.6,
    ];

    return Inertia::render('Dashboard', [
        'stats' => $stats
    ]);
}
}