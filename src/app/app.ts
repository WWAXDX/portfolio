import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPagePortfolio } from './main-page-portfolio/main-page-portfolio';
import { HeaderPortfolio } from './header-portfolio/header-portfolio';
import { FooterPortfolio } from './footer-portfolio/footer-portfolio';
import { AboutMe } from './about-me/about-me';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainPagePortfolio, HeaderPortfolio, FooterPortfolio, AboutMe],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
