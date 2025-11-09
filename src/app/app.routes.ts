import { Routes } from '@angular/router';
import { MainPagePortfolio } from './main-page-portfolio/main-page-portfolio';

export const routes: Routes = [
	{ path: '', component: MainPagePortfolio },
	{ path: '**', redirectTo: '' }
];
