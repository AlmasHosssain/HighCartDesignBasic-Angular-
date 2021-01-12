import { PostComponent } from './pages/post/post.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component : DefaultComponent,
    children : [
      {
        path : '',
        component : DashboardComponent
      },
      {
        path : 'post',
        component : PostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
