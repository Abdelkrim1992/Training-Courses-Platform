<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherPhoto extends Model
{
    use HasFactory;

    protected $fillable = ([
        'course_id',
        'teacher_photo'
    ]);

    public function course(){
        return $this->belongsTo(Course::class);
    }
}
