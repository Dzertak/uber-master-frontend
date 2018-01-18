import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


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
  protected _startDate = new Date();
  protected today;


  constructor(private fb: FormBuilder) {
    this.today = this.getToday();

    this.rForm = fb.group({
      '_name': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(60)])],
      '_smallDescription': [null, Validators.compose([Validators.required, Validators.minLength(25), Validators.maxLength(280)])],
      '_bigDescription': [null, Validators.compose([Validators.required, Validators.minLength(25), Validators.maxLength(500)])],
      '_dueDate': [null, Validators.required],
      '_startDate': [{value: this._startDate.toLocaleDateString(), disabled: true}],
      '_masterProfession' : [0, Validators.required]
    })
  }


  createOrder(create) {

    this.order = new Order(create._name, null, null,
      create._smallDescription, create._bigDescription, this._startDate,
      new Date(create._dueDate), 'New', null, create._masterProfession.id);

    console.log(this.order)
  }

  ngOnInit(): void {
  }


  getToday(): string {
    let today;
    let dd;
    let mm;
    let yyyy;

    dd = this._startDate.getDate();
    mm = this._startDate.getMonth() + 1;
    yyyy = this._startDate.getFullYear();

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
