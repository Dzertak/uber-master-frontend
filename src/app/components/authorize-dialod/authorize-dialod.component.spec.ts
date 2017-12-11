import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeDialodComponent } from './authorize-dialod.component';

describe('AuthorizeDialodComponent', () => {
  let component: AuthorizeDialodComponent;
  let fixture: ComponentFixture<AuthorizeDialodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizeDialodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeDialodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
