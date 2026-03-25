import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SidebarComponent],
  template: `
    <div class="mx-auto max-w-6xl px-4 py-8">
      <div class="grid gap-8 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <h1 class="font-heading mb-6 text-3xl font-bold text-spa-dark">About</h1>

          <div class="mb-6 flex flex-col gap-6 md:flex-row-reverse">
            <img
              src="images/building-exterior.jpg"
              alt="The Foot Care Spa Building"
              class="w-full rounded-lg shadow-md md:w-72"
            />
            <div class="space-y-4 text-gray-700">
              <p>
                Located in Deerfield Beach, we create a peaceful atmosphere where you can free
                yourself from the stresses and the chaos of the outside world. The Foot Care Spa is
                the most refreshing, relaxing experience you'll find in South Florida. Our premium
                all inclusive services come at an affordable price and delivered by knowledgeable and
                friendly staff. We use only the best natural products for our treatments and many of
                them have holistic healing properties.
              </p>
              <p>
                All our therapists are highly skilled, they offer a deep pressure foot massage using
                ancient reflexology and pressure point techniques to ease problem areas such as toe
                and ankle pain, arthritis, plantar fasciitis. This extravagant therapy will leave
                your feet walking on clouds and is the perfect reward for the beating they accept
                every day!
              </p>
            </div>
          </div>

          <div class="mb-6 space-y-4 text-gray-700">
            <p>
              Come in or schedule an appointment today and see for yourself why The Foot Care Spa is
              the best reflexology spa in Southern Florida! We service clients from Pompano Beach,
              Deerfield Beach, Lighthouse Point, Hillsboro and Boca Raton.
            </p>
            <p class="font-semibold text-spa-primary">
              From stress relief, to all forms of reflexology, to total relaxation, come in and
              we'll take care of you....
            </p>
          </div>

          <figure class="overflow-hidden rounded-lg">
            <img
              src="images/spa-massage-area.jpg"
              alt="Foot Spa Massage Area"
              class="w-full shadow-md"
            />
            <figcaption class="mt-2 text-center text-sm text-gray-500">
              Foot Spa Massage Area
            </figcaption>
          </figure>
        </div>

        <div>
          <app-sidebar />
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent {}
