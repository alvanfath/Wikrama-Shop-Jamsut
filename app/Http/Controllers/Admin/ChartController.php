<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ChartController extends Controller
{
    public function index(){
        $data = DB::table('transaction')->whereYear('created_at', now()->year)->select(DB::raw('MONTH(created_at) as month'), DB::raw('COUNT(*) as total'))
                  ->groupBy(DB::raw('MONTH(created_at)'))
                  ->get();
        $month = $this->month();
        foreach ($month as $item) {
            $total = 0;
            foreach ($data as $row) {
                if ($item['value'] == $row->month) {
                    $total = $row->total;
                }
            }
            $result[] = [
                'month' => $item['month'],
                'total' => $total
            ];
        }

        return $result;
    }
    public function month(){
        $month = [
            [
                'value' => '1',
                'month' => 'Januari'
             ],
            [
                'value' => '2',
                'month' => 'Februari'
             ],
            [
                'value' => '3',
                'month' => 'Maret'
             ],
             [
                'value' => '4',
                'month' => 'April'
             ],
            [
                'value' => '5',
                'month' => 'Mei'
             ],
            [
                'value' => '6',
                'month' => 'Juni'
             ],
            [
                'value' => '7',
                'month' => 'Juli'
             ],
            [
                'value' => '8',
                'month' => 'Agustus'
             ],
            [
                'value' => '9',
                'month' => 'September'
             ],
            [
                'value' => '10',
                'month' => 'Oktober'
             ],
            [
                'value' => '11',
                'month' => 'November'
             ],
            [
                'value' => '12',
                'month' => 'Desember'
             ]
        ];

        return $month;
    }
}
