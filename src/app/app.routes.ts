import { Routes } from '@angular/router';
import { ResearchView } from './Research/research-view/research-view';

export const routes: Routes = [
  { path: "research", component: ResearchView },
  { path: "", redirectTo: "research", pathMatch: "full" }
];
