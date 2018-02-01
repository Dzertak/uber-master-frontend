import { Component,Input, OnInit, ViewChild } from '@angular/core';
import {Order} from "../../index";
//import {AppComponent} from "../../app.component";
import {User, AuthorizeService,OrderService} from "../../index";
import {ActivatedRoute, Router} from "@angular/router";
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';
import {PokeService} from "../../services/poke.service";
import {Poke} from "../../models/poke.model";

export interface IContext{
	data:string;
}

@Component({
  selector: 'app-master-profile-card',
  templateUrl: './master-profile-card.component.html',
  styleUrls: ['./master-profile-card.component.css']
})
export class MasterProfileCardComponent implements OnInit {
	
/* @ViewChild('modalTemplate')
	public modalTemplate :ModalTemplate<IContext, string, string> */
	
 //appcomponent: AppComponent ;
 //id: string;
notAdmin = true;
	 @Input() order: Order;
	user: User;
    isLoading: boolean = true;
    poke: Poke;
  constructor(private router: ActivatedRoute,private authService: AuthorizeService,
              private orderService: OrderService, public modalService:SuiModalService,
              private justRouter: Router, private pokeService: PokeService) { }

  isPoke(): boolean {
		if(this.authService.getUserType() == "Poke"){
        return true;}
		else if(this.authService.getUserType() == "Master"){
        return false;}
		else if(this.authService.getUserType() == "Admin"){
		this.notAdmin = false;
		return true;}
    }
  
  ngOnInit() {
	  this.user = this.authService.getUser();
      this.pokeService.getPoke(this.order.pokeId.toString()).subscribe(poke =>{
          this.poke = poke;
          this.isLoading = false;
      });
  }
  
  deleteOrder(id: string){
	  this.orderService.deleteOrder(id);
  }
  
  confirmOrder(order: Order){
	  this.orderService.updateOrderByPoke(order, this.user);
	  
  }
  
  confirmCompletionByMaster(order: Order){
	  this.orderService.completeOrderByMaster(order);
	  
  }

    showOrder(){
        this.justRouter.navigate(['/order',this.order.object_id])
    }

    showPoke(){
        this.justRouter.navigate(['/poke',this.order.pokeId])
    }
  
 /*  open(dynamicContent:string="Example"){
	  const config = new TemplateModalConfig<IContext,string,string>(this.modalTemplate);
	  
	  config.closeResult = "closed!";
	  config.context = {data: dynamicContent};
	  
	  this.modalService.open(config).onApprove(result => {"approve"}).onDeny(result =>{"deny"});
  } */

    getNamePoke(){
        return this.poke.name.substring(0,this.poke.name.indexOf(' '));
    }
  
}
