import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Tutoria {
  id: number;
  materia: string;
  start_time: string;
  estado: string;
  tutor: { user: { name: string } };
  student: { user: { name: string } };
}

interface Props {
  tutorias: { data: Tutoria[]; current_page: number; last_page: number };
}

const Index: React.FC<Props> = ({ tutorias }) => {
  return (
    <>
      <Head title="Tutorías" />

      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tutorías Programadas</h1>
          <Link
            href="/tutorias/create"
            className="bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            + Nueva Tutoría
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Materia</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Fecha/Hora</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Tutor</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Alumno</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {tutorias.data.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">{t.materia}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(t.start_time).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{t.tutor.user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{t.student.user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      t.estado === 'confirmada' ? 'bg-green-100 text-green-800' :
                      t.estado === 'pendiente' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {t.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Index;