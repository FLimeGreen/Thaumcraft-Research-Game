import { Routes } from '@angular/router';
import { ResearchView } from './Research/research-view/research-view';
import { BasarView } from './Basar/basar-view/basar-view';
import { NotFound } from './not-found/not-found';
import { FusionAspectsView } from './FusionAspects/fusion-aspects-view/fusion-aspects-view';
import { DefusionView } from './FusionAspects/defusion-view/defusion-view';

export const routes: Routes = [
  { path: 'research', component: ResearchView },
  { path: '', redirectTo: 'research', pathMatch: 'full' },
  { path: 'basar', component: BasarView },
  { path: 'fusion', component: FusionAspectsView },
  { path: 'defusion', component: DefusionView },
  { path: '**', component: NotFound }
];
