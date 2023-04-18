import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantUsersComponent } from './merchant-users.component';

describe('MerchantUsersComponent', () => {
  let component: MerchantUsersComponent;
  let fixture: ComponentFixture<MerchantUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
