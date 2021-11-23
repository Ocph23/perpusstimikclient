import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPenelitianComponent } from './add-penelitian.component';

describe('AddPenelitianComponent', () => {
  let component: AddPenelitianComponent;
  let fixture: ComponentFixture<AddPenelitianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPenelitianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPenelitianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
