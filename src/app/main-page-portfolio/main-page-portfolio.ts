import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page-portfolio',
  imports: [],
  templateUrl: './main-page-portfolio.html',
  styleUrl: './main-page-portfolio.css'
})
export class MainPagePortfolio {

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    console.log('Contact form submitted', payload);
    alert('Message sent (demo)');
    form.reset();
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





