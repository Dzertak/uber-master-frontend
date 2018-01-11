import { ChangeDetectionStrategy, Component,Input, OnInit } from '@angular/core';
import {Master} from "../../index";
import {Order} from "../../index"; //new
import {OrderService} from "../../services/order.service"; //new
import {PaginationInstance} from "ngx-pagination";//new
declare var $:any;

@Component({
  selector: 'app-profile-master',
  templateUrl: './profile-master.component.html',
  styleUrls: ['./profile-master.component.css']
})
export class ProfileMasterComponent implements OnInit {

  //@Input() master: Master;
   searchStr = '';
   searchStr2 = '';
  tag: string = '';
  tag2: string = '';
  isLoad: boolean = true;
  master = {"name":"Dirty Harry","description":"DESCR : 30","object_id":30,"location":"Primorskyy","userDescription":"USERDESCR","phoneNumber":"380754832658","password":"pass1","picture":"pic1","classType":"Master","isUserBlocked":false,"profession":"Cleaner","skills":"Cool Guy","experience":"4 years","payment":250,"smoke":false,"tools":"axe","start_time":-61599024840000,"end_time":-61597815240000};
  //new
  orders = [
      {"name":"Daily cleaning","description":"DESCR : 30","object_id":30,"master":30,"masterName":null,"masterProfession":"Cleaner","startDate":-61599024840000,"dueDate":-61597988040000,"bigDescription":"Daily cleaning","smallDescription":"Daily cleaning","status":"Completed"},
      {"name":"Laptop repairing","description":"DESCR : 31","object_id":31,"master":30,"masterName":null,"masterProfession":"Computer foreman","startDate":-61599024840000,"dueDate":-61598160840000,"bigDescription":"Laptop repairing","smallDescription":"Laptop repairing","status":"Completed"},
      {"name":"Installation of two-rate counters","description":"DESCR : 32","object_id":32,"master":30,"masterName":null,"masterProfession":"Electrician","startDate":-61599024840000,"dueDate":-61597815240000,"bigDescription":"Installation of two-rate counters","smallDescription":"Installation of two-rate counters","status":"Completed"},
      {"name":"Installation of two-rate counters","description":"DESCR : 33","object_id":33,"master":30,"masterName":null,"masterProfession":"Electrician","startDate":-61599024840000,"dueDate":-61598852040000,"bigDescription":"Installation of two-rate counters","smallDescription":"Installation of two-rate counters","status":"In processing"},
      {"name":"Replacement of electrical wiring","description":"DESCR : 38","object_id":38,"master":30,"masterName":null,"masterProfession":"Electrician","startDate":-61599024840000,"dueDate":-61598679240000,"bigDescription":"Replacement of electrical wiring","smallDescription":"Replacement of electrical wiring","status":"In processing"},
	   {"name":"Daily cleaning","description":"DESCR : 30","object_id":30,"master":30,"masterName":null,"masterProfession":"Cleaner","startDate":-61599024840000,"dueDate":-61597988040000,"bigDescription":"Daily cleaning","smallDescription":"Daily cleaning","status":"Completed"},
      {"name":"Laptop repairing","description":"DESCR : 31","object_id":31,"master":30,"masterName":null,"masterProfession":"Computer foreman","startDate":-61599024840000,"dueDate":-61598160840000,"bigDescription":"Laptop repairing","smallDescription":"Laptop repairing","status":"Completed"},
      {"name":"Installation of two-rate counters","description":"DESCR : 32","object_id":32,"master":30,"masterName":null,"masterProfession":"Electrician","startDate":-61599024840000,"dueDate":-61597815240000,"bigDescription":"Installation of two-rate counters","smallDescription":"Installation of two-rate counters","status":"Completed"},
      {"name":"Installation of two-rate counters","description":"DESCR : 33","object_id":33,"master":30,"masterName":null,"masterProfession":"Electrician","startDate":-61599024840000,"dueDate":-61598852040000,"bigDescription":"Installation of two-rate counters","smallDescription":"Installation of two-rate counters","status":"In processing"},
      {"name":"Replacement of electrical wiring","description":"DESCR : 38","object_id":38,"master":30,"masterName":null,"masterProfession":"Electrician","startDate":-61599024840000,"dueDate":-61598679240000,"bigDescription":"Replacement of electrical wiring","smallDescription":"Replacement of electrical wiring","status":"In processing"},
       {"name":"Daily cleaning","description":"DESCR : 30","object_id":30,"master":30,"masterName":null,"masterProfession":"Cleaner","startDate":-61599024840000,"dueDate":-61597988040000,"bigDescription":"Daily cleaning","smallDescription":"Daily cleaning","status":"Completed"},
      {"name":"Laptop repairing","description":"DESCR : 31","object_id":31,"master":30,"masterName":null,"masterProfession":"Computer foreman","startDate":-61599024840000,"dueDate":-61598160840000,"bigDescription":"Laptop repairing","smallDescription":"Laptop repairing","status":"Completed"},
      {"name":"Installation of two-rate counters","description":"DESCR : 32","object_id":32,"master":30,"masterName":null,"masterProfession":"Electrician","startDate":-61599024840000,"dueDate":-61597815240000,"bigDescription":"Installation of two-rate counters","smallDescription":"Installation of two-rate counters","status":"Completed"},
      {"name":"Installation of two-rate counters","description":"DESCR : 33","object_id":33,"master":30,"masterName":null,"masterProfession":"Electrician","startDate":-61599024840000,"dueDate":-61598852040000,"bigDescription":"Installation of two-rate counters","smallDescription":"Installation of two-rate counters","status":"In processing"},
      {"name":"Replacement of electrical wiring","description":"DESCR : 38","object_id":38,"master":30,"masterName":null,"masterProfession":"Electrician","startDate":-61599024840000,"dueDate":-61598679240000,"bigDescription":"Replacement of electrical wiring","smallDescription":"Replacement of electrical wiring","status":"In processing"},
	   {"name":"Daily cleaning","description":"DESCR : 30","object_id":30,"master":30,"masterName":null,"masterProfession":"Cleaner","startDate":-61599024840000,"dueDate":-61597988040000,"bigDescription":"Daily cleaning","smallDescription":"Daily cleaning","status":"Completed"},
      {"name":"Laptop repairing","description":"DESCR : 31","object_id":31,"master":30,"masterName":null,"masterProfession":"Computer foreman","startDate":-61599024840000,"dueDate":-61598160840000,"bigDescription":"Laptop repairing","smallDescription":"Laptop repairing","status":"Completed"},
      {"name":"Installation of two-rate counters","description":"DESCR : 32","object_id":32,"master":30,"masterName":null,"masterProfession":"Electrician","startDate":-61599024840000,"dueDate":-61597815240000,"bigDescription":"Installation of two-rate counters","smallDescription":"Installation of two-rate counters","status":"Completed"},
      {"name":"Installation of two-rate counters","description":"DESCR : 33","object_id":33,"master":30,"masterName":null,"masterProfession":"Electrician","startDate":-61599024840000,"dueDate":-61598852040000,"bigDescription":"Installation of two-rate counters","smallDescription":"Installation of two-rate counters","status":"In processing"},
      {"name":"Replacement of electrical wiring","description":"DESCR : 38","object_id":38,"master":30,"masterName":null,"masterProfession":"Electrician","startDate":-61599024840000,"dueDate":-61598679240000,"bigDescription":"Replacement of electrical wiring","smallDescription":"Replacement of electrical wiring","status":"In processing"}
	  ];
	  
	  public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: PaginationInstance = {
        id: 'master-in-process',
        itemsPerPage: 1,
        currentPage: 1
    };
	public config2: PaginationInstance = {
        id: 'master-completed',
        itemsPerPage: 2,
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
  
  
  constructor() { }

  ngOnInit() {
	   $('.ui.dropdown').dropdown();
      this.loading(false);
	   this.tag = "In processing";
	   this.tag2 = "Completed";
  }
  
  isSmoking() {
	  return this.master.smoke;
  }
  //new
  getSelectedTextValue() {
       this.tag = "In processing";
  }
  //new
  onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
	
    }
	
	onPageChange2(number: number) {
        console.log('change to page', number);
		this.config2.currentPage = number;
    }

}
