import {Component, Input, OnInit} from '@angular/core';
import {Master} from "../../index";
import {MasterService} from "../../services/master.service";
import {AuthorizeService} from "../../index";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-master',
  templateUrl: './card-master.component.html',
  styleUrls: ['./card-master.component.css'],
})
export class CardMasterComponent implements OnInit {


  @Input() master: Master;

    orders = [];
    avg:number;
    sum:number;

  constructor(private masterService: MasterService, private authService: AuthorizeService, private router: Router) { }

  ngOnInit() {
      this.masterService.getMasterOrders(this.master.object_id.toString()).subscribe(orders => {
          this.orders = orders;
      });
  }

    mastersRate(){
		this.sum = 0;
		this.avg = 0;
		var count: number = 0;
		for(let ord of this.orders)
		{
			if(ord.mark != 0)
			{
			this.sum += ord.mark;
			count++;
			}
		}
		this.avg = this.sum/count /* this.orders.length */;
		return Math.round(this.avg);
	}
	
	blockUser(master: Master){
		this.master.blocked = true;
		this.masterService.updateMaster(master).subscribe(response => {
		    alert(response);
        }, error => {
		    alert(error);
        });
  }
  
  unblockUser(master: Master){
		this.master.blocked = false;
		this.masterService.updateMaster(master).subscribe(response => {
            alert(response);
        }, error => {
            alert(error);
        });
  }
  
  deleteMaster(id: string){
	  this.masterService.deleteMaster(id).subscribe(result => {
	    alert(result);
      });
  }
  
  isAdmin(): boolean{
	  return (this.authService.getUserType() == "Admin");
  }

  showMaster(){
      this.router.navigate(['/master',this.master.object_id])
  }
}
