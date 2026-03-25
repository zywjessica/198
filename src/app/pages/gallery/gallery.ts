import { Component, signal } from '@angular/core';
import { GALLERY_IMAGES } from '../../data/gallery';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <div class="mx-auto max-w-6xl px-4 py-8">
      <h1 class="font-heading mb-6 text-3xl font-bold text-spa-dark">Gallery</h1>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        @for (image of images; track image.src; let i = $index) {
          <div
            class="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl"
            (click)="openLightbox(i)"
          >
            <img
              [src]="image.src"
              [alt]="image.alt"
              class="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        }
      </div>
    </div>

    @if (lightboxOpen()) {
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        (click)="closeLightbox()"
      >
        <button
          class="absolute top-4 right-4 text-3xl text-white hover:text-spa-accent"
          (click)="closeLightbox()"
          aria-label="Close lightbox"
        >
          &times;
        </button>
        <button
          class="absolute left-4 text-4xl text-white hover:text-spa-accent"
          (click)="prev($event)"
          aria-label="Previous image"
        >
          &#8249;
        </button>
        <img
          [src]="images[currentIndex()].src"
          [alt]="images[currentIndex()].alt"
          class="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
          (click)="$event.stopPropagation()"
        />
        <button
          class="absolute right-4 text-4xl text-white hover:text-spa-accent"
          (click)="next($event)"
          aria-label="Next image"
        >
          &#8250;
        </button>
      </div>
    }
  `,
})
export class GalleryComponent {
  readonly images = GALLERY_IMAGES;
  lightboxOpen = signal(false);
  currentIndex = signal(0);

  openLightbox(index: number) {
    this.currentIndex.set(index);
    this.lightboxOpen.set(true);
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
  }

  prev(event: Event) {
    event.stopPropagation();
    this.currentIndex.set(
      this.currentIndex() === 0 ? this.images.length - 1 : this.currentIndex() - 1
    );
  }

  next(event: Event) {
    event.stopPropagation();
    this.currentIndex.set(
      this.currentIndex() === this.images.length - 1 ? 0 : this.currentIndex() + 1
    );
  }
}
