<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->string('no_product',20)->unique()->default(Str::random(20));
            $table->string('product_image');
            $table->string('product_name');
            $table->string('description');
            $table->string('price');
            $table->string('stock');
            $table->integer('category_id');
            $table->string('supplier_id')->nullable()->default('Wikrama Shop');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
}
