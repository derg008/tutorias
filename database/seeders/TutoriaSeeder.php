<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Tutor;
use App\Models\Student;
use App\Models\Tutoria;
use Illuminate\Support\Facades\Hash;

class TutoriaSeeder extends Seeder
{
    public function run(): void
    {
        // Usuario Admin
        $admin = User::firstOrCreate(
            ['email' => 'admin@tutorias.test'],
            [
                'name' => 'Administrador',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ]
        );

        // ==================== CREAR TUTORES ====================
        $tutorUsers = [
            [
                'name' => 'Dr. Carlos Ramírez',
                'email' => 'carlos.ramirez@tutorias.test',
                'specialty' => 'Matemáticas Avanzadas',
                'experience_years' => 12,
                'bio' => 'Doctor en Matemáticas con más de 12 años enseñando en universidad y preparatoria.',
                'hourly_rate' => 45.00,
            ],
            [
                'name' => 'Lic. Ana Morales',
                'email' => 'ana.morales@tutorias.test',
                'specialty' => 'Inglés Conversacional y Negocios',
                'experience_years' => 8,
                'bio' => 'Especialista en inglés para profesionales y exámenes internacionales.',
                'hourly_rate' => 32.00,
            ],
            [
                'name' => 'Prof. Miguel Torres',
                'email' => 'miguel.torres@tutorias.test',
                'specialty' => 'Física y Química',
                'experience_years' => 9,
                'bio' => 'Profesor apasionado por las ciencias exactas. Enfoque práctico y experimental.',
                'hourly_rate' => 38.00,
            ],
        ];

        $tutors = [];
        foreach ($tutorUsers as $data) {
            // Crear usuario
            $user = User::firstOrCreate(
                ['email' => $data['email']],
                [
                    'name' => $data['name'],
                    'password' => Hash::make('password'),
                    'role' => 'tutor',
                ]
            );

            // Crear perfil detallado del tutor
            $tutor = Tutor::firstOrCreate(
                ['user_id' => $user->id],
                [
                    'specialty'        => $data['specialty'],
                    'experience_years' => $data['experience_years'],
                    'bio'              => $data['bio'],
                    'hourly_rate'      => $data['hourly_rate'],
                    'is_available'     => true,
                    'total_sessions'   => 0,
                    'average_rating'   => 4.8,
                ]
            );

            $tutors[] = $tutor;
        }

        // ==================== CREAR ESTUDIANTES ====================
        $students = [];
        for ($i = 1; $i <= 5; $i++) {
            $user = User::firstOrCreate(
                ['email' => "alumno{$i}@tutorias.test"],
                [
                    'name' => "Estudiante {$i}",
                    'password' => Hash::make('password'),
                    'role' => 'student',
                ]
            );

            $student = Student::firstOrCreate(['user_id' => $user->id]);
            $students[] = $student;
        }

        // ==================== CREAR TUTORÍAS ====================
        $materias = ['Matemáticas', 'Física', 'Literatura', 'Química', 'Historia', 'Inglés'];

        foreach ($students as $index => $student) {
            Tutoria::firstOrCreate(
                [
                    'student_id' => $student->id,
                    'tutor_id'   => $tutors[0]->id, // Primer tutor por defecto
                    'start_time' => now()->addDays($index)->setHour(10)->setMinute(0),
                ],
                [
                    'materia' => $materias[$index % count($materias)],
                    'end_time' => now()->addDays($index)->setHour(11)->setMinute(0),
                    'estado' => $index % 3 === 0 ? 'pendiente' : 'confirmada',
                    'notas' => 'Sesión de repaso.',
                ]
            );
        }

        // Tutoría extra con otro tutor
        Tutoria::firstOrCreate(
            [
                'student_id' => $students[0]->id,
                'tutor_id'   => $tutors[1]->id,
                'start_time' => now()->addDays(3)->setHour(15)->setMinute(30),
            ],
            [
                'materia' => 'Inglés Avanzado',
                'end_time' => now()->addDays(3)->setHour(16)->setMinute(30),
                'estado' => 'pendiente',
                'notas' => 'Preparación para TOEFL.',
            ]
        );

        $this->command->info('✅ Seeder ejecutado correctamente:');
        $this->command->info('   - 1 Administrador');
        $this->command->info('   - 3 Tutores con perfiles detallados');
        $this->command->info('   - 5 Estudiantes');
        $this->command->info('   - Varias tutorías de prueba');
    }
}