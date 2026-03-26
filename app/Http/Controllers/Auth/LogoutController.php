<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;

class LogoutController extends Controller
{
    /**
     * Cerrar sesión del usuario actual.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::logout();

        // Invalidar la sesión actual
        $request->session()->invalidate();

        // Regenerar el token de CSRF para mayor seguridad
        $request->session()->regenerateToken();

        // Redirigir después de cerrar sesión
        return redirect()->route('login')
            ->with('success', 'Sesión cerrada correctamente.');
    }
}