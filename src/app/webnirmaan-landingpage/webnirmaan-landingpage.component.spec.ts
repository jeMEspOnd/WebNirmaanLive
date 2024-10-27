import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebnirmaanLandingpageComponent } from './webnirmaan-landingpage.component';

describe('WebnirmaanLandingpageComponent', () => {
  let component: WebnirmaanLandingpageComponent;
  let fixture: ComponentFixture<WebnirmaanLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebnirmaanLandingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebnirmaanLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
