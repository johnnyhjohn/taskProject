<?php

namespace App\Http\ViewObject;

use App\Project;
use App\Task;

class TaskVO
{
  public $id;
  public $name;
  public $duration;
  public $status;
  public $id_project;
  public $project;

  public function __construct(Task $obj = null){
    if($obj != null){
      $this->convertFromEntity($obj);
    }
  }

  public function convertFromEntity(Task $obj){
    $this->id  = $obj->id;
    $this->name = $obj->name;
    $this->duration = $obj->duration;
    $this->status = $obj->status;
    $this->project = Project::find($obj->id_project);
    $this->id_project = $obj->id_project;
  }

  public function convertToEntity(){
    $obj = new Task();
    $obj->id  = $this->id;
    $obj->nome = $this->name;
    $obj->duration = $this->duration;
    $obj->status = $this->status;

    return $obj;
  }

}