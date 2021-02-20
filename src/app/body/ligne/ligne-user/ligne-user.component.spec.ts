import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneUserComponent } from './ligne-user.component';

describe('LigneUserComponent', () => {
  let component: LigneUserComponent;
  let fixture: ComponentFixture<LigneUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
