import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorizeService} from '../../services/authorize.service';
import {OrderService} from '../../services/order.service';


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

  constructor(private fb: FormBuilder, private authService: AuthorizeService, private orderService: OrderService) {
    this.today = this.getToday();
    this.rForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(60)])],
      'smallDescription': [null, Validators.compose([Validators.required, Validators.minLength(25), Validators.maxLength(280)])],
      'bigDescription': [null, Validators.compose([Validators.required, Validators.minLength(25), Validators.maxLength(500)])],
      'dueDate': [this.today, Validators.required],
      'startDate': [{value: this.startDate.toLocaleDateString(), disabled: true}],
      'masterProfession': ['Profession...', Validators.required],
      'time': ['23:59', Validators.required]
    })
  }


  createOrder(create) {
    this.dueDate = new Date(create.dueDate);
    this.time = create.time;

    this.dueDate = new Date(this.dueDate.getFullYear(), this.dueDate.getMonth(), this.dueDate.getDay(),
      this.time.split(':')[0], this.time.split(':')[1])

    this.order = new Order(create.name, '', -1,
      create.smallDescription, create.bigDescription, this.startDate,
      this.dueDate, 'New', -1, '-1', create.masterProfession,
      -1, null, this.authService.getUser().object_id);

    console.log(this.order)
    // this.orderService.createOder(this.order).subscribe(result => {
    //   console.log(result);
    // });
  }

  ngOnInit(): void {

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
