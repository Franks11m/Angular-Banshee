import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BansheeComponent } from './banshee.component';

describe('BansheeComponent', () => {
  let component: BansheeComponent;
  let fixture: ComponentFixture<BansheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BansheeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BansheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
