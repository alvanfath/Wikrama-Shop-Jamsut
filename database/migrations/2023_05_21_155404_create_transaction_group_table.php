<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionGroupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaction_group', function (Blueprint $table) {
            $table->id();
            $table->string('nomor_transaksi', 12)->unique();
            $table->unsignedBigInteger('total_amount');
            $table->unsignedBigInteger('cash')->nullable();
            $table->unsignedBigInteger('cash_out')->nullable();
            $table->enum('status', ['Unpaid', 'Paid']);
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
        Schema::dropIfExists('transaction_group');
    }
}
