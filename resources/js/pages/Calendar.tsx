import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Head, usePage } from '@inertiajs/react';
import { EventClickArg, EventDropArg } from '@fullcalendar/core';

interface TutoriaEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  color: string;
  extendedProps: {
    tutor: string;
    student: string;
    estado: string;
  };
}

const Calendar: React.FC = () => {
  const calendarRef = useRef<any>(null);
  const { tutorias } = usePage<{ tutorias: TutoriaEvent[] }>().props;

  const handleEventClick = (clickInfo: EventClickArg) => {
    const event = clickInfo.event;
    alert(`📅 ${event.title}\n\nTutor: ${event.extendedProps.tutor}\nAlumno: ${event.extendedProps.student}\nEstado: ${event.extendedProps.estado}\n\n¿Quieres iniciar esta sesión?`);
    // Aquí más adelante abriremos la pizarra colaborativa
  };

  const handleEventDrop = (dropInfo: EventDropArg) => {
    console.log('Evento movido:', dropInfo.event.title);
    // TODO: Enviar actualización al backend (PATCH)
    alert('Tutoría movida. En la siguiente etapa guardaremos el nuevo horario.');
  };

  return (
    <>
      <Head title="Calendario de Tutorías" />

      <div className="max-w-7xl mx-auto py-10 px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Calendario de Tutorías
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Arrastra las sesiones para cambiar el horario
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            events={tutorias}
            eventClick={handleEventClick}
            eventDrop={handleEventDrop}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            height="auto"
            slotMinTime="07:00:00"
            slotMaxTime="23:00:00"
            locale="es"   // Para que esté en español
          />
        </div>
      </div>
    </>
  );
};

export default Calendar;