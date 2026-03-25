import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SidebarComponent } from '../../shared/sidebar/sidebar';
import { BUSINESS_INFO } from '../../data/business-info';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, SidebarComponent],
  template: `
    <div class="mx-auto max-w-6xl px-4 py-8">
      <div class="grid gap-8 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <h1 class="font-heading mb-6 text-3xl font-bold text-spa-dark">Contact Us</h1>

          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            class="mb-8 space-y-4"
          >
            <div>
              <label for="name" class="mb-1 block text-sm font-medium text-gray-700">
                Your Name (required)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-spa-primary focus:ring-2 focus:ring-spa-primary/20 focus:outline-none"
              />
            </div>
            <div>
              <label for="email" class="mb-1 block text-sm font-medium text-gray-700">
                Your Email (required)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-spa-primary focus:ring-2 focus:ring-spa-primary/20 focus:outline-none"
              />
            </div>
            <div>
              <label for="subject" class="mb-1 block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                class="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-spa-primary focus:ring-2 focus:ring-spa-primary/20 focus:outline-none"
              />
            </div>
            <div>
              <label for="message" class="mb-1 block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                class="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-spa-primary focus:ring-2 focus:ring-spa-primary/20 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="rounded-lg bg-spa-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-spa-primary/90"
            >
              Send
            </button>
          </form>

          <hr class="my-8 border-gray-200" />

          <div class="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md">
            <iframe
              [src]="mapsUrl"
              class="h-full w-full border-0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="The Foot Care Spa location on Google Maps"
            ></iframe>
          </div>
        </div>

        <div>
          <app-sidebar />
        </div>
      </div>
    </div>
  `,
})
export class ContactComponent {
  readonly mapsUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.mapsUrl = sanitizer.bypassSecurityTrustResourceUrl(BUSINESS_INFO.googleMapsEmbed);
  }
}
