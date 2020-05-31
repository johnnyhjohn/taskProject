<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Project;
use App\JSONUtils;

class ProjectController extends Controller
{
  
    public function getProjects(Request $request)
    {
        try{
            $data['projects'] = Project::where('isDeleted','=', false)->get();

            return JSONUtils::returnSuccess('Request executado com sucesso', $data);

        } catch(Exception $e){
            return JSONUtils::returnDanger('Problema de acesso à base de dados.', $e);
        }
    }

    public function setProjects( Request $request ) 
    {
        try{
            $project = Project::create($request->all());
            return JSONUtils::returnSuccess('Projeto '. $project->name .' criado com sucesso', $project);

        } catch(Exception $e){
            return JSONUtils::returnDanger('Problema ao criar projeto.', $e);
        }
    }
}
