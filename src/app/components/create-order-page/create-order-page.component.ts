import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorizeService} from '../../services/authorize.service';
import {OrderService} from '../../services/order.service';
import {Router} from "@angular/router";

declare var $:any;

@Component({
  selector: 'app-create-order-page',
  templateUrl: './create-order-page.component.html',
  styleUrls: ['./create-order-page.component.css']
})
export class CreateOrderPageComponent implements OnInit {


  professions = [
    {id: 0, name: 'Profession...'},
    {id: 1, name: 'Locksmith'},
    {id: 2, name: 'Plumber'},
    {id: 3, name: 'Electrician'},
    {id: 4, name: 'Cleaner'},
    {id: 5, name: 'Computer foreman'},
    {id: 6, name: 'Handyman'}
  ];

  private order: Order;
  public rForm: FormGroup;
  private create: any;
  protected startDate = new Date();
  protected today;
  prof: string;
  private dueDate: Date;
  private time: any;
    isLoading: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthorizeService, private orderService: OrderService, private router: Router) {
    this.today = this.getToday();
    //this.startDate = this.today;
      /*this.startDate = new Date(this.today.getFullYear, this.today.getMonth(), this.today.getDay(),
          this.today.getHours(), this.today.getMinutes());*/
    this.rForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(30)])],
      'smallDescription': [null, Validators.compose([Validators.required, Validators.minLength(25), Validators.maxLength(280)])],
      'bigDescription': [null, Validators.compose([Validators.required, Validators.minLength(25), Validators.maxLength(500)])],
      'dueDate': [this.today, Validators.required],
      'startDate': [{value: this.startDate.toLocaleDateString(), disabled: true}],
      'masterProfession': ['Profession...', Validators.required],
      'time': ['23:59', Validators.required]
    })
  }




  showSuccessCreation() {
      $('#creation-success-message').removeClass('hidden');
  }
  
  createOrder(create) {
    this.isLoading = true;
    let dueDate = new Date(create.dueDate);
    this.time = create.time;

    // console.log(new Date(this.dueDate.getFullYear(), this.dueDate.getMonth(), this.dueDate.getDay(),
    //   this.time.split(':')[0], this.time.split(':')[1]));

    this.dueDate = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate(),
      this.time.split(':')[0], this.time.split(':')[1])

    this.order = new Order(create.name, 'Order', null,
      create.smallDescription, create.bigDescription, this.startDate,
      this.dueDate, 'New', null, null, create.masterProfession,
      0, null, this.authService.getUser().object_id, ' ');

	  
    console.log(this.order)
    this.orderService.createOder(this.order).subscribe(result => {
        console.log(result);
  });
  
	this.showSuccessCreation();
    setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['orders']);
    },1500)

  }


  ngOnInit(): void {
	  $('.message .close').on('click', function () {
          $(this)
              .closest('.message')
              .transition('fade');
      });
  

    this.rForm.controls['dueDate'].valueChanges.subscribe(value => {
      if (value === '' || value < this.today) {
        this.rForm.controls['dueDate'].setValue(this.today);
      }
    });

    this.rForm.controls['time'].valueChanges.subscribe(value => {
      if (value === '') {
        this.rForm.controls['time'].setValue('23:59');
      }
    });
  }

  setProfession(prof: string) {
    this.prof = prof;
  }

  getToday(): string {
    let today;
    let dd;
    let mm;
    let yyyy;

    dd = this.startDate.getDate();
    mm = this.startDate.getMonth() + 1;
    yyyy = this.startDate.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }


}
