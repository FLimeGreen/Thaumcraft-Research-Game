import { Routes } from '@angular/router';
import { ResearchView } from './Research/research-view/research-view';
import { BasarView } from './Basar/basar-view/basar-view';
import { NotFound } from './not-found/not-found';
import { FusionAspectsView } from './FusionAspects/fusion-aspects-view/fusion-aspects-view';

export const routes: Routes = [
  { path: 'research', component: ResearchView },
  { path: '', redirectTo: 'research', pathMatch: 'full' },
  { path: 'basar', component: BasarView },
  { path: 'fusion', component: FusionAspectsView },
  { path: '**', component: NotFound }
];
