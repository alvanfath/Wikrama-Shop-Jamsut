<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insertGetId([
            'name' => 'User',
            'email' => 'user@gmail.com',
            'username' => 'userr',
            'password' => Hash::make('password'),
            'phone_number' => '08775435342',
            'email_verified_at' => now(),
            'status' => 1,
            'token' => Str::random(20),
            'driver' => 'register'
        ]);
        $id = DB::getPdo()->lastInsertId();
        DB::table('address')->insert([
            'user_id' => $id,
            'no_address' => Str::random(12),
            'province_id' => '11',
            'city_id' => '1101',
            'district_id' => '1101010',
            'village_id' => '1101010001',
            'detail' => 'Jalan kenangan yang mantap'
        ]);
    }
}
