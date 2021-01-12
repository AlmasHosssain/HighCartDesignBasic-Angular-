import { NavOpenService } from './../../shared/header/nav-open.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public finalValue : boolean = true
  constructor(
    private navOpenService : NavOpenService
  ) { }

  ngOnInit(): void {
    this.navOpenService.toggleObj$.subscribe((value)=>{
      this.finalValue = value
    })
  }

}
