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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('project_name')->nullable();
            $table->text('project_description')->nullable();
            $table->text('short_description')->nullable();
            $table->text('project_tasks')->nullable();
            $table->integer('budjet')->nullable();
            $table->string('dead_line')->nullable();
            $table->string('started_date')->nullable();
            $table->string('city')->nullable();
            $table->string('domaine')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
