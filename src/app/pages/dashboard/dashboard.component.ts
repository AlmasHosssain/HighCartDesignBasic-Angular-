import { DataProvoderService } from './data-provoder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public cartData = []
  public cardData = []
  public pieData = []
  public tableData = []
  constructor(
    private dataProvoderService : DataProvoderService
  ) { }

  ngOnInit(): void {
    this.cartData = this.dataProvoderService.bigCartData()
    this.cardData = this.dataProvoderService.cardData()
    this.pieData  = this.dataProvoderService.pieData()
    this.tableData = this.dataProvoderService.tableData()
  }

}
