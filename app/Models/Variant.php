<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variant extends Model
{
    use HasFactory;
    protected $table = 'variant';
    protected $fillable = ['variant_image','variant_name','price','product_code'];

    public function product(){
        return $this->belongsTo(Product::class,'product_code','no_product');
    }
}
