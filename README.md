<h1 align="center">If This Then Donate (IFTTD) by Distributed Dodos (0.2.1)</h1>

<h3 align="center">Micro donations based on twitter event triggers.</h3>

<h4>Built with</h4>

<p align="center"><img src="https://user-images.githubusercontent.com/16248113/83821895-9d752d80-a69d-11ea-94a9-fa3251971a6c.png" alt="Built With Javascript, React, Babel, AWS Amplify, Twitter API, and styled-components" /></p>

<h4>In action:</h4>
<p align="center"><img src="https://user-images.githubusercontent.com/16248113/83820631-29d22100-a69b-11ea-9bee-8a00f2316fec.png" alt="Built With Javascript, React, Babel, AWS Amplify, and styled-components" /></p>

## Features

- IFTTD allows users to create accounts and link certain donations and charities with Twitter hashtags. We automatically track your donation amount for you, and link you straight to the non-profit's website.
- A notification system will alert you when your hashtag has raised more money.
- A Twitter bot will comment underneath user's tweets with the hashtag of your choice to thank them for their engagement.

## How to setup AWS Amplify

There are a couple of things to do before you can start using the AWS Amplify API.

First, cd into the project directory and run this next command.

```
cd 0.2.1-donation-trigger
amplify init
amplify add api
```

This will help setup Amplify on your end. Since there's a file called `team-provider-info.json` (`./amplify/`), you will be able to pull and push changes directly.

Once you have initialized amplify, run the next command to get the most recent version of the API.

```
amplify pull
```

Similarly, if you make changes and want to push them to the `dev` environemt, run

```
amplify push
```

To get the current status of the Amplify project, run

```
amplify status
```

To access the Amplify console of the app, run

```
amplify console
```

If you want to test the GraphQL api with a mock database, run

```
amplify mock api
```

It will generate an instance where you can access a sandbox environment for testing. If you have the mock api running alongside the web app, the app will directly grab from the fake db.

## How to configure Twitter OAuth1

In order to request access to another user's Twitter account via the API, [apply](https://developer.twitter.com/en/apply-for-access) for Twitter developer access.

Create a Twitter app, and choose a callback URL to register under that app. If running locally, use `ngrok` or another tunneling tool, and register this origin. This URL needs to be within the primary origin.

With that callback URL, set `REACT_APP_CALLBACK_URL` in `.env`. The user is redirected to this URL, but the window is closed shortly after, satisfying the Twitter API.

Refresh Twitter token and secret, and set `REACT_APP_CONSUMER_KEY` and `REACT_APP_CONSUMER_SECRET`.

**Reminder:** Once you update the .env make sure to always restart the react server.

## How to run

You will need to start the React application, as well as a test env of the API.

```
npm install
npm start
```

## Code structure

<big><pre>
📂 [amplify](./amplify)
├── 📂 [.config](./amplify/.config)
├── 📂 [backend](./amplify/backend)
│   ├── 📂 [api](./amplify/backend/api)
│   │   ├── 📂 [021donationtrigger](./amplify/backend/api/021donationtrigger)
│   │   │   ├── 📂 [resolvers](./amplify/backend/api/021donationtrigger/resolvers)
│   │   │   ├── 📂 [stacks](./amplify/backend/api/021donationtrigger/stacks)
📂 [public](./public) # Supplemental assets or resources, or static files
📂 [src](./src) # Source files
├── 📂 [assets](./src/assets)
├── 📂 [components](./src/components)
│   ├── 📂 [containers](./src/components/containers)
│   │   ├── 📂 [Action](./src/components/containers/Action)
│   │   │   ├── 📂 [Greeting](./src/components/containers/Action/Greeting)
│   │   │   ├── 📂 [SubmissionComponent](./src/components/containers/Action/SubmissionComponent)
│   │   │   │   ├── 📂 [AddCharity](./src/components/containers/Action/SubmissionComponent/AddCharity)
│   │   │   │   ├── 📂 [Charity](./src/components/containers/Action/SubmissionComponent/Charity)
│   │   ├── 📂 [Home](./src/components/containers/Home)
│   │   │   ├── 📂 [CausesList](./src/components/containers/Home/CausesList)
│   │   │   │   ├── 📂 [CausesListItem](./src/components/containers/Home/CausesList/CausesListItem)
│   │   │   ├── 📂 [EventsLoop](./src/components/containers/Home/EventsLoop)
│   │   │   ├── 📂 [Header](./src/components/containers/Home/Header)
│   │   ├── 📂 [Legacy](./src/components/containers/Legacy)
├── 📂 [graphql](./src/graphql)
├── 📂 [pages](./src/pages)
├── 📂 [styles](./src/styles)
├── 📂 [utils](./src/utils)
</pre></big>

Big shoutout to the team over at [0.2.1-readme-dirs](https://github.com/MLH-Fellowship/0.2.1-readme-dirs) for creating this generated code structure.

Generate your own project structure [here](https://project-structure-readme.netlify.app)
