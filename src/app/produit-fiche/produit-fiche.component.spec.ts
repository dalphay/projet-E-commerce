import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitFicheComponent } from './produit-fiche.component';

describe('ProduitFicheComponent', () => {
  let component: ProduitFicheComponent;
  let fixture: ComponentFixture<ProduitFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
