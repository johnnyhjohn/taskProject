<?php

use Illuminate\Database\Seeder;
use App\Task;
use App\Project;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        Project::create(array(
            'name'    => 'Project 1',
            'isDeleted' => false
        ));

        for ($i=0; $i < 10; $i++) {
            Task::create(array(
                'name'    => 'Task '.$i,
                'duration'    => 2.0,
                'id_project'   => 1,
                'status'  => true,
                'isDeleted' => false
            ));
        }
    }
}
