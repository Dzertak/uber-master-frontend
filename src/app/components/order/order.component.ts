import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../services/order.service';
import {AuthorizeService} from '../../services/authorize.service';
import {User} from '../../models/user.model';
import {PokeService} from "../../services/poke.service";
import {Poke} from "../../models/poke.model";

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
  isLoading: boolean = true;
  poke: Poke;

  user: any;
  private resultOrder: Order;

  constructor(private router: ActivatedRoute, private orderService: OrderService,
              private authorizeService: AuthorizeService, private justRouter: Router,
              private pokeService: PokeService) {
  }

  ngOnInit() {
    this.id = this.router.snapshot.params.id;
    this.user = this.authorizeService.getUser();
    this.orderService.getOrder(this.id).subscribe(order => {
      this.order = order;
      this.loading(false);
      this.pokeService.getPoke(order.pokeId.toString()).subscribe(poke => {
        this.poke = poke;
        this.isLoading = false;
      })
    })
  }

  loading(status: boolean) {
    this.isLoad = status;
  }

  isMasterAndProfession() {
    if (this.user.classType == 'Master') {
      if (this.order.masterProfession == this.user.profession){
          return true;
      }
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

    getNamePoke(){
        return this.poke.name.substring(0,this.poke.name.indexOf(' '));
    }
    showPoke(){
        this.justRouter.navigate(['/poke',this.order.pokeId])
    }
}
