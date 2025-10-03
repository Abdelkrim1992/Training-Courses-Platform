<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MemberPhoto extends Model
{
    use HasFactory;

    protected $fillable = ([
        'team_id',
        'member_photo',
    ]);

    public function team(){
        return $this->belongsTo(Team::class);
    }
}
