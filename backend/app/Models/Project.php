<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    
    protected $fillable = ([
        'project_name',
        'project_description',
        'project_tasks',
        'budjet',
        'dead_line',
        'started_date',
        'city',
        'domaine',
        'short_description',
    ]);

    public function ProjectImage()
    {
        return $this->hasOne(ProjectImage::class);
    }
}
