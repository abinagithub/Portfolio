import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivousWorkComponent } from './privous-work.component';

describe('PrivousWorkComponent', () => {
  let component: PrivousWorkComponent;
  let fixture: ComponentFixture<PrivousWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivousWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivousWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
