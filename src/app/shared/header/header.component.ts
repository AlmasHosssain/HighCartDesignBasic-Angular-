import { NavOpenService } from './nav-open.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private value : boolean  = false
  constructor(
    private navOpenServices: NavOpenService
  ) { }

  ngOnInit(): void {
  }

  toggleMe(){
    this.value=!this.value
    this.navOpenServices.toggleObj$.next(this.value)
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 200);
  }
}
