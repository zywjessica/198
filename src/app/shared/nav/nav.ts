import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="bg-spa-dark">
      <div class="mx-auto max-w-6xl px-4">
        <div class="flex items-center justify-between">
          <ul class="hidden gap-0 md:flex">
            @for (item of navItems; track item.path) {
              <li class="group relative">
                <a
                  [routerLink]="item.path"
                  routerLinkActive="bg-spa-primary"
                  [routerLinkActiveOptions]="{ exact: item.path === '/' }"
                  class="block px-4 py-3 text-sm font-medium tracking-wide text-white uppercase transition-colors hover:bg-spa-primary"
                >
                  {{ item.label }}
                </a>
                @if (item.children) {
                  <ul
                    class="invisible absolute left-0 z-50 min-w-44 bg-spa-dark opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100"
                  >
                    @for (child of item.children; track child.path) {
                      <li>
                        <a
                          [routerLink]="child.path"
                          routerLinkActive="bg-spa-primary"
                          class="block px-4 py-2 text-sm text-white hover:bg-spa-primary"
                        >
                          {{ child.label }}
                        </a>
                      </li>
                    }
                  </ul>
                }
              </li>
            }
          </ul>

          <button
            class="p-3 text-white md:hidden"
            (click)="mobileMenuOpen.set(!mobileMenuOpen())"
            aria-label="Toggle navigation menu"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              @if (mobileMenuOpen()) {
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              } @else {
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              }
            </svg>
          </button>
        </div>

        @if (mobileMenuOpen()) {
          <ul class="border-t border-white/10 pb-3 md:hidden">
            @for (item of navItems; track item.path) {
              <li>
                <a
                  [routerLink]="item.path"
                  routerLinkActive="bg-spa-primary"
                  [routerLinkActiveOptions]="{ exact: item.path === '/' }"
                  class="block px-4 py-2 text-sm text-white hover:bg-spa-primary"
                  (click)="mobileMenuOpen.set(false)"
                >
                  {{ item.label }}
                </a>
                @if (item.children) {
                  @for (child of item.children; track child.path) {
                    <a
                      [routerLink]="child.path"
                      routerLinkActive="bg-spa-primary"
                      class="block py-2 pl-8 pr-4 text-sm text-gray-300 hover:bg-spa-primary hover:text-white"
                      (click)="mobileMenuOpen.set(false)"
                    >
                      {{ child.label }}
                    </a>
                  }
                }
              </li>
            }
          </ul>
        }
      </div>
    </nav>
  `,
})
export class NavComponent {
  mobileMenuOpen = signal(false);

  readonly navItems = [
    { label: 'Home', path: '/' },
    {
      label: 'About',
      path: '/about',
      children: [{ label: 'Reviews', path: '/reviews' }],
    },
    { label: 'Services', path: '/services' },
    { label: 'Reflexology', path: '/reflexology' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact-us' },
  ];
}
