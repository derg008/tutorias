import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function RoleSelection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex items-center justify-center py-12 px-4">
      <Head title="Elige tu rol" />

      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl font-bold text-white mb-4">¿Quién eres?</h1>
        <p className="text-indigo-300 text-xl mb-12">Elige cómo quieres usar la plataforma</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Estudiante */}
          <Link
            href="/register-student"
            className="group bg-white/10 backdrop-blur-2xl border border-white/10 hover:border-emerald-400 rounded-3xl p-10 transition-all hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-4xl">🎓</span>
            </div>
            <h2 className="text-3xl font-semibold text-white mb-3">Soy Estudiante</h2>
            <p className="text-slate-400 text-lg">Quiero recibir clases y mejorar mis habilidades</p>
            <div className="mt-8 text-emerald-400 font-medium group-hover:underline">
              Registrarme como Estudiante →
            </div>
          </Link>

          {/* Card Tutor */}
          <Link
            href="/register-tutor"
            className="group bg-white/10 backdrop-blur-2xl border border-white/10 hover:border-violet-400 rounded-3xl p-10 transition-all hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-violet-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-4xl">👨‍🏫</span>
            </div>
            <h2 className="text-3xl font-semibold text-white mb-3">Soy Tutor</h2>
            <p className="text-slate-400 text-lg">Quiero enseñar y generar ingresos</p>
            <div className="mt-8 text-violet-400 font-medium group-hover:underline">
              Registrarme como Tutor →
            </div>
          </Link>
        </div>

        <p className="text-slate-400 mt-12">
          ¿Ya tienes cuenta?{' '}
          <a href="/login" className="text-indigo-400 hover:underline">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}