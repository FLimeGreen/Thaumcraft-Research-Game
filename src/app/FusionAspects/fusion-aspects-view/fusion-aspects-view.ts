import { Component } from '@angular/core';
import { ResearchInventoryField } from '../../Research/research-inventory-field/research-inventory-field';
import { FusionItem } from '../fusion-item/fusion-item';
import { FusionControllline } from '../fusion-controllline/fusion-controllline';

@Component({
  selector: 'app-fusion-aspects-view',
  imports: [ResearchInventoryField, FusionItem, FusionControllline],
  templateUrl: './fusion-aspects-view.html',
  styleUrl: './fusion-aspects-view.css',
})
export class FusionAspectsView { }
