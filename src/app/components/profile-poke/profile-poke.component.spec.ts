import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePokeComponent } from './profile-poke.component';

describe('ProfilePokeComponent', () => {
  let component: ProfilePokeComponent;
  let fixture: ComponentFixture<ProfilePokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
