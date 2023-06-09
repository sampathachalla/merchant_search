import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantregistrationComponent } from './merchantregistration.component';

describe('MerchantregistrationComponent', () => {
  let component: MerchantregistrationComponent;
  let fixture: ComponentFixture<MerchantregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
