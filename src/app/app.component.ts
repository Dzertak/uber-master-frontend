import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {User, AuthorizeService} from "./index";
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    swipe: number = 0;
	notAdmin = true;
    constructor(private authService: AuthorizeService, private router: Router){}

    isCorrectStatus(): boolean {
        return this.authService.getUserLoggedIn();
    }
	
	//check if Poke or Master is authorized(for Profile page)
	isPoke(): boolean {
		if(this.authService.getUserType() == "ubermaster.entity.model.Poke"){
        return true;}
		else if(this.authService.getUserType() == "ubermaster.entity.model.Master"){
        return false;}
		else if(this.authService.getUserType() == "ubermaster.entity.model.Admin"){
		this.notAdmin = false;
		return true;}
    }

    logout(): void {
        console.log("Logged out");
        this.authService.logout();
        this.router.navigate(['/']);
    }


    swipeTab(tab: number){
        this.swipe = tab;
    }



}
