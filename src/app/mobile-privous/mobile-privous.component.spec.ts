import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePrivousComponent } from './mobile-privous.component';

describe('MobilePrivousComponent', () => {
  let component: MobilePrivousComponent;
  let fixture: ComponentFixture<MobilePrivousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilePrivousComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobilePrivousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
