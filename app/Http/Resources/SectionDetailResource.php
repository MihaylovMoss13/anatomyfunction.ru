<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SectionDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name'           => $this->name,
            'slug'           => $this->slug,
            // 'price' => $this->price,
            // 'quantity' => $this->quantity,
            // 'inStock' => $this->inStock,
            'is_published'   => $this->published == true ? 'Publish' : 'Arsip',
            // 'description' => $this->description,
            'section_images' => $this->section_images->map(fn ($image) =>[
                'image' => $image->image,
            ]),
        ];
    }
}