# Mithril

I liked [mithril](mithril.js.org) immediately from the initial doc review.  It seemed to embody some of the things that I like about React and avoided some of the issues I grew to dislike about Angular.

I hadn't heard much about mithril in the past, only once or twice on reddit.  So, this was a welcome change from the "this framework is awesome!" hype that I had been inundated with (thanks to reddit and React/Angular 2/Polymer).

## initial impressions

I've been very happy so far with the framework.  It feels very light and versatile.  It doesn't seem opinionated in how you structure your application; and plays very well with module loaders for DI.

Like always, I just dove into development, without going through any "real" tutorials.  In doing so, I missed a key point that was called out in the documentation about component composition about the args input into the view.

I was seeing my list of funds refresh in JS, but not via the UI.  While the list was refreshing, the controller had kept the fund from the initial rendering, thus never repainting the UI.  It took longer than I care to admit (sleeping on it helped) to resolve, but as soon as I did, things feel into place.

## todo

1. try out MSX
1. attempt to style some components to see functionality/style considerations
