import { useForm } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

export default function AuthenticatedLayout({ children }: Props) {
  const { post, processing } = useForm();

  const handleLogout = () => {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      post('/logout');        // ← Usamos la URL directa en vez de route()
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Tutorías Platform</h1>

          <button
            onClick={handleLogout}
            disabled={processing}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50"
          >
            {processing ? 'Cerrando...' : 'Cerrar sesión'}
          </button>
        </div>
      </nav>

      <main className="py-8">
        {children}
      </main>
    </div>
  );
}