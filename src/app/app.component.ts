import {AfterViewInit, Component} from '@angular/core';
import {AuthorizeService} from "./services/authorize.service";
import {Router} from "@angular/router";
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    swipe: number = 0;

    constructor(private authService: AuthorizeService, private router: Router){}

    isCorrectStatus(): boolean {
        return this.authService.getUserLoggedIn();
    }

    logout(): void {
        console.log("Logged out");
        this.authService.setUserLoggedIn(false);
        this.router.navigate(['/']);
    }


    swipeTab(tab: number){
        this.swipe = tab;
    }
    ngAfterViewInit(): void {

        $(document).ready(function () {

            $('.message .close').on('click', function () {
                $(this)
                    .closest('.message')
                    .transition('fade');
            });

            $("#multi-select").dropdown("get value")

        });
    }

}
