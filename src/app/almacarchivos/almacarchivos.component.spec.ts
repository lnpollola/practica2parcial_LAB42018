import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacarchivosComponent } from './almacarchivos.component';

describe('AlmacarchivosComponent', () => {
  let component: AlmacarchivosComponent;
  let fixture: ComponentFixture<AlmacarchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacarchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacarchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
