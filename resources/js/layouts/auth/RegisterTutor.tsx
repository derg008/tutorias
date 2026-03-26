import React from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function RegisterTutor() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    specialty: '',
    experience_years: '',
    hourly_rate: '',
    bio: '',
    education: '',
    certifications: '',
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/register-tutor');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex items-center justify-center py-12 px-4">
      <Head title="Registro de Tutor" />

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white tracking-tight">Regístrate como Tutor</h2>
          <p className="text-indigo-300 mt-3 text-lg">Comparte tu conocimiento y genera ingresos enseñando</p>
        </div>

        <form onSubmit={submit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="md:col-span-2">
              <label className="block text-sm text-slate-300 mb-2 font-medium">Nombre completo</label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Dr. Ana Martínez"
                required
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-sm text-slate-300 mb-2 font-medium">Correo electrónico</label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                placeholder="ana.martinez@ejemplo.com"
                required
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Especialidad */}
            <div>
              <label className="block text-sm text-slate-300 mb-2 font-medium">Especialidad principal</label>
              <input
                type="text"
                value={data.specialty}
                onChange={(e) => setData('specialty', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                placeholder="Matemáticas Avanzadas"
                required
              />
              {errors.specialty && <p className="text-red-400 text-sm mt-1">{errors.specialty}</p>}
            </div>

            {/* Años de experiencia */}
            <div>
              <label className="block text-sm text-slate-300 mb-2 font-medium">Años de experiencia</label>
              <input
                type="number"
                value={data.experience_years}
                onChange={(e) => setData('experience_years', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                placeholder="7"
                min="0"
              />
            </div>

            {/* Tarifa por hora */}
            <div>
              <label className="block text-sm text-slate-300 mb-2 font-medium">Tarifa por hora (USD)</label>
              <input
                type="number"
                step="0.01"
                value={data.hourly_rate}
                onChange={(e) => setData('hourly_rate', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                placeholder="35.00"
                min="0"
              />
              {errors.hourly_rate && <p className="text-red-400 text-sm mt-1">{errors.hourly_rate}</p>}
            </div>

            {/* Educación */}
            <div>
              <label className="block text-sm text-slate-300 mb-2 font-medium">Formación académica</label>
              <input
                type="text"
                value={data.education}
                onChange={(e) => setData('education', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                placeholder="Lic. en Matemáticas - Universidad Nacional"
              />
            </div>
          </div>

          {/* Biografía */}
          <div>
            <label className="block text-sm text-slate-300 mb-2 font-medium">Biografía / Sobre mí</label>
            <textarea
              value={data.bio}
              onChange={(e) => setData('bio', e.target.value)}
              rows={5}
              className="w-full bg-white/10 border border-white/20 rounded-3xl px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 resize-y"
              placeholder="Soy profesor de matemáticas con más de 8 años de experiencia. Me apasiona ayudar a estudiantes a comprender conceptos complejos de forma sencilla y motivadora..."
            />
            {errors.bio && <p className="text-red-400 text-sm mt-1">{errors.bio}</p>}
          </div>

          {/* Certificaciones */}
          <div>
            <label className="block text-sm text-slate-300 mb-2 font-medium">Certificaciones (opcional)</label>
            <input
              type="text"
              value={data.certifications}
              onChange={(e) => setData('certifications', e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
              placeholder="Certificado en Enseñanza Avanzada, TOEFL, etc."
            />
          </div>

          {/* Contraseñas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-slate-300 mb-2 font-medium">Contraseña</label>
              <input
                type="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                required
              />
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2 font-medium">Confirmar contraseña</label>
              <input
                type="password"
                value={data.password_confirmation}
                onChange={(e) => setData('password_confirmation', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-700 hover:via-violet-700 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl text-lg transition-all duration-300 disabled:opacity-70 mt-4"
          >
            {processing ? 'Creando perfil de tutor...' : 'Crear cuenta de Tutor'}
          </button>
        </form>

        <p className="text-center text-slate-400 text-sm mt-8">
          ¿Ya tienes cuenta?{' '}
          <a href="/login" className="text-indigo-400 hover:underline font-medium">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
}