import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFreeComponent } from './user-free.component';

describe('UserFreeComponent', () => {
  let component: UserFreeComponent;
  let fixture: ComponentFixture<UserFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
