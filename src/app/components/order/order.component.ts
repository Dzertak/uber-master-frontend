import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../services/order.service';
import {AuthorizeService} from '../../services/authorize.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order;
  id: string;
  isLoad: boolean = true;
  isNew: boolean = true;


  user: User;
  private resultOrder: Order;

  constructor(private router: ActivatedRoute, private orderService: OrderService, private authorizeService: AuthorizeService) {
  }

  ngOnInit() {
    this.id = this.router.snapshot.params.id;
    this.user = this.authorizeService.getUser();
    this.orderService.getOrder(this.id).subscribe(order => {
      this.order = order;
      this.loading(false);
    })
  }

  loading(status: boolean) {
    this.isLoad = status;
  }

  isMaster() {
    if (this.user.classType == 'Master') {
      return true;
    }
    return false;
  }

  joinIt() {
    this.orderService.getOrder(this.order.object_id.toString()).subscribe(order => {
      this.resultOrder
    });
    if (this.resultOrder.status == 'New') {
      this.orderService.updateOrderByMaster(this.order, this.user);
    } else {
      this.isNew = false;
    }

  }

  convertMillisecondsToDigitalClock(ms) {
    /*const hours = Math.floor(ms / 3600000), // 1 Hour = 36000 Milliseconds
        minutes = Math.floor((ms % 3600000) / 60000), // 1 Minutes = 60000 Milliseconds
        seconds = Math.floor(((ms % 360000) % 60000) / 1000) // 1 Second = 1000 Milliseconds
    return {
        hours : hours,
        minutes : minutes,
        seconds : seconds,
        clock : hours + ":" + minutes + ":" + seconds
    };*/
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    d = Math.floor(h / 24);

  }

}
