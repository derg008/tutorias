import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { 
  CalendarIcon, 
  UserGroupIcon, 
  ClockIcon, 
  StarIcon 
} from '@heroicons/react/24/outline';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

interface DashboardProps {
  stats?: {
    today_tutorias?: number;
    active_students?: number;
    total_hours?: number;
    average_rating?: number;
  };
}

export default function Dashboard({ stats = {} }: DashboardProps) {
  const s = {
    today_tutorias: stats?.today_tutorias ?? 0,
    active_students: stats?.active_students ?? 0,
    total_hours: stats?.total_hours ?? 0,
    average_rating: stats?.average_rating ?? 0,
  };

  // Datos del gráfico (puedes conectarlos después con datos reales)
  const chartData = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Tutorías por día',
        data: [8, 12, 15, 22, 18, 9, 5],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.15)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#6366f1',
        pointHoverRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: '#e0e7ff',
        bodyColor: '#94a3b8',
        padding: 12,
        displayColors: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(255,255,255,0.08)' },
        ticks: { color: '#94a3b8' },
      },
      x: {
        grid: { color: 'rgba(255,255,255,0.08)' },
        ticks: { color: '#94a3b8' },
      },
    },
  };

  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Dashboard</h1>
              <p className="text-indigo-400 mt-3 text-xl">Resumen en tiempo real</p>
            </div>
            <div className="text-right text-slate-400">
              <p className="text-sm">Hoy</p>
              <p className="text-lg font-medium text-white">
                {new Date().toLocaleDateString('es-ES', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard title="Tutorías Hoy" value={s.today_tutorias} icon={<CalendarIcon className="w-10 h-10" />} color="from-indigo-500 to-blue-600" />
            <StatCard title="Estudiantes Activos" value={s.active_students} icon={<UserGroupIcon className="w-10 h-10" />} color="from-emerald-500 to-teal-600" />
            <StatCard title="Horas Totales" value={`${s.total_hours}h`} icon={<ClockIcon className="w-10 h-10" />} color="from-violet-500 to-purple-600" />
            <StatCard title="Calificación Promedio" value={s.average_rating.toFixed(1)} icon={<StarIcon className="w-10 h-10" />} color="from-amber-500 to-orange-600" />
          </div>

          {/* Gráfico Futurista */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-white">Tendencia Semanal</h2>
              <span className="text-xs px-4 py-2 bg-white/10 rounded-full text-indigo-300">Últimos 7 días</span>
            </div>
            
            <div className="h-80">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

        </div>
      </div>
    </AuthenticatedLayout>
  );
}

// Componente reutilizable para las tarjetas
function StatCard({ title, value, icon, color }: { 
  title: string; 
  value: string | number; 
  icon: React.ReactNode; 
  color: string;
}) {
  return (
    <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 hover:-translate-y-1">
      <div className="flex justify-between items-start">
        <div>
          <p className="uppercase tracking-widest text-xs text-slate-400 font-medium">{title}</p>
          <p className="text-5xl font-bold text-white mt-6 tracking-tighter">{value}</p>
        </div>
        <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
      </div>
    </div>
  );
}