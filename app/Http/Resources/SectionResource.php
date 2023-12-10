<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SectionResource extends JsonResource
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
            'name' => $this->name,
            'slug' => $this->slug,
            'text' => $this->text,
            // 'price' => $this->price,
            // 'quantity' => $this->quantity,
            // 'status' => $this->status,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'section_images' => $this->whenLoaded('section_images', function () {
                return SectionImageResource::collection($this->section_images);
            }),
        ];
    }
}