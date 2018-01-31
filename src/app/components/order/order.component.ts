import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {ActivatedRoute, Router} from '@angular/router';
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

  constructor(private router: ActivatedRoute, private orderService: OrderService,
              private authorizeService: AuthorizeService, private justRouter: Router) {
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
      this.resultOrder = order
        if (this.resultOrder.status == 'New') {
            this.orderService.updateOrderByMaster(this.order, this.user).subscribe(result => {
                this.justRouter.navigate(['/orders'])
            });
        } else {
            this.isNew = false;
        }
    });




  }

    showPoke(){
        this.justRouter.navigate(['/poke',this.order.pokeId])
    }
}
