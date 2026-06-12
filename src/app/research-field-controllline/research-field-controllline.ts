import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchFieldService } from '../../Services/Research_Field/research-field-Service';

@Component({
    selector: 'app-research-field-controllline',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './research-field-controllline.html',
    styleUrl: './research-field-controllline.css',
})
export class ResearchFieldControllline {

    public AnzeigeCompleteResearch = signal("Not Checked");

    constructor(private researchFieldService: ResearchFieldService) {

    }

    onCheckClick(): void {
        console.log("Check Research Start");
        const valid = this.researchFieldService.checkifResearchIsComplete();
        console.log(valid);
        this.AnzeigeCompleteResearch.set(valid ? "Research Complete" : "Research Incomplete");
    }

    Test(): void {
        console.log("Button funktioniert");
    }
}
