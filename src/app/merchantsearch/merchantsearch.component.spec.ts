import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantsearchComponent } from './merchantsearch.component';

describe('MerchantsearchComponent', () => {
  let component: MerchantsearchComponent;
  let fixture: ComponentFixture<MerchantsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
