import { Component, signal, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ThemeService } from '../theme.service';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-header-portfolio',
  templateUrl: './header-portfolio.html',
  styleUrl: './header-portfolio.css'
})
export class HeaderPortfolio implements OnInit, OnDestroy {
  constructor(
    private theme: ThemeService,
    protected translate: TranslationService
  ) {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') as 'EN' | 'العربية' || 'EN';
    this.translate.setLanguage(savedLang);
    this.applyLanguage(savedLang);
  }

  ngOnInit() {
    this.updateHeaderOnScroll();
  }

  ngOnDestroy() {
    // Clean up if needed
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateHeaderOnScroll();
  }

  private updateHeaderOnScroll() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(23, 53, 97, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
      } else {
        navbar.style.backgroundColor = 'rgb(23, 53, 97)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      }
    }
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

  scrollToTop(event: Event): void {
    event.preventDefault();
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
