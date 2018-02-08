import {Component, Input, OnInit} from '@angular/core';
import {Poke} from "../../index";
import {PokeService} from "../../services/poke.service";
import {AuthorizeService} from "../../index";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-poke',
  templateUrl: './card-poke.component.html',
  styleUrls: ['./card-poke.component.css'],
})
export class CardPokeComponent implements OnInit {


  @Input() poke: Poke;


  constructor(private pokeService: PokeService, private authService: AuthorizeService, private router: Router) { }

  ngOnInit() {

  }
  
  blockUser(poke: Poke){
		this.poke.blocked = true;
		this.pokeService.updatePoke(poke).subscribe(response => {
		    alert(response)
        }, error => {
		    alert(error)
        });
  }
  
  unblockUser(poke: Poke){
		this.poke.blocked = false;
		this.pokeService.updatePoke(poke).subscribe(response => {
            alert(response)
        }, error => {
            alert(error)
        });;
  }
  
   deletePoke(id: string){
	  this.pokeService.deletePoke(id).subscribe(result => {
	    alert(result);
      });
  }
  
  isAdmin(): boolean{
	  return (this.authService.getUserType() == "Admin");
	  
  }
  
  showPoke(){
      this.router.navigate(['/poke',this.poke.object_id])
  }
  

}
