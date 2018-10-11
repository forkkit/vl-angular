import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ViralLoopsService } from '../../services/viral-loops.service';

@Component({
    selector: 'milestone-referral',
    templateUrl: 'milestone-referral.component.html'
})

export class MilestoneReferralComponent implements OnInit, OnDestroy {
    constructor(private _service: ViralLoopsService) { }

    @ViewChild('widgetContainer')
    container: ElementRef;
    scriptElement: HTMLScriptElement;

    ngOnInit() {
        this.scriptElement = this._service.getMilestoneReferralScript();
        this.container.nativeElement.appendChild(this.scriptElement);
    }

    ngOnDestroy() {

    }
}