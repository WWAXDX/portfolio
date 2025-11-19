import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-footer-portfolio',
  imports: [],
  templateUrl: './footer-portfolio.html',
  styleUrl: './footer-portfolio.css'
})
export class FooterPortfolio {
  protected readonly translationService = inject(TranslationService);
}
