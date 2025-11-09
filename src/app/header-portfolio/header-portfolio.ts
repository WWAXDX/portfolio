import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-header-portfolio',
  imports: [RouterLink],
  templateUrl: './header-portfolio.html',
  styleUrl: './header-portfolio.css'
})
export class HeaderPortfolio {
  constructor(
    private theme: ThemeService,
    protected translate: TranslationService
  ) {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') as 'EN' | 'العربية' || 'EN';
    this.translate.setLanguage(savedLang);
    this.applyLanguage(savedLang);
  }

  get currentLang() {
    return this.translate.getCurrentLanguage();
  }

  get isArabic() {
    return this.translate.isArabic();
  }

  toggleLang() {
    const newLang = this.currentLang === 'EN' ? 'العربية' : 'EN';
    this.translate.setLanguage(newLang);
    
    // Apply language changes
    this.applyLanguage(newLang);
  }

  private applyLanguage(lang: string) {
    const body = document.body;
    
    if (lang === 'العربية') {
      body.setAttribute('dir', 'rtl');
      body.style.fontFamily = "'Noto Kufi Arabic', sans-serif";
    } else {
      body.setAttribute('dir', 'ltr');
      body.style.fontFamily = "'Montserrat', sans-serif";
    }
  }

  toggleDark() {
    this.theme.toggle();
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    
    const element = document.getElementById(sectionId);
    
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  }
}
