<?php

namespace App\Http\Controllers;

use App\Http\ViewObject\TaskVO;
use Illuminate\Http\Request;

use App\Task;
use App\JSONUtils;

class TaskController extends Controller {
    
    public function getTasks()
    {
        try{
            $tasks =  Task::where('isDeleted','=', false)->get();
            $tasksVO = [];
            foreach($tasks as $key => $task ){
                $taskVO = new TaskVO($task);
                array_push($tasksVO, $taskVO);
            }
            $data['tasks'] = $tasksVO;

            return JSONUtils::returnSuccess('Request executado com sucesso', $data);

        } catch(Exception $e){
            return JSONUtils::returnDanger('Problema de acesso à base de dados.', $e);
        }
    }
}
