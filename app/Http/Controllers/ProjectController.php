<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Project;
use App\JSONUtils;

class ProjectController extends Controller
{
  
    public function getProjects()
    {
        try{
            $data['projects'] = Project::where('isDeleted','=', false)->get();

            return JSONUtils::returnSuccess('Request executado com sucesso', $data);

        } catch(Exception $e){
            return JSONUtils::returnDanger('Problema de acesso à base de dados.', $e);
        }
    }
}
