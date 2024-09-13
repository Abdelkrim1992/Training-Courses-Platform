<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = ([
        'course_title',
        'teacher_name',
        'duration',
        'date',
        'course_description',
        'course_tips',
        'category',
    ]);

    public function courseImage()
    {
        return $this->hasOne(CourseImage::class);
    }
    public function teacherPhoto()
    {
        return $this->hasOne(TeacherPhoto::class);
    }
}
