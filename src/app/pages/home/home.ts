import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SidebarComponent } from '../../shared/sidebar/sidebar';
import { BUSINESS_INFO } from '../../data/business-info';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent],
  template: `
    <div class="mx-auto max-w-6xl px-4 py-8">
      <div class="grid gap-8 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <h1 class="font-heading mb-6 text-3xl font-bold text-spa-dark">
            Reflexology For South Florida
          </h1>

          <div class="mb-6 flex flex-col gap-6 md:flex-row">
            <img
              src="images/foot-massage-chart.jpg"
              alt="Foot massage reflexology chart"
              class="w-full rounded-lg shadow-md md:w-72"
            />
            <div class="text-gray-700">
              <p class="mb-4">
                Welcome to "The Foot Care Spa"... South Florida's best Reflexology & Massage Spa. We
                service our southern Florida clients with expert reflexology and massage; from Pompano
                Beach, to Boca Raton, and from Deerfield Beach to Lighthouse Point and Hillsborough.
              </p>
              <p class="mb-4">
                No matter what your needs, from stress relief to total pampered relaxation, visit us
                in Deerfield Beach. Find out why our popularity has grown over the years with our
                affordable quality and clean, peaceful atmosphere, where you can free yourself from
                the stresses of the outside world, and rejuvenate yourself with our pampering massage
                and reflexology.
              </p>
              <p class="font-semibold text-spa-primary">
                The Foot Care Spa is the most refreshing, relaxing experience you'll find in South
                Florida.
              </p>
            </div>
          </div>

          <p class="font-heading mb-8 text-xl font-medium text-spa-dark">
            Relax & Rejuvenate in Florida's Best Foot Massage & Reflexology Spa.
          </p>

          <div class="mb-8">
            <h4 class="font-heading mb-4 text-lg font-semibold text-spa-dark">
              Foot Care Spa Intro Video
            </h4>
            <div class="aspect-video w-full overflow-hidden rounded-lg shadow-md">
              <iframe
                [src]="videoUrl"
                class="h-full w-full"
                frameborder="0"
                allowfullscreen
                loading="lazy"
                title="Foot Care Spa Intro Video"
              ></iframe>
            </div>
          </div>
        </div>

        <div>
          <app-sidebar />
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {
  readonly videoUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.videoUrl = sanitizer.bypassSecurityTrustResourceUrl(BUSINESS_INFO.youtubeEmbed);
  }
}
