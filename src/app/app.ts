import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPortfolio } from './header-portfolio/header-portfolio';
import { FooterPortfolio } from './footer-portfolio/footer-portfolio';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderPortfolio, FooterPortfolio],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('my-portfolio');
  protected readonly showModal = signal(false);

  ngOnInit() {
    // Check if user has seen the modal before
    const hasSeenModal = localStorage.getItem('hasSeenWelcomeModal');
    if (!hasSeenModal) {
      this.showModal.set(true);
    }
    // Temporary: Always show modal for testing (remove this line later)
    this.showModal.set(true);
  }

  protected closeModal() {
    this.showModal.set(false);
    localStorage.setItem('hasSeenWelcomeModal', 'true');
  }
}
