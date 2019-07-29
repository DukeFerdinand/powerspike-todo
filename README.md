## Task-ify

An todo app using Vue.

### TL;DR

Very fun project. Would do again!

**To run**: `npm start`
<br><br><br>

#### The build system

Initially I was going to use docker with compose as that's what I generally use for applications, but I decided against it because it added unnecessary complexity and assumed that the test runner would have docker installed on their machine.

I used a custom webpack setup primarily to gain the knowledge of setting up a Vue based app vs the React apps i'm most familiar with.

#### Technology used

I wrote the app in Vue + Typescript because the strong type system helps stop problems BEFORE they happen such as passing bad function params and expecting incorrect return values.

This came in handy with the Vuex store as I could add type definitions for everything that would flow through it. In this instance it wasn't THAT much (only an array of tasks), BUT it was helpful with autocompletion, so I definitely used it there :)

I also used an Express server as a proxy to send requests to the api to avoid any CORS errors. As far as the app knows it's MY api that is doing the work.

#### Reason for choosing technologies

I chose TypeScript becaus even though it's kind of annoyingly verbose in some cases, predictable types are a nice addition to the world of JavaScript. That and VS Code gives WAY better intellisense completions with TS vs JS ;)

I went with Vue for the obvious reason of PowerSpike using Vue :) That and I _really_ wanted an excuse to break out of my comfort zone of using React and Redux for everything! I'm SO glad I did. I think Vue will make up a large portion of my commits from now on.

Finally, I chose Express because I could pretty much guarantee it would run with a node environment present on your machine. I was probably going to use Flask with Python because it was such a simple API proxy, but I knew that would detract from it's "out of the box nature"... I thought about using Docker for it and just pulling a python image, but it was the same problem of not being able to guarantee you having access to `docker-compose` :)

#### Things that went well

Biggest one was the Vuex store! I love how easy it is to access the store, no stupid `connect(Component)` hoc calls like in redux, and easy to use mutations that don't require complex return values from a reducer.

I really enjoyed the templating system of Vue with slots and two way data bindings for form imports, as well as having everything pretty clear and concise for how it renders and how it works.

#### Things didn't go as well

I wanted to try something new with the addition of TypeScript and vue-class-components, but I feel that they kind of got in the way for such a small project like this. The type system is excellent for larger projects where you know you won't remember what's being passed into a huge number of components, but for a project _this_ small, I think you're better off with Vue's built in prop type declarations.

In addition to that, the documentation is pretty sparse for using TypeScript and vue-class-components, so you're kind of on your own in some cases when there's errors. Specifically when searching for using it with `v-model`, you're going to run up on the `Model` class that doesn't really accomplish the nature of what you're probably trying to achieve (I just wanted to access the form inputs via `v-model`).

_All that being said_, I'm definitely going to use this again in my own projects that require more involved user interfaces with more involved props.

#### Summary

Overall I'm pretty happy with how everything went. If I had more time I'd add some tests to make sure everything works as expected, but I feel TypeScript covered most of what I'd be testing so I can leave that out for now.

I'm going to be moving many many miles over the next few days so unfortunately I'll have to leave that out. I plan to come back and add that after though! :)

If you made it this far: You're awesome! Have a great day!
