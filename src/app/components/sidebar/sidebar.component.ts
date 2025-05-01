import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Tab {
  label: string;
  route: string;
  // icon: SafeHtml;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  // based on Auth have to implement which routes to use
  tabs: Tab[] = [
    {
      label: 'Profile',
      route: 'profile',
      // icon: this.sanitize(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      //       d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />`)
    },
    {
      label: 'Supplier',
      route: 'supplier',
      // icon: this.sanitize(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      //       d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`)
    },
    {
      label: 'Contact',
      route: '/contact',
      // icon: this.sanitize(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      //       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />`)
    }
  ];;
  isClosed = input<boolean>(false);
}
