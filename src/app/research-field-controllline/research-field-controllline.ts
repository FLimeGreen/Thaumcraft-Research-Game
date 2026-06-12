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

    public AnzeigeCompleteResearchBool = signal(false);

    constructor(private researchFieldService: ResearchFieldService) {

    }

    onCheckClick(): void {
        console.log("Check Research Start");
        const valid = this.researchFieldService.checkifResearchIsComplete();
        console.log(valid);
        this.AnzeigeCompleteResearch.set(valid ? "Research Complete" : "Research Incomplete");
        this.AnzeigeCompleteResearchBool.set(valid);
    }

    onNewResearchClick(): void {
        console.log("New Research Start");
        this.researchFieldService.generateNewResearch();
        this.AnzeigeCompleteResearch.set("Not Checked");
        this.AnzeigeCompleteResearchBool.set(false);
    }
}
