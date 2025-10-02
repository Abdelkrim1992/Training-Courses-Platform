<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Student extends Model
{
    use HasFactory,HasApiTokens,Notifiable;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'course_name',
    ];
    
}
