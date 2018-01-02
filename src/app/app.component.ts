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



    constructor(private authService: AuthorizeService, private router: Router){}

    isCorrectStatus(): boolean {
        return this.authService.getUserLoggedIn();
    }

    logout(): void {
        console.log("Logged out");
        this.authService.setUserLoggedIn(false);
        this.router.navigate(['/']);
    }

    ngAfterViewInit(): void {

        $(document).ready(function () {

            $('#ordersRouterLink').click(function () {
                $('#ordersRouterLink').addClass("active");
                $('#mastersRouterLink').removeClass("active");
            });

            $('#mastersRouterLink').click(function() {
                $('#mastersRouterLink').addClass("active");
                $('#ordersRouterLink').removeClass("active");
            });

            $('.message .close').on('click', function () {
                $(this)
                    .closest('.message')
                    .transition('fade');
            });
        });
    }

    clearActiveClasses() {
        $('#ordersRouterLink').removeClass("active");
        $('#mastersRouterLink').removeClass("active");

    }

}
