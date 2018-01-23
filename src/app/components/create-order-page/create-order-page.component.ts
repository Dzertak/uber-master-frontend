import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorizeService} from "../../services/authorize.service";


@Component({
  selector: 'app-create-order-page',
  templateUrl: './create-order-page.component.html',
  styleUrls: ['./create-order-page.component.css']
})


export class CreateOrderPageComponent implements OnInit {


  professions = [
    {id: 0, name: 'Profession'},
    {id: 1, name: 'Profession 1'},
    {id: 2, name: 'Profession 2'},
    {id: 3, name: 'Profession 3'},
    {id: 4, name: 'Profession 4'},
    {id: 5, name: 'Profession 5'}
  ];

  private order: Order;
  public rForm: FormGroup;
  private create: any;
  protected startDate = new Date();
  protected today;


  constructor(private fb: FormBuilder, private authService: AuthorizeService) {
    this.today = this.getToday();

    this.rForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(60)])],
      'smallDescription': [null, Validators.compose([Validators.required, Validators.minLength(25), Validators.maxLength(280)])],
      'bigDescription': [null, Validators.compose([Validators.required, Validators.minLength(25), Validators.maxLength(500)])],
      'dueDate': [null, Validators.required],
      'startDate': [{value: this.startDate.toLocaleDateString(), disabled: true}],
      'masterProfession' : [0, Validators.required]
    })
  }


  createOrder(create) {

    this.order = new Order(create.name, null, null,
      create.smallDescription, create.bigDescription, this.startDate,
      new Date(create.dueDate), 'New', null, null, create.masterProfession.id,null,null,this.authService.getUser().object_id);

    console.log(this.order)
  }

  ngOnInit(): void {
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
