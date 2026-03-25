import { Component } from '@angular/core';

@Component({
  selector: 'app-reflexology',
  standalone: true,
  template: `
    <div class="mx-auto max-w-6xl px-4 py-8">
      <h1 class="font-heading mb-6 text-3xl font-bold text-spa-dark">Reflexology</h1>

      <div class="mb-8 flex flex-col gap-6 lg:flex-row-reverse">
        <figure class="lg:w-1/2">
          <img
            src="images/reflexology-chart-feet.jpg"
            alt="Reflexology Foot Chart with side and back references"
            class="w-full rounded-lg shadow-md"
          />
          <figcaption class="mt-2 text-center text-sm text-gray-500">
            Reflexology Foot Chart with side and back references
          </figcaption>
        </figure>

        <div class="space-y-4 text-gray-700 lg:w-1/2">
          <p>
            Reflexology is the application of pressure to areas on the feet, hands. Reflexology is
            generally relaxing and may be an effective way to alleviate stress. Reflexology is a
            popular alternative therapy. It promotes relaxation, improves circulation, reduces pain,
            soothes tired feet, and encourages overall healing and is also used for post-operative or
            palliative care.
          </p>
          <p>
            A study in the American Cancer Society journal found that one-third of cancer patients
            used reflexology as a complementary therapy. The theory behind reflexology is that these
            areas correspond to organs and systems of the body.
          </p>
          <p>
            Proponents believe that pressure applied to these areas affects the organs and benefits
            the person's health. Reflexologists use foot charts to guide them as they apply pressure
            to specific areas. Reflexology is recommended as a complementary therapy and should not
            replace medical treatment.
          </p>
          <p>
            Several studies funded by the National Cancer Institute and the National Institutes of
            Health indicate that reflexology may reduce pain and psychological symptoms, such as
            anxiety and depression, and enhance relaxation and sleep.
          </p>
        </div>
      </div>

      <div class="mb-8 space-y-4 text-gray-700">
        <p>
          Our feet mirror the health and comfort of our entire body. According to principles of
          reflexology, applying pressure to certain points of our soles increases circulation,
          cleanses the body of impurities, relaxes the soul, and brings balance to your body. Begin
          this relaxing ritual with a sip of warm herbal tea or cleansing cool drink. Next soak your
          feet in a detoxifying footbath and cover your eyes with a pillow infused with calming
          essential oils. Finally, lose yourself in a revitalizing foot massage to bring back your
          body's natural energy flow.
        </p>
      </div>

      <div class="mb-8 flex flex-col gap-6 lg:flex-row">
        <div class="lg:w-1/2">
          <h3 class="font-heading mb-4 text-xl font-semibold text-spa-dark">
            Why do people get reflexology?
          </h3>
          <ul class="space-y-2 text-gray-600">
            @for (condition of conditions; track condition) {
              <li class="flex items-center gap-2">
                <span class="h-1.5 w-1.5 rounded-full bg-spa-primary"></span>
                {{ condition }}
              </li>
            }
          </ul>
        </div>
        <figure class="lg:w-1/2">
          <img
            src="images/hand-reflexology-chart.jpg"
            alt="Hand reflexology chart"
            class="w-full rounded-lg shadow-md"
          />
          <figcaption class="mt-2 text-center text-sm text-gray-500">
            Hand Reflexology Chart
          </figcaption>
        </figure>
      </div>

      <div class="rounded-lg bg-spa-light p-6 text-gray-700">
        <p>
          <strong>Reflexology</strong> is a popular alternative therapy. It promotes relaxation,
          improves circulation, reduces pain, soothes tired feet, and encourages overall healing.
          Reflexology is also used for post-operative or palliative care. Reflexology is recommended
          as a complementary therapy and should not replace medical treatment.
        </p>
      </div>
    </div>
  `,
})
export class ReflexologyComponent {
  readonly conditions = [
    'Stress and stress-related conditions',
    'Tension',
    'Headaches',
    'Digestive disorders',
    'Arthritis',
    'Insomnia',
    'Hormonal imbalances',
    'Sports injuries',
    'Menstrual Disorders (PMS)',
    'Digestive problems, such as constipation',
    'Back pain',
  ];
}
