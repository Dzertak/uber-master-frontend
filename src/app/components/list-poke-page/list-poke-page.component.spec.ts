import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokePageComponent } from './list-poke-page.component';

describe('ListPokePageComponent', () => {
  let component: ListPokePageComponent;
  let fixture: ComponentFixture<ListPokePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPokePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
