<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SectionImage extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function sectionImage(){
        return $this->belongsTo(Section::class, 'section_id');
    }
}