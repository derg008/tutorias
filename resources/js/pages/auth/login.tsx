import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

interface Props {
  status?: string;
  canResetPassword?: boolean;
}

export default function Login({ status, canResetPassword = true }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    post('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Tutorías Platform</h1>
          <p className="text-indigo-100 mt-2">Inicia sesión para continuar</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {status && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg text-sm">
              {status}
            </div>
          )}

          <form onSubmit={submit}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="tu@email.com"
                  required
                />
                {errors.email && <p className="mt-1 text-red-600 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="••••••••"
                  required
                />
                {errors.password && <p className="mt-1 text-red-600 text-sm">{errors.password}</p>}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={data.remember}
                    onChange={(e) => setData('remember', e.target.checked)}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">Recordarme</span>
                </label>

                {canResetPassword && (
                  <a href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                    ¿Olvidaste tu contraseña?
                  </a>
                )}
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl transition disabled:opacity-70"
              >
                {processing ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ¿No tienes cuenta?{' '}
              <a href="/register" className="text-indigo-600 font-medium hover:underline">
                Regístrate aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}