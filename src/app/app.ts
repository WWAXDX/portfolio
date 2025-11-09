import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPortfolio } from './header-portfolio/header-portfolio';
import { FooterPortfolio } from './footer-portfolio/footer-portfolio';
import { TranslationService } from './translation.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderPortfolio, FooterPortfolio],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('my-portfolio');
  protected readonly showModal = signal(false);

  constructor(protected translate: TranslationService) {}

  ngOnInit() {
    // Check if user has seen the modal before
    const hasSeenModal = localStorage.getItem('hasSeenWelcomeModal');
    if (!hasSeenModal) {
      this.showModal.set(true);
    }
  }

  protected closeModal() {
    this.showModal.set(false);
    localStorage.setItem('hasSeenWelcomeModal', 'true');
  }
}
