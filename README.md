## Mounting an Angular Component Sample

## Steps to run
1. Run `npm install`
2. Run `npm run start`

## Questions
Look at `src/app/app.component.ts`. Look at line 30 in the `ngAfterViewInit` method. When calling `mountFromViewContainer`, change detection and everything works as expected. I'm able to imperatively mount a component from it's constructor.

If I comment out line 30 and uncomment line 31 so `mountWithoutViewContainer` is called. How am I able to mount the user's component (`MyComponent`) without a `ViewContainerRef`? I see that I can boostrap a component in the `componentFactory.create` method, but when I do that, I do not have a Host Element, and change detection does not work. We have several use cases in Ionic where we would not easily have access to the `ViewContainerRef` but would still like to mount the User's Angular component. Is this possible? What is the recommended approach for doing so.

