<?php

use App\Http\Controllers\TutoriaController;
use App\Http\Controllers\TutoriaCalendarController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Auth\RegisterStudentController;
use App\Http\Controllers\Auth\RegisterTutorController;
use App\Http\Controllers\Auth\LogoutController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Inertia\Inertia;

// ======================
// RUTAS PÚBLICAS
// ======================

// Página de bienvenida
Route::inertia('/', 'welcome')->name('home');

// Role Selection (pantalla intermedia)
Route::get('/register', fn() => Inertia::render('Auth/RoleSelection'))
    ->name('register');

// Registro de Estudiantes
Route::get('/register-student', [RegisterStudentController::class, 'create'])
    ->name('register.student');

Route::post('/register-student', [RegisterStudentController::class, 'store']);

// Registro de Tutores
Route::get('/register-tutor', [RegisterTutorController::class, 'create'])
    ->name('register.tutor');

Route::post('/register-tutor', [RegisterTutorController::class, 'store']);

// ======================
// AUTENTICACIÓN Y LOGOUT
// ======================

// Login (Fortify maneja /login por defecto)
Route::post('/logout', [LogoutController::class, 'destroy'])->name('logout');

// ======================
// RUTAS PROTEGIDAS
// ======================
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    Route::resource('tutorias', TutoriaController::class);
    
    Route::get('/calendar', [TutoriaCalendarController::class, 'index'])->name('calendar.index');
    Route::get('/calendario', [TutoriaCalendarController::class, 'index'])->name('tutorias.calendario');
});

require __DIR__.'/settings.php';