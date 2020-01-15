import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoujoComponent } from './shoujo.component';

describe('ShoujoComponent', () => {
  let component: ShoujoComponent;
  let fixture: ComponentFixture<ShoujoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoujoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
