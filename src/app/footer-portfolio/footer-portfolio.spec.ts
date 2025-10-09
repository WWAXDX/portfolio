import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPortfolio } from './footer-portfolio';

describe('FooterPortfolio', () => {
  let component: FooterPortfolio;
  let fixture: ComponentFixture<FooterPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterPortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterPortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
