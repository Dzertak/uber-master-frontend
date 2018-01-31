import { Component, OnInit } from '@angular/core';
import {Master} from "../../models/master.model";
import {PaginationInstance} from "../../../ngx-pagination/dist/pagination-instance";
import {ActivatedRoute} from "@angular/router";
import {MasterService} from "../../services/master.service";
import {AuthorizeService} from "../../services/authorize.service";
import {PokeService} from "../../services/poke.service";
import {Poke} from "../../models/poke.model";

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {

    poke: Poke;
    idM: string;
    //user: User;
    orders = [];
    avg:number;
    sum:number;
    swipe: number = 1;
    searchStr = '';
    searchStr2 = '';
    tag: string = '';
    tag2: string = '';
    isLoad: boolean = true;


    public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: PaginationInstance = {
        id: 'master-in-process',
        itemsPerPage: 3,
        currentPage: 1
    };
    public config2: PaginationInstance = {
        id: 'master-completed',
        itemsPerPage: 3,
        currentPage: 1
    };

    public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };

    loading(status: boolean){
        this.isLoad=status;
    }


    constructor(private router: ActivatedRoute, private pokeService: PokeService, private authorizeService: AuthorizeService) { }

    ngOnInit() {

        //$('.ui.dropdown').dropdown();
        this.idM = this.router.snapshot.params.id;
        //this.user = this.authorizeService.getUser();
        //this.idM = this.user.object_id.toString();
        this.pokeService.getPokeOrders(this.idM).subscribe(orders => {
            this.orders = orders;
            //this.loading(false);

        });
        this.pokeService.getPoke(this.idM).subscribe(poke => {
            this.poke = poke;
            this.loading(false);

        });

        this.tag = "Completed";

    }



    onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;

    }

    onPageChange2(number: number) {
        console.log('change to page', number);
        this.config2.currentPage = number;
    }

    swipeTab(tab: number){
        this.swipe = tab;
    }


}
