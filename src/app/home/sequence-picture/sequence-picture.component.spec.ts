import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequencePictureComponent } from './sequence-picture.component';

describe('SequencePictureComponent', () => {
  let component: SequencePictureComponent;
  let fixture: ComponentFixture<SequencePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequencePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
