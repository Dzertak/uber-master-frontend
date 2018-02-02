import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../index";
import {Router} from "@angular/router";
import {PokeService} from "../../services/poke.service";
import {Poke} from "../../models/poke.model";
import {AuthorizeService,OrderService} from "../../index";

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.css'],
})
export class CardOrderComponent implements OnInit {


  @Input() order: Order;

  poke: Poke;
  isLoading: boolean = true;

  constructor(private router: Router, private pokeService: PokeService, private authService: AuthorizeService,
              private orderService: OrderService) { }

  ngOnInit() {
	  
    this.pokeService.getPoke(this.order.pokeId.toString()).subscribe(poke =>{
      this.poke = poke;
      this.isLoading = false;
    });
  }

  showOrder(){
    this.router.navigate(['/order',this.order.object_id])
  }

  showPoke(){
      this.router.navigate(['/poke',this.order.pokeId])
  }

  getNamePoke(){
    return this.poke.name.substring(0,this.poke.name.indexOf(' '));
  }
  
  isAdmin(): boolean{
	  return (this.authService.getUserType() == "Admin");
	  
  }
  
  deleteOrder(id: string){
	  this.orderService.deleteOrder(id);
  }
}
