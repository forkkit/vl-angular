import { NgModule } from "@angular/core";
import { ViralLoopsService } from "./services/viral-loops.service";
import { MilestoneReferralComponent } from "./components/milestone-referral/milestone-referral.component";
import { MilestoneEmbedFormComponent } from "./components/milestone-embed-form/milestone-embed-form.component";
import { MilestoneCounterComponent } from "./components/milestone-counter/milestone-counter.component";
import { MilestoneWidgetComponent } from "./components/milestone-widget/milestone-widget.component";

@NgModule({
    declarations: [MilestoneReferralComponent, MilestoneEmbedFormComponent, MilestoneCounterComponent, MilestoneWidgetComponent],
    providers: [ViralLoopsService],
    exports: [MilestoneReferralComponent, MilestoneEmbedFormComponent, MilestoneCounterComponent, MilestoneWidgetComponent]
})
export class ViralLoopsModule {}