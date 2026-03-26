import React, { useState, FormEvent } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

interface FormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role?: string;           // estudiante, tutor, coordinador, etc.
  carrera?: string;        // si es relevante para tutorías
}

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm<FormData>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: 'estudiante',      // valor por defecto según tu sistema
    carrera: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    post('/register', {
      onSuccess: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <>
      <Head title="Registro - Sistema de Tutorías" />

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sistema de Tutorías Universitarias
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Crea tu cuenta para acceder al sistema
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form onSubmit={submit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Correo electrónico institucional
                </label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Rol (importante para tutorías) */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tipo de usuario
                </label>
                <select
                  value={data.role}
                  onChange={(e) => setData('role', e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="estudiante">Estudiante</option>
                  <option value="tutor">Tutor</option>
                  <option value="coordinador">Coordinador</option>
                </select>
              </div>

              {/* Carrera (opcional pero útil en tutorías) */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Carrera / Programa
                </label>
                <input
                  type="text"
                  value={data.carrera}
                  onChange={(e) => setData('carrera', e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="Ingeniería en Sistemas, Administración, etc."
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>

              {/* Confirmar Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirmar contraseña
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={data.password_confirmation}
                  onChange={(e) => setData('password_confirmation', e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="h-4 w-4 text-indigo-600"
                />
                <label className="ml-2 text-sm text-gray-600">Mostrar contraseñas</label>
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {processing ? 'Creando cuenta...' : 'Registrarse'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                ¿Ya tienes cuenta?{' '}
                <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}