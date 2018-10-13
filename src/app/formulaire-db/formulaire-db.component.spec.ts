import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDbComponent } from './formulaire-db.component';

describe('FormulaireDbComponent', () => {
  let component: FormulaireDbComponent;
  let fixture: ComponentFixture<FormulaireDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
