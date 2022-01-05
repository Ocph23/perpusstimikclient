import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePeminjamanComponent } from './create-peminjaman.component';

describe('CreatePeminjamanComponent', () => {
  let component: CreatePeminjamanComponent;
  let fixture: ComponentFixture<CreatePeminjamanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePeminjamanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePeminjamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
