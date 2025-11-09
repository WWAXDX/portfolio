import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
  
  constructor(protected translate: TranslationService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    console.log('Contact form submitted', payload);
    // For now just log — you could POST this to an API endpoint.
    alert(this.translate.translate('messageSent'));
    form.reset();
  }
}
