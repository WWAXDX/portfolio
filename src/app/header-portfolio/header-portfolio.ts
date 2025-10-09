import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header-portfolio',
  imports: [RouterLink],
  templateUrl: './header-portfolio.html',
  styleUrl: './header-portfolio.css'
})
export class HeaderPortfolio {
  constructor(private theme: ThemeService) {}

  toggleLang() {
    alert('Change The language');
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
