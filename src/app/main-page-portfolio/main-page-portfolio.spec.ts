import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagePortfolio } from './main-page-portfolio';

describe('MainPagePortfolio', () => {
  let component: MainPagePortfolio;
  let fixture: ComponentFixture<MainPagePortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPagePortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPagePortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
