# If This Then Donate (IFTTD)\* by Distributed Dodos (0.2.1)

Micro donations based on twitter event triggers.

## Set-up Instructions
After cloning the repository, run `npm install` and then `npm start`. Open `http://localhost:3000/` to use our app.

## Features
* Social media engagement does matter: make it matter more by setting microdonations based on twitter hashtags and content.
* IFTTD allows users to create accounts and link certain donations and charities with Twitter hashtags. We automatically track your donation amount for you, and link you straight to the non-profit's website.

\*=name tbd

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

## How to run

You will need to start the React application, as well as a test env of the API.

```
npm start
amplify mock api
```
