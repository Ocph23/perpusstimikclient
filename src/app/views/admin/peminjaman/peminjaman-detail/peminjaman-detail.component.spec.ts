import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeminjamanDetailComponent } from './peminjaman-detail.component';

describe('PeminjamanDetailComponent', () => {
  let component: PeminjamanDetailComponent;
  let fixture: ComponentFixture<PeminjamanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeminjamanDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeminjamanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
