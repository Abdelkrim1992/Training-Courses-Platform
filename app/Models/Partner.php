<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;

    protected $fillable = ([
        'partner_name',
    ]);

    public function PartnerImage()
    {
        return $this->hasOne(PartnerImage::class);
    }
}
