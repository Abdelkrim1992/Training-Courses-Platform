<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $fillable = ([
        'service_title',
        'short_description',
    ]);

    public function serviceImage()
    {
        return $this->hasOne(ServiceImage::class);
    }
}
