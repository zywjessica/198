import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUSINESS_INFO } from '../../data/business-info';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-spa-dark text-white">
      <div class="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <!-- Column 1: Links -->
        <div>
          <h4 class="font-heading mb-4 text-lg font-semibold">Foot Care Spa Web Pages</h4>
          <ul class="space-y-2 text-sm">
            @for (link of pageLinks; track link.path) {
              <li>
                <a
                  [routerLink]="link.path"
                  class="text-gray-300 transition-colors hover:text-spa-accent"
                >
                  {{ link.label }}
                </a>
              </li>
            }
          </ul>
          <div class="mt-4 flex gap-4">
            <a
              [href]="info.social.facebook"
              target="_blank"
              rel="noopener"
              class="text-gray-300 transition-colors hover:text-spa-accent"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              [href]="info.social.twitter"
              target="_blank"
              rel="noopener"
              class="text-gray-300 transition-colors hover:text-spa-accent"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>

        <!-- Column 2: Reviews -->
        <div>
          <h4 class="font-heading mb-4 text-lg font-semibold">Foot Care Spa Reviews</h4>
          <div class="space-y-3 text-sm text-gray-300">
            <p class="italic">
              "Cheap, clean, great decor, and professional! I'm a teacher so I'm on my feet all
              day!! My first time here and I'm Amazed!! 50$ for an hour foot massage! HEAVEN..."
            </p>
            <p class="italic">
              "Great place, nice people, and very relaxing. I really did not want to leave when my
              session was over. Definitely recommend!!"
            </p>
            <a routerLink="/reviews" class="inline-block text-spa-accent hover:underline">
              more reviews
            </a>
          </div>
        </div>

        <!-- Column 3: Contact -->
        <div>
          <h4 class="font-heading mb-4 text-lg font-semibold">"Relax & Rejuvenate"</h4>
          <p class="mb-4 text-sm text-gray-300">
            Treat yourself, your friends and family to an affordable and relaxing massage experience.
            Come to Deerfield's popular, affordable massage and reflexology spa: "The Foot Care Spa".
          </p>
          <div class="text-sm text-gray-300">
            <p class="font-semibold text-white">{{ info.name }}</p>
            <p>{{ info.address.street }}, {{ info.address.city }}</p>
            <p class="mt-2 font-semibold text-spa-accent">Walk-ins Welcome!</p>
            <p>
              or CALL to reserve:
              <a [href]="info.phoneLink" class="text-white hover:text-spa-accent">
                {{ info.phone }}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly info = BUSINESS_INFO;
  readonly pageLinks = [
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'Prices', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Reflexology', path: '/reflexology' },
    { label: 'Reviews', path: '/reviews' },
  ];
}
