<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Task;
use App\JSONUtils;

class TaskController extends Controller {
    
    public function getTasks()
    {
        try{
            $data['tasks'] = Task::where('isDeleted','=', false)->get();

            return JSONUtils::returnSuccess('Request executado com sucesso', $data);

        } catch(Exception $e){
            return JSONUtils::returnDanger('Problema de acesso à base de dados.', $e);
        }
    }
}
