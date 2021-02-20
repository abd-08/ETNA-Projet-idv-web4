import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneAddressComponent } from './ligne-address.component';

describe('LigneAddressComponent', () => {
  let component: LigneAddressComponent;
  let fixture: ComponentFixture<LigneAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
