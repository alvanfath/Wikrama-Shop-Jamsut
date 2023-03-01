<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $code = 'CTGR';
        $digit = strtoupper($code);
        DB::table('category')->insert([
            [
                'no_category' => $digit . '-' . Str::random(7),
                'category' => 'Makanan Ringan'
            ],
            [
                'no_category' => $digit . '-' . Str::random(7),
                'category' => 'Fashion'
            ],
            [
                'no_category' => $digit . '-' . Str::random(7),
                'category' => 'Aksesoris'
            ],
            [
                'no_category' => $digit . '-' . Str::random(7),
                'category' => 'Kendaraan'
            ]
        ]);
    }
}
