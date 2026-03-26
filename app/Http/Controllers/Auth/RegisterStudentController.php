<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class RegisterStudentController extends Controller
{
    /**
     * Muestra el formulario de registro de estudiante
     */
    public function create()
    {
        return Inertia::render('Auth/Register', [
            'role' => 'student',
            'errors' => session('errors') ? session('errors')->getBag('default')->toArray() : [],
        ]);
    }

    /**
     * Procesa el registro de estudiante
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'student',           // Asignamos rol estudiante
        ]);

        // Asignar rol usando Spatie (si lo tienes) o campo 'role'
        // $user->assignRole('student');

        Auth::login($user);

        return redirect()->route('dashboard')
            ->with('success', '¡Registro completado! Bienvenido a Tutorías Platform.');
    }
}