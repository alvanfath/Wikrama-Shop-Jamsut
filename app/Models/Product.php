<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'product';
    protected $fillable = ['no_product','product_image','product_name','description','stock','category_id','supplier_id','discount'];

    public function variants(){
        return $this->hasMany(Variant::class, 'product_code', 'no_product');
    }
}
