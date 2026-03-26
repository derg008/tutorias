<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Schedule extends Model
{
    protected $fillable = ;

    public function tutor(): BelongsTo
    {
        return $this->belongsTo(Tutor::class);
    }
}