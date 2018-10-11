How to use the Viral Loops for Angular module:

- Import the module in your app.module or any other module you want to use
- Initialize the `ViralLoopsService` by calling `.init()` and passing in the campaign ids for any templates you may use. Look at app.component.ts for an example
- Initialize the widgets by including the <milestone-referral></milestone-referral> component in a top-level container (e.g `app.component.html`). No widget will be visible at this point.
- Use the milestone-counter, milestone-embed-form and milestone-widget components anywhere you want and they will only appear to that page, for example after login


Run the demo app with `ng serve` and browse to `http:localhost:4200`