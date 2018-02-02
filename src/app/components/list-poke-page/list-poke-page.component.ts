import { ChangeDetectionStrategy, Component,Input, OnInit } from '@angular/core';
import {Poke, AuthorizeService, PokeService} from "../../index";

import {PaginationInstance} from "ngx-pagination";
declare var $:any;

@Component({
  selector: 'app-list-poke-page',
  templateUrl: './list-poke-page.component.html',
  styleUrls: ['./list-poke-page.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListPokePageComponent implements OnInit {

    searchStr = '';
	isLoad: boolean = true;
	 
	pokes = [];
	
	public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: PaginationInstance = {
        id: 'app-list-masters-page',
        itemsPerPage: 5,
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
    constructor(private authorizeService: AuthorizeService, private pokeService:PokeService) { }

    ngOnInit() {
		$('.ui.dropdown').dropdown();

        //this.userName = this.authorizeService.username;
	this.pokeService.getPokeList().subscribe(pokes => {
       this.loading(false);
       this.pokes = pokes;
    })

        /*this.authorizeService.getAuthorizeUser().subscribe(masters => {
          this.masters = masters;
        })*/
    }
	

  onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }
	
}
