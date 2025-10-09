import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    console.log('Contact form submitted', payload);
    // For now just log — you could POST this to an API endpoint.
    alert('Message sent (demo)');
    form.reset();
  }
}
