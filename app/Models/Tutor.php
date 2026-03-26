<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tutor extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'specialty',
        'secondary_specialties',
        'experience_years',
        'bio',
        'education',
        'certifications',
        'hourly_rate',
        'monthly_rate',
        'is_available',
        'available_days',
        'preferred_start_time',
        'preferred_end_time',
        'total_sessions',
        'average_rating',
        'total_reviews',
        'profile_photo',
        'video_introduction',
    ];

    protected $casts = [
        'available_days' => 'array',
        'hourly_rate' => 'decimal:2',
        'monthly_rate' => 'decimal:2',
        'average_rating' => 'decimal:2',
        'is_available' => 'boolean',
        'preferred_start_time' => 'datetime:H:i',
        'preferred_end_time' => 'datetime:H:i',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}