import {Component, Input, OnInit} from '@angular/core';
import {Master} from "../../index";
import {MasterService} from "../../services/master.service";

@Component({
  selector: 'app-card-master',
  templateUrl: './card-master.component.html',
  styleUrls: ['./card-master.component.css'],
})
export class CardMasterComponent implements OnInit {


  @Input() master: Master;

    orders = [];
    avg:number;
    sum:number;

  constructor(private masterService: MasterService) { }

  ngOnInit() {
      this.masterService.getMasterOrders(this.master.object_id.toString()).subscribe(orders => {
          this.orders = orders;
      });
  }

    mastersRate(){
        this.sum = 0;
        this.avg = 0;
        for(let ord of this.orders)
        {
            this.sum += ord.mark;
        }
        this.avg = this.sum/this.orders.length;
        return Math.round(this.avg);
    }
}
