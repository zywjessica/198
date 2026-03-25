import { Component } from '@angular/core';
import { SERVICES } from '../../data/services';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <div class="mx-auto max-w-6xl px-4 py-8">
      <div class="mb-8 text-center">
        <h1 class="font-heading mb-2 text-3xl font-bold text-spa-dark">Our Services & Prices</h1>
        <p class="text-gray-600">
          Below are the general variations of our services and their prices.
        </p>
        <p class="text-gray-600">
          Let us know what you would like us to focus on and we can adjust the session based on your
          request.
        </p>
        <p class="mt-4 text-sm text-gray-500">
          We also have gift cards available, so you can buy multiple massages. Just ask when you come
          in!
        </p>
      </div>

      <div class="mb-8 overflow-hidden rounded-lg">
        <img
          src="images/chair-and-room.jpg"
          alt="Massage chairs and treatment room"
          class="h-48 w-full object-cover"
        />
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        @for (category of services; track category.name) {
          <div class="rounded-lg bg-spa-light p-6 shadow-sm">
            <h3 class="font-heading mb-1 text-center text-xl font-semibold text-spa-primary">
              {{ category.name }}
            </h3>
            @if (category.subtitle) {
              <p class="mb-4 text-center text-sm text-gray-500">{{ category.subtitle }}</p>
            } @else {
              <div class="mb-4"></div>
            }
            <div class="space-y-4">
              @for (option of category.options; track option.duration) {
                <div class="border-b border-spa-accent/30 pb-3 last:border-b-0">
                  <div class="flex items-center justify-between">
                    <span class="font-semibold text-spa-dark">{{ option.duration }}</span>
                    <span class="text-lg font-bold text-spa-primary">{{ option.price }}</span>
                  </div>
                  <p class="text-sm text-gray-500">{{ option.description }}</p>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `,
})
export class ServicesComponent {
  readonly services = SERVICES;
}
