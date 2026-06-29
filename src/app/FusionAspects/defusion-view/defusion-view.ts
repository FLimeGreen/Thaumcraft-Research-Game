import { Component } from '@angular/core';
import { ResearchInventoryField } from '../../Research/research-inventory-field/research-inventory-field';
import { FusionItem } from '../fusion-item/fusion-item';
import { DefusionControllline } from '../defusion-controllline/defusion-controllline';

@Component({
  selector: 'app-defusion-view',
  imports: [ResearchInventoryField, FusionItem, DefusionControllline],
  templateUrl: './defusion-view.html',
  styleUrl: './defusion-view.css',
})
export class DefusionView { }
