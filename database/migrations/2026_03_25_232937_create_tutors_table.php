<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('tutors', function (Blueprint $table) {
            $table->id();
            
            // Relación con users
            $table->foreignId('user_id')
                  ->unique()                    // Un tutor = un usuario
                  ->constrained()
                  ->onDelete('cascade');

            // Información profesional
            $table->string('specialty');                    // Especialidad principal (Matemáticas, Inglés, Física, etc.)
            $table->string('secondary_specialties')->nullable(); // Especialidades secundarias (JSON o texto separado por comas)
            
            $table->integer('experience_years')->default(0); // Años de experiencia
            $table->text('bio')->nullable();                 // Biografía / Sobre mí
            $table->string('education')->nullable();         // Formación académica
            $table->string('certifications')->nullable();    // Certificaciones
            
            // Tarifas
            $table->decimal('hourly_rate', 8, 2)->default(0); // Precio por hora
            $table->decimal('monthly_rate', 10, 2)->nullable(); // Precio mensual (si aplica)

            // Disponibilidad
            $table->boolean('is_available')->default(true);
            $table->json('available_days')->nullable();       // Ej: ["Lunes", "Miércoles", "Viernes"]
            $table->time('preferred_start_time')->nullable();
            $table->time('preferred_end_time')->nullable();

            // Métricas
            $table->integer('total_sessions')->default(0);
            $table->decimal('average_rating', 3, 2)->default(0);
            $table->integer('total_reviews')->default(0);

            // Multimedia
            $table->string('profile_photo')->nullable();
            $table->string('video_introduction')->nullable(); // URL de video de presentación

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tutors');
    }
};