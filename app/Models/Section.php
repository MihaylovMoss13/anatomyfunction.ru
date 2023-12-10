<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function section_images(){
        return $this->hasMany(SectionImage::class, 'section_id');
    }

    public function section_models(){
        return $this->hasMany(SectionModel::class, 'section_id');
    }
}