import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar';
import { REVIEWS } from '../../data/reviews';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [SidebarComponent],
  template: `
    <div class="mx-auto max-w-6xl px-4 py-8">
      <div class="grid gap-8 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <h1 class="font-heading mb-6 text-3xl font-bold text-spa-dark">Reviews</h1>
          <p class="mb-8 font-semibold text-gray-700">Here are a few of our Latest Reviews ~</p>

          <div class="space-y-6">
            @for (review of reviews; track $index) {
              <blockquote
                class="rounded-lg border-l-4 border-spa-primary bg-spa-light p-5 text-gray-700 italic"
              >
                <p>{{ review.text }}</p>
              </blockquote>
            }
          </div>
        </div>

        <div>
          <app-sidebar />
        </div>
      </div>
    </div>
  `,
})
export class ReviewsComponent {
  readonly reviews = REVIEWS;
}
