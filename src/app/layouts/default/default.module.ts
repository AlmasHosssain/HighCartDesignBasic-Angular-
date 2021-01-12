import { DataProvoderService } from './../../pages/dashboard/data-provoder.service';
import { PostComponent } from './../../pages/post/post.component';
import { DashboardComponent } from './../../pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatDividerModule} from '@angular/material/divider'; 
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule
  ],
  providers : [
    DataProvoderService
  ]
})
export class DefaultModule { }
