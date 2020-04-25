import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: 'admin',
    component: ProjectComponent,
    children: [
      {
        path: 'list',
        component: ProjectListComponent
      },
      {
        path: 'create',
        component: ProjectCreateComponent
      },
      {
        path: 'update',
        component: ProjectUpdateComponent
      },
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }