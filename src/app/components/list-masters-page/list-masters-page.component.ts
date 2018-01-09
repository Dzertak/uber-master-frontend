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
	masters = [
      {"name":"Bill","description":"DESCR : 30","object_id":30,"location":"Primorskyy","userDescription":"USERDESCR","phoneNumber":"380754832658","password":"pass1","picture":"pic1","classType":"Master","isUserBlocked":false,"profession":"Cleaner","skills":"Cool Guy","experience":"4 years","payment":250,"smoke":false,"tools":"axe","start_time":-61599024840000,"end_time":-61597815240000},
      {"name":"Tom","description":"DESCR : 30","object_id":31,"location":"Suvorovskyy","userDescription":"USERDESCR","phoneNumber":"380754732958","password":"pass2","picture":"pic1","classType":"Master","isUserBlocked":false,"profession":"Trainer","skills":"Cool Guy","experience":"4 years","payment":450,"smoke":false,"tools":"axe","start_time":-61599024840000,"end_time":-61597815240000},
      {"name":"Petia","description":"DESCR : 30","object_id":32,"location":"Primorskyy","userDescription":"USERDESCR","phoneNumber":"380759832958","password":"pass3","picture":"pic1","classType":"Master","isUserBlocked":false,"profession":"Babysitter","skills":"Cool Guy","experience":"4 years","payment":350,"smoke":false,"tools":"axe","start_time":-61599024840000,"end_time":-61597815240000},
      {"name":"Vasia","description":"DESCR : 30","object_id":33,"location":"Primorskyy","userDescription":"USERDESCR","phoneNumber":"380764832958","password":"pass4","picture":"pic1","classType":"Master","isUserBlocked":false,"profession":"Chef","skills":"Cool Guy","experience":"4 years","payment":240,"smoke":false,"tools":"axe","start_time":-61599024840000,"end_time":-61597815240000},
      {"name":"Michailo","description":"DESCR : 30","object_id":34,"location":"Malinovskyy","userDescription":"USERDESCR","phoneNumber":"340754832958","password":"pass5","picture":"pic1","classType":"Master","isUserBlocked":false,"profession":"IT","skills":"Cool Guy","experience":"4 years","payment":230,"smoke":false,"tools":"axe","start_time":-61599024840000,"end_time":-61597815240000},
      {"name":"Ivan","description":"DESCR : 30","object_id":35,"location":"Primorskyy","userDescription":"USERDESCR","phoneNumber":"380754837958","password":"pass6","picture":"pic1","classType":"Master","isUserBlocked":false,"profession":"IT","skills":"Cool Guy","experience":"4 years","payment":2520,"smoke":false,"tools":"axe","start_time":-61599024840000,"end_time":-61597815240000},
      {"name":"Dimon","description":"DESCR : 30","object_id":36,"location":"Kievskyy","userDescription":"USERDESCR","phoneNumber":"380758882958","password":"pass7","picture":"pic1","classType":"Master","isUserBlocked":false,"profession":"Master of boilers","skills":"Cool Guy","experience":"4 years","payment":3530,"smoke":false,"tools":"axe","start_time":-61599024840000,"end_time":-61597815240000},
      {"name":"Lesia","description":"DESCR : 30","object_id":37,"location":"Primorskyy","userDescription":"USERDESCR","phoneNumber":"380754842958","password":"pass8","picture":"pic1","classType":"Master","isUserBlocked":false,"profession":"bath master","skills":"Cool Guy","experience":"4 years","payment":550,"smoke":false,"tools":"axe","start_time":-61599024840000,"end_time":-61597815240000},
      {"name":"Maria","description":"DESCR : 30","object_id":38,"location":"Primorskyy","userDescription":"USERDESCR","phoneNumber":"380754832258","password":"pass9","picture":"pic1","classType":"Master","isUserBlocked":false,"profession":"Handyman","skills":"Cool Guy","experience":"4 years","payment":640,"smoke":false,"tools":"axe","start_time":-61599024840000,"end_time":-61597815240000},
      {"name":"Bob","description":"DESCR : 30","object_id":39,"location":"Primorskyy","userDescription":"USERDESCR","phoneNumber":"380754832957","password":"pass10","picture":"pic1","classType":"Master","isUserBlocked":false,"profession":"Handyman","skills":"Cool Guy","experience":"4 years","payment":2320,"smoke":false,"tools":"axe","start_time":-61599024840000,"end_time":-61597815240000},
	  {"name":"Taylor","description":"DESCR : 30","object_id":40,"location":"Primorskyy","userDescription":"USERDESCR","phoneNumber":"380754832956","password":"pass11","picture":"pic1","classType":"Master","isUserBlocked":false,"profession":"Handyman","skills":"Cool Guy","experience":"4 years","payment":760,"smoke":false,"tools":"axe","start_time":-61599024840000,"end_time":-61597815240000}
      ];
	
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
      this.loading(false);
		
    // $('.ui.dropdown').dropdown();
    // this.masterService.getMasterList().subscribe(masters => {
      // this.loading(false);
      // this.masters = masters;
    //})
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
