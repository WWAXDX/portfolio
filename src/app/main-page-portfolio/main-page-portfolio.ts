import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-main-page-portfolio',
  imports: [],
  templateUrl: './main-page-portfolio.html',
  styleUrl: './main-page-portfolio.css'
})
export class MainPagePortfolio {

  constructor(protected translate: TranslationService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    console.log('Contact form submitted', payload);
    alert(this.translate.translate('messageSent'));
    form.reset();
  }

  downloadCV() {
    // يمكنك وضع رابط ملف السيرة الذاتية هنا
    const cvUrl = 'assets/Abdullah_CV.pdf'; // ضع ملف السيرة الذاتية في مجلد assets
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Abdullah_CV.pdf';
    link.click();
  }

  viewCV() {
    // فتح ملف السيرة الذاتية في نافذة جديدة
    const cvUrl = 'assets/Abdullah_CV.pdf'; // ضع ملف السيرة الذاتية في مجلد assets
    window.open(cvUrl, '_blank');
  }
  
}
interface ObserverOptions {
  threshold: number;
  rootMargin: string;
}

const observerOptions: ObserverOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

// Create Intersection Observer
const observer: IntersectionObserver = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  observerOptions
);

// Initialize animations on DOM load
const initScrollAnimations = (): void => {
  // Skills animation from right
  const skillCards: NodeListOf<Element> = document.querySelectorAll('.skills-section .skill-card');
  skillCards.forEach((card: Element) => {
    card.classList.add('animate-on-scroll');
    observer.observe(card);
  });
  
  // Projects animation from bottom
  const projectCards: NodeListOf<Element> = document.querySelectorAll('.projects-section .skill-card');
  projectCards.forEach((card: Element) => {
    card.classList.add('animate-from-bottom');
    observer.observe(card);
  });
  
  // Courses animation from left
  const courseCards: NodeListOf<Element> = document.querySelectorAll('.courses-section .skill-card');
  courseCards.forEach((card: Element) => {
    card.classList.add('animate-from-left');
    observer.observe(card);
  });
  
  // Titles and separators animation
  const titles: NodeListOf<Element> = document.querySelectorAll('.section-title, .separator');
  titles.forEach((title: Element) => {
    title.classList.add('animate-from-bottom');
    observer.observe(title);
  });
  
  // Contact card animation
  const contactCard: Element | null = document.querySelector('.contact-card');
  if (contactCard) {
    contactCard.classList.add('animate-from-bottom');
    observer.observe(contactCard);
  }
};

// Run on DOM ready
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Export for module usage (optional)
export { initScrollAnimations, observer };





