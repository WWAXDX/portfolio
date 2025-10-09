import { Routes } from '@angular/router';
import { MainPagePortfolio } from './main-page-portfolio/main-page-portfolio';
import { AboutMe } from './about-me/about-me';

export const routes: Routes = [
	{ path: '', component: MainPagePortfolio },
	{ path: 'about-me', component: AboutMe }
];
