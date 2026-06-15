import { Routes } from '@angular/router';
import { ResearchView } from './Research/research-view/research-view';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: 'research', component: ResearchView },
  { path: '', redirectTo: 'research', pathMatch: 'full' },
  { path: '**', component: NotFound }
];
