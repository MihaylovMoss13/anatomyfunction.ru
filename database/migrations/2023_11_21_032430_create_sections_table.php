<?php

use App\Models\User;
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
        Schema::create('sections', function (Blueprint $table) {
            $table->id();
            $table->string('name', 200);
            $table->string('slug', 400);
            $table->longText('text')->nullable();
            $table->longText('text_leg_bedr_treug')->nullable();   // текст для ноги - бедренный треугольник
            $table->longText('text_leg_podkol_yamk')->nullable();  // текст для ноги - подколенная ямка
            $table->longText('text_leg_goleni')->nullable();       // текст для ноги - голень
            $table->string('model_3D_leg_bedr_treug')->nullable();  // 3D модель для ноги бедренный треугольник
            $table->string('model_3D_leg_podkol_yamk')->nullable(); // 3D модель для ноги - подколенная ямка
            $table->string('model_3D_leg_goleni')->nullable();      // 3D модель для ноги - голень

            $table->boolean('is_published')->default(1);
            $table->string('link_images_schemes')->nullable();
            $table->string('link_tables')->nullable();
            $table->string('link_mental_cards')->nullable();
            $table->string('link_test')->nullable();
            $table->string('link_video')->nullable();

            $table->foreignIdFor(User::class, 'created_by')->nullable();
            $table->foreignIdFor(User::class, 'updated_by')->nullable();

            $table->softDeletes();
            $table->foreignIdFor(User::class,'deleted_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sections');
    }
};