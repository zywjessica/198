import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.AboutComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then((m) => m.ServicesComponent),
  },
  {
    path: 'reflexology',
    loadComponent: () =>
      import('./pages/reflexology/reflexology').then((m) => m.ReflexologyComponent),
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery').then((m) => m.GalleryComponent),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactComponent),
  },
  {
    path: 'reviews',
    loadComponent: () => import('./pages/reviews/reviews').then((m) => m.ReviewsComponent),
  },
  { path: '**', redirectTo: '' },
];
