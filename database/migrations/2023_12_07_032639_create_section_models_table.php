<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('section_models', function (Blueprint $table) {
            $table->id();
            $table->string('model');
            $table->string('name');
            $table->string('file_name');
            $table->unsignedBigInteger('section_id');
            // Define the foreign key relationship and cascading delete
            $table->foreign('section_id')
                ->references('id')
                ->on('sections')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('section_models');
    }
};