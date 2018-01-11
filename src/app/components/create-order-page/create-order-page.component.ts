import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-order-page',
  templateUrl: './create-order-page.component.html',
  styleUrls: ['./create-order-page.component.css'],
})
export class CreateOrderPageComponent implements OnInit {


  private order: Order;
  private rForm: FormGroup;
  private create: any;
  private _name: string;
  private _smallDescription: string;
  private _bigDescription: string;
  private _startDate: Date ;
  private _dueDate: Date;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      '_name': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(60)])],
      '_smallDescription': [null, Validators.compose([Validators.required, Validators.minLength(25), Validators.maxLength(280)])],
      '_bigDescription': [null, Validators.compose([Validators.required, Validators.minLength(25), Validators.maxLength(500)])],
      '_startDate': [null, Validators.required],
      '_dueDate': [null, Validators.required],
    })
  }

  createOrder(create) {
    this.order = new Order(create._name, null, null,
      create._smallDescription, create._bigDescription, create._startDate,
      create._dueDate, 'New', null, null);
  }


  ngOnInit() {

  }

}
