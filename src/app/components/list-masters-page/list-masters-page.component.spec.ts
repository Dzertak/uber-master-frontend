import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMastersPageComponent } from './list-masters-page.component';

describe('ListMastersPageComponent', () => {
  let component: ListMastersPageComponent;
  let fixture: ComponentFixture<ListMastersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMastersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMastersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
