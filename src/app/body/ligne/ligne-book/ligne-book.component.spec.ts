import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneBookComponent } from './ligne-book.component';

describe('LigneBookComponent', () => {
  let component: LigneBookComponent;
  let fixture: ComponentFixture<LigneBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
