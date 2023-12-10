<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SectionModel extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function sectionModel(){
        return $this->belongsTo(Section::class, 'section_id');
    }
}