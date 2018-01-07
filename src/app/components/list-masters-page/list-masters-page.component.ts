import { ChangeDetectionStrategy, Component,Input, OnInit } from '@angular/core';
import {PaginationInstance} from "../../../../src/ngx-pagination/dist/ngx-pagination.module";
import {AuthorizeService} from '../../services/authorize.service';
import {Master} from "../../index";
import {MasterService} from "../../services/master.service";
declare var $:any;

@Component({
  selector: 'app-list-masters-page',
  templateUrl: './list-masters-page.component.html',
  styleUrls: ['./list-masters-page.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
   // providers: [AuthorizeService]
})
export class ListMastersPageComponent implements OnInit {

    //userName: string;
	isLoad: boolean = true;
	//curPage : number;
    //pageSize : number;
	masters = [];
	
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
    constructor(private authorizeService: AuthorizeService, private masterService:MasterService) { }

    ngOnInit() {
        //this.userName = this.authorizeService.username;
    $('.ui.dropdown').dropdown();
    this.masterService.getMasterList().subscribe(masters => {
      this.loading(false);
      this.masters = masters;
    })
	//this.curPage = 1;
    //this.pageSize = 6;
        /*this.authorizeService.getAuthorizeUser().subscribe(masters => {
          this.masters = masters;
        })*/
    }
	
	/*numberOfPages(){
    return Math.ceil(this.masters.length / this.pageSize);
  };*/
  onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }
}
