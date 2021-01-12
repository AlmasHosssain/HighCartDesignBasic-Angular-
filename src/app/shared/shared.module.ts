
import { AreaComponent } from './widgets/area/area.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout'
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { TableComponent } from './widgets/table/table.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent, AreaComponent, CardComponent, PieComponent,TableComponent ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    RouterModule,
    HighchartsChartModule,
    MatTableModule,
    MatFormFieldModule
  ],
  exports: [HeaderComponent, FooterComponent, SidenavComponent,AreaComponent,CardComponent,PieComponent,TableComponent]
})
export class SharedModule { }
