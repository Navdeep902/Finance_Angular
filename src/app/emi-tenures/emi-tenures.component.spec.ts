import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiTenuresComponent } from './emi-tenures.component';

describe('EmiTenuresComponent', () => {
  let component: EmiTenuresComponent;
  let fixture: ComponentFixture<EmiTenuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiTenuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiTenuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
