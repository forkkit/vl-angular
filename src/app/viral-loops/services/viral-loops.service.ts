import { Injectable } from '@angular/core';
import { VlConfig } from '../models/vl-config.model';
import { VlTemplate } from '../models/vl-template.model';

@Injectable()
export class ViralLoopsService {

    private config: VlConfig;
    private scriptContents = {
        [VlTemplate.ReferAFriend]: {
            default: campaignId => `!function(){var a=window.VL=window.VL||{};return a.instances=a.instances||{},a.invoked?void(window.console&&console.error&&console.error("VL snippet loaded twice.")):(a.invoked=!0,void(a.load=function(b,c,d){var e={};e.publicToken=b,e.config=c||{};var f=document.createElement("script");f.type="text/javascript",f.id="vrlps-js",f.defer=!0,f.src="https://app.viral-loops.com/client/vl/vl.min.js";var g=document.getElementsByTagName("script")[0];return g.parentNode.insertBefore(f,g),f.onload=function(){a.setup(e),a.instances[b]=e},e.identify=e.identify||function(a,b){e.afterLoad={identify:{userData:a,cb:b}}},e.pendingEvents=[],e.track=e.track||function(a,b){e.pendingEvents.push({event:a,cb:b})},e.pendingHooks=[],e.addHook=e.addHook||function(a,b){e.pendingHooks.push({name:a,cb:b})},e.$=e.$||function(a){e.pendingHooks.push({name:"ready",cb:a})},e}))}();var campaign=VL.load("${campaignId}",{autoLoadWidgets:!0});campaign.addHook("boot",function(){campaign.widgets.create("rewardingWidget",{container:"body",position:"bottom-left"}),campaign.widgets.create("rewardingWidgetTrigger",{container:"body",position:"bottom-left"})});`,
            embeddable: campaignId => `!function(){var a=window.VL=window.VL||{};return a.instances=a.instances||{},a.invoked?void(window.console&&console.error&&console.error("VL snippet loaded twice.")):(a.invoked=!0,void(a.load=function(b,c,d){var e={};e.publicToken=b,e.config=c||{};var f=document.createElement("script");f.type="text/javascript",f.id="vrlps-js",f.defer=!0,f.src="https://app.viral-loops.com/client/vl/vl.min.js";var g=document.getElementsByTagName("script")[0];return g.parentNode.insertBefore(f,g),f.onload=function(){a.setup(e),a.instances[b]=e},e.identify=e.identify||function(a,b){e.afterLoad={identify:{userData:a,cb:b}}},e.pendingEvents=[],e.track=e.track||function(a,b){e.pendingEvents.push({event:a,cb:b})},e.pendingHooks=[],e.addHook=e.addHook||function(a,b){e.pendingHooks.push({name:a,cb:b})},e.$=e.$||function(a){e.pendingHooks.push({name:"ready",cb:a})},e}))}();var campaign=VL.load("${campaignId}",{autoLoadWidgets:!0});`
        },
        [VlTemplate.MilestoneReferral]: {
            default: campaignId => `!function(){var a=window.VL=window.VL||{};return a.instances=a.instances||{},a.invoked?void(window.console&&console.error&&console.error("VL snippet loaded twice.")):(a.invoked=!0,void(a.load=function(b,c,d){var e={};e.publicToken=b,e.config=c||{};var f=document.createElement("script");f.type="text/javascript",f.id="vrlps-js",f.defer=!0,f.src="https://app.viral-loops.com/client/vl/vl.min.js";var g=document.getElementsByTagName("script")[0];return g.parentNode.insertBefore(f,g),f.onload=function(){a.setup(e),a.instances[b]=e},e.identify=e.identify||function(a,b){e.afterLoad={identify:{userData:a,cb:b}}},e.pendingEvents=[],e.track=e.track||function(a,b){e.pendingEvents.push({event:a,cb:b})},e.pendingHooks=[],e.addHook=e.addHook||function(a,b){e.pendingHooks.push({name:a,cb:b})},e.$=e.$||function(a){e.pendingHooks.push({name:"ready",cb:a})},e}))}();var campaign=VL.load("${campaignId}",{autoLoadWidgets:!0});`
        }
    }

    constructor() { }

    init(config: VlConfig) {
        this.config = config;
    }

    private createScript(contents): HTMLScriptElement {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.innerText = contents;
        return script;
    }

    // Checks if the service has been configured
    private configCheck() {
        if(!this.config) {
            throw new Error("Viral Loops Service has not been configured");
        }
    }

    getDefaultReferAFriendScript(): HTMLScriptElement {
        this.configCheck();
        return this.createScript(this.scriptContents[VlTemplate.ReferAFriend].default(this.config.campaignIds.referAFriend));
    }

    getEmbeddableReferAFriendScript(): HTMLScriptElement {
        this.configCheck();
        return this.createScript(this.scriptContents[VlTemplate.ReferAFriend].embeddable(this.config.campaignIds.referAFriend));
    }

    getMilestoneReferralScript(): HTMLScriptElement {
        this.configCheck();
        return this.createScript(this.scriptContents[VlTemplate.MilestoneReferral].default(this.config.campaignIds.milestoneReferral));
    }
}