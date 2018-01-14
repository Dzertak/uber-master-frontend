import { ChangeDetectionStrategy, Component,Input, OnInit } from '@angular/core';
import {Master, AuthorizeService, MasterService} from "../../index";

import {PaginationInstance} from "ngx-pagination";
declare var $:any;

@Component({
  selector: 'app-list-masters-page',
  templateUrl: './list-masters-page.component.html',
  styleUrls: ['./list-masters-page.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
   // providers: [AuthorizeService]
})
export class ListMastersPageComponent implements OnInit {

    searchStr = '';
    //userName: string;
	isLoad: boolean = true;
	
	//poke = {072507379529, 2bHaQODy2XMPdskRZy8boMN};
	//master={670845907014,ybGRNzcfTjC7OiAs}
	//masters = [{"name":"Елизавета Маркова","description":"DESCR : 10","object_id":10,"location":"Suvorovskyy","userDescription":"USER DESCR : 10","phoneNumber":"060349872689","password":"Va9NZv7bswJxt4iDA2F5r","picture":"www.PIcTuRe10.com","classType":"ubermaster.entity.model.Master","profession":"Plumber","skills":"Some skills","experience":"10","payment":59447,"smoke":true,"tools":"Some tools","start_time":-61599277800000,"end_time":-61599256200000,"blocked":true},{"name":"Римма Аксёнова","description":"DESCR : 11","object_id":11,"location":"Suvorovskyy","userDescription":"USER DESCR : 11","phoneNumber":"990217111131","password":"5InxF8dQhC2YAAzXu4ITpd","picture":"www.PIcTuRe11.com","classType":"ubermaster.entity.model.Master","profession":"Handyman","skills":"Some skills","experience":"17","payment":80330,"smoke":true,"tools":"Some tools","start_time":-61599276000000,"end_time":-61599258000000,"blocked":false},{"name":"Юнона Гаврилова","description":"DESCR : 12","object_id":12,"location":"Primorskyy","userDescription":"USER DESCR : 12","phoneNumber":"670845907014","password":"ybGRNzcfTjC7OiAs","picture":"www.PIcTuRe12.com","classType":"ubermaster.entity.model.Master","profession":"Cleaner","skills":"Some skills","experience":"29","payment":71580,"smoke":false,"tools":"Some tools","start_time":-61599281400000,"end_time":-61599249000000,"blocked":false},{"name":"Давид Харитонов","description":"DESCR : 13","object_id":13,"location":"Kievskyy","userDescription":"USER DESCR : 13","phoneNumber":"930159044863","password":"O1BuLwa8WWOC","picture":"www.PIcTuRe13.com","classType":"ubermaster.entity.model.Master","profession":"Cleaner","skills":"Some skills","experience":"15","payment":78544,"smoke":true,"tools":"Some tools","start_time":-61599294000000,"end_time":-61599254400000,"blocked":false},{"name":"Давид Карпов","description":"DESCR : 14","object_id":14,"location":"Primorskyy","userDescription":"USER DESCR : 14","phoneNumber":"711419050465","password":"LafVmTah7JwNXH1VNQx2SRPr","picture":"www.PIcTuRe14.com","classType":"ubermaster.entity.model.Master","profession":"Handyman","skills":"Some skills","experience":"29","payment":41833,"smoke":true,"tools":"Some tools","start_time":-61599290400000,"end_time":-61599261600000,"blocked":true},{"name":"Вадим Стрелков","description":"DESCR : 15","object_id":15,"location":"Primorskyy","userDescription":"USER DESCR : 15","phoneNumber":"658207339158","password":"qqnZhoUzpDO7ZHJqJAe","picture":"www.PIcTuRe15.com","classType":"ubermaster.entity.model.Master","profession":"Plumber","skills":"Some skills","experience":"28","payment":33720,"smoke":false,"tools":"Some tools","start_time":-61599283200000,"end_time":-61599256200000,"blocked":false},{"name":"Римма Тихонова","description":"DESCR : 16","object_id":16,"location":"Suvorovskyy","userDescription":"USER DESCR : 16","phoneNumber":"668379359332","password":"avPVpDdRXlNhgqlke","picture":"www.PIcTuRe16.com","classType":"ubermaster.entity.model.Master","profession":"Locksmith","skills":"Some skills","experience":"16","payment":33735,"smoke":true,"tools":"Some tools","start_time":-61599277800000,"end_time":-61599261600000,"blocked":false},{"name":"Лазарь Тихонов","description":"DESCR : 17","object_id":17,"location":"Suvorovskyy","userDescription":"USER DESCR : 17","phoneNumber":"107611596905","password":"fxNj7k7Srtm9KtR0oLz","picture":"www.PIcTuRe17.com","classType":"ubermaster.entity.model.Master","profession":"Handyman","skills":"Some skills","experience":"6","payment":4315,"smoke":true,"tools":"Some tools","start_time":-61599274200000,"end_time":-61599250800000,"blocked":false},{"name":"Вадим Фролов","description":"DESCR : 18","object_id":18,"location":"Suvorovskyy","userDescription":"USER DESCR : 18","phoneNumber":"475450908673","password":"plj19SmcOD0tdr","picture":"www.PIcTuRe18.com","classType":"ubermaster.entity.model.Master","profession":"Electrician","skills":"Some skills","experience":"9","payment":27643,"smoke":false,"tools":"Some tools","start_time":-61599279600000,"end_time":-61599258000000,"blocked":false},{"name":"Марта Маркова","description":"DESCR : 19","object_id":19,"location":"Malinovskyy","userDescription":"USER DESCR : 19","phoneNumber":"843873761801","password":"inH8g46HmQVO8cZAFjHjCAL","picture":"www.PIcTuRe19.com","classType":"ubermaster.entity.model.Master","profession":"Computer foreman","skills":"Some skills","experience":"24","payment":25212,"smoke":false,"tools":"Some tools","start_time":-61599288600000,"end_time":-61599252600000,"blocked":true},{"name":"Юнона Николаева","description":"DESCR : 20","object_id":20,"location":"Primorskyy","userDescription":"USER DESCR : 20","phoneNumber":"223277246616","password":"0WB4vIHmuyMn1nWnDmCypC","picture":"www.PIcTuRe20.com","classType":"ubermaster.entity.model.Master","profession":"Plumber","skills":"Some skills","experience":"19","payment":88696,"smoke":false,"tools":"Some tools","start_time":-61599286800000,"end_time":-61599263400000,"blocked":false},{"name":"Хаскил Гусев","description":"DESCR : 21","object_id":21,"location":"Suvorovskyy","userDescription":"USER DESCR : 21","phoneNumber":"266955283750","password":"R9zCefEXbYsMTOZA4sTkD9SN","picture":"www.PIcTuRe21.com","classType":"ubermaster.entity.model.Master","profession":"Plumber","skills":"Some skills","experience":"3","payment":6487,"smoke":false,"tools":"Some tools","start_time":-61599286800000,"end_time":-61599250800000,"blocked":false},{"name":"Марта Фролова","description":"DESCR : 22","object_id":22,"location":"Primorskyy","userDescription":"USER DESCR : 22","phoneNumber":"847222928888","password":"uAAtv2IxVRTX5bUjLovLXIKf","picture":"www.PIcTuRe22.com","classType":"ubermaster.entity.model.Master","profession":"Computer foreman","skills":"Some skills","experience":"9","payment":38230,"smoke":false,"tools":"Some tools","start_time":-61599279600000,"end_time":-61599250800000,"blocked":false},{"name":"Нинель Фандорина","description":"DESCR : 23","object_id":23,"location":"Kievskyy","userDescription":"USER DESCR : 23","phoneNumber":"756599703735","password":"GjMViEOc8gvfznRi3xTvO","picture":"www.PIcTuRe23.com","classType":"ubermaster.entity.model.Master","profession":"Plumber","skills":"Some skills","experience":"17","payment":4247,"smoke":false,"tools":"Some tools","start_time":-61599292200000,"end_time":-61599258000000,"blocked":false},{"name":"Дионисий Суворов","description":"DESCR : 24","object_id":24,"location":"Kievskyy","userDescription":"USER DESCR : 24","phoneNumber":"819303131107","password":"2VBnzepvTLKkVRZ","picture":"www.PIcTuRe24.com","classType":"ubermaster.entity.model.Master","profession":"Computer foreman","skills":"Some skills","experience":"12","payment":73275,"smoke":true,"tools":"Some tools","start_time":-61599288600000,"end_time":-61599258000000,"blocked":false},{"name":"Степан Тихонов","description":"DESCR : 25","object_id":25,"location":"Primorskyy","userDescription":"USER DESCR : 25","phoneNumber":"679302981846","password":"BAF7x54cEM9JbHXx","picture":"www.PIcTuRe25.com","classType":"ubermaster.entity.model.Master","profession":"Computer foreman","skills":"Some skills","experience":"4","payment":15192,"smoke":false,"tools":"Some tools","start_time":-61599288600000,"end_time":-61599254400000,"blocked":true},{"name":"Паскаль Гаврилов","description":"DESCR : 26","object_id":26,"location":"Primorskyy","userDescription":"USER DESCR : 26","phoneNumber":"100703532747","password":"VUVYh4iAyw7ACLUGOf5bVI7","picture":"www.PIcTuRe26.com","classType":"ubermaster.entity.model.Master","profession":"Plumber","skills":"Some skills","experience":"26","payment":77286,"smoke":true,"tools":"Some tools","start_time":-61599285000000,"end_time":-61599259800000,"blocked":true},{"name":"Виктор Николаев","description":"DESCR : 27","object_id":27,"location":"Malinovskyy","userDescription":"USER DESCR : 27","phoneNumber":"693617797943","password":"8nlqQa1i5pwSZSjMVjn9nzxQ","picture":"www.PIcTuRe27.com","classType":"ubermaster.entity.model.Master","profession":"Plumber","skills":"Some skills","experience":"13","payment":58829,"smoke":true,"tools":"Some tools","start_time":-61599277800000,"end_time":-61599249000000,"blocked":true},{"name":"Паскаль Власов","description":"DESCR : 28","object_id":28,"location":"Kievskyy","userDescription":"USER DESCR : 28","phoneNumber":"500282531872","password":"yGypB4E2WUH","picture":"www.PIcTuRe28.com","classType":"ubermaster.entity.model.Master","profession":"Cleaner","skills":"Some skills","experience":"25","payment":63825,"smoke":false,"tools":"Some tools","start_time":-61599277800000,"end_time":-61599258000000,"blocked":false},{"name":"Давид Юдин","description":"DESCR : 29","object_id":29,"location":"Primorskyy","userDescription":"USER DESCR : 29","phoneNumber":"780932490831","password":"wP5cL98UIlz7QmpUZYpz","picture":"www.PIcTuRe29.com","classType":"ubermaster.entity.model.Master","profession":"Handyman","skills":"Some skills","experience":"4","payment":10239,"smoke":false,"tools":"Some tools","start_time":-61599276000000,"end_time":-61599249000000,"blocked":true}];
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
		$('.ui.dropdown').dropdown();

        //this.userName = this.authorizeService.username;
	this.masterService.getMasterList().subscribe(masters => {
       this.loading(false);
       this.masters = masters;
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
