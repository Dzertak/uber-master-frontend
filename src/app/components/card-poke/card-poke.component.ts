import {Component, Input, OnInit} from '@angular/core';
import {Poke} from "../../index";
import {PokeService} from "../../services/poke.service";
import {AuthorizeService} from "../../index";

@Component({
  selector: 'app-card-poke',
  templateUrl: './card-poke.component.html',
  styleUrls: ['./card-poke.component.css'],
})
export class CardPokeComponent implements OnInit {


  @Input() poke: Poke;


  constructor(private pokeService: PokeService, private authService: AuthorizeService) { }

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
  
  isAdmin(): boolean{
	  return (this.authService.getUserType() == "Admin");
	  
  }
  

}
