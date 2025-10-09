import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPortfolio } from './header-portfolio';

describe('HeaderPortfolio', () => {
  let component: HeaderPortfolio;
  let fixture: ComponentFixture<HeaderPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
