import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private storageKey = 'theme';

  constructor() {
    // initialize from localStorage if available
    const saved = localStorage.getItem(this.storageKey);
    if (saved === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }

  toggle(): void {
    const isDark = document.body.classList.toggle('dark-mode');
    try {
      localStorage.setItem(this.storageKey, isDark ? 'dark' : 'light');
    } catch (e) {
    }
  }

  setDark(on: boolean): void {
    if (on) {
      document.body.classList.add('dark-mode');
      localStorage.setItem(this.storageKey, 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem(this.storageKey, 'light');
    }
  }

  isDark(): boolean {
    return document.body.classList.contains('dark-mode');
  }
}
