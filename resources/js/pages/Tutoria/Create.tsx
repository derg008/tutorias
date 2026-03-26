import React from 'react';
import { Head, useForm } from '@inertiajs/react';

interface Props {
  students: { id: number; user: { name: string } }[ ];
}

const Create: React.FC<Props> = ({ students, tutors }) => {
  const { data, setData, post, processing, errors } = useForm({
    student_id: '',
    tutor_id: '',
    materia: '',
    start_time: '',
    end_time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/tutorias');
  };

  return (
    <>
      <Head title="Nueva Tutoría" />

      <div className="max-w-lg mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-8">Crear Tutoría</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Alumno</label>
            <select
              value={data.student_id}
              onChange={(e) => setData('student_id', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="">Selecciona...</option>
              {students.map(s => <option key={s.id} value={s.id}>{s.user.name}</option>)}
            </select>
            {errors.student_id && <p className="text-red-600 text-sm mt-1">{errors.student_id}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tutor</label>
            <select
              value={data.tutor_id}
              onChange={(e) => setData('tutor_id', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="">Selecciona...</option>
              {tutors.map(t => <option key={t.id} value={t.id}>{t.user.name}</option>)}
            </select>
            {errors.tutor_id && <p className="text-red-600 text-sm mt-1">{errors.tutor_id}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Materia</label>
            <input
              type="text"
              value={data.materia}
              onChange={(e) => setData('materia', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            {errors.materia && <p className="text-red-600 text-sm mt-1">{errors.materia}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Inicio</label>
              <input
                type="datetime-local"
                value={data.start_time}
                onChange={(e) => setData('start_time', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Fin</label>
              <input
                type="datetime-local"
                value={data.end_time}
                onChange={(e) => setData('end_time', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {processing ? 'Guardando...' : 'Crear Tutoría'}
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;