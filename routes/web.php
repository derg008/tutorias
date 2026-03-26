<?php
use App\Http\Controllers\TutoriaController;
use App\Http\Controllers\TutoriaCalendarController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Auth\RegisterStudentController;

/*Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

*/

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('tutorias', TutoriaController::class);
   Route::get('/calendar', [TutoriaCalendarController::class, 'index'])->name('calendar.index');
    
    
});


Route::get('/register-tutor', [RegisterTutorController::class, 'create'])->name('register.tutor');


// Ruta para mostrar el formulario
Route::get('/register-student', [RegisterStudentController::class, 'create'])->name('register.student');

// Ruta para procesar el registro
Route::post('/register-student', [RegisterStudentController::class, 'store']);
// Role Selection (página intermedia)
Route::get('/register', function () {
    return Inertia::render('Auth/RoleSelection');
})->name('register');

Route::post('/logout', [App\Http\Controllers\Auth\LogoutController::class, 'destroy'])
     ->name('logout');


require __DIR__.'/settings.php';
