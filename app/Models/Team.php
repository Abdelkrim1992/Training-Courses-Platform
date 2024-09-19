<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = [
        'member_name',
        'member_email',
        'member_phone',
        'member_service',
        'member_photo',
        'facebook',
        'instagram',
        'linkden',
    ];

    public function memberPhoto()
    {
        return $this->hasMany(MemberPhoto::class); // Assuming MemberPhoto is the model name for photos
    }
}
