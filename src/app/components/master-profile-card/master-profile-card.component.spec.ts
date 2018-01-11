import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProfileCardComponent } from './master-profile-card.component';

describe('MasterProfileCardComponent', () => {
  let component: MasterProfileCardComponent;
  let fixture: ComponentFixture<MasterProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterProfileCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
