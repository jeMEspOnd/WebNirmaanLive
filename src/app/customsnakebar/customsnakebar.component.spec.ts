import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsnakebarComponent } from './customsnakebar.component';

describe('CustomsnakebarComponent', () => {
  let component: CustomsnakebarComponent;
  let fixture: ComponentFixture<CustomsnakebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomsnakebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomsnakebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
