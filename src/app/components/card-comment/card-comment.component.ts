import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../models/order.model";
import {Poke} from "../../models/poke.model";
import {Router} from "@angular/router";
import {PokeService} from "../../services/poke.service";
import {AuthorizeService} from "../../services/authorize.service";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.css']
})
export class CardCommentComponent implements OnInit {


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
        this.orderService.deleteOrder(id).subscribe(result => {
            alert(result);
        });
    }
}
