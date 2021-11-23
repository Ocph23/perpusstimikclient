import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemesananDetailComponent } from './pemesanan-detail.component';

describe('PemesananDetailComponent', () => {
  let component: PemesananDetailComponent;
  let fixture: ComponentFixture<PemesananDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemesananDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemesananDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
