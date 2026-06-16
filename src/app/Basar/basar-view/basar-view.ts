import { Component } from '@angular/core';
import { BasarControllline } from '../basar-controllline/basar-controllline';
import { BasarSingleItemDisplay } from '../basar-single-item-display/basar-single-item-display';

@Component({
  selector: 'app-basar-view',
  imports: [BasarControllline, BasarSingleItemDisplay],
  templateUrl: './basar-view.html',
  styleUrl: './basar-view.css',
})
export class BasarView { }
