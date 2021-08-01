<img align="right" width="180" src="https://img.icons8.com/color/452/firebase.png" />
<a href="https://www.producthunt.com/posts/firebase-auth-app?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-firebase-auth-app" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=306740&theme=light" alt="Firebase-Auth-App - Boilerplate Project for Google Authentication with Firebase | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" align="left"/></a>
<h1>firebase-auth-app🚀</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/itskaranchoudhary/firebase-auth-app#readme" target="_blank">
  <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://GitHub.com/itskaranchoudhary/firebase-auth-app/issues/">
  <img alt="issues "src="https://img.shields.io/github/issues/itskaranchoudhary/firebase-auth-app">
  </a>
  <a href="https://github.com/itskaranchoudhary/firebase-auth-app/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/itskaranchoudhary/firebase-auth-app/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> Boilerplate Project for Google Authentication with Firebase

### 🏠 [Homepage](https://github.com/itskaranchoudhary/firebase-auth-app#readme)
## 🛠️ Installation Steps

**You’ll need to have Node 10.16.0 or later version on your local development machine**. We recommend using the latest LTS version.

To create a new app, you may choose one of the following methods:

### npm
1. Install the package

```sh
npm i firebase-auth-app
```
2. Create a project using Firebase-Auth-App CLI

```sh
firebase-auth-app
```
3. Install dependencies

```sh
npm install
```

### git
1. Clone the repository

```bash
git clone git@github.com:itskaranchoudhary/firebase-auth-app.git
```

2. Change the working directory

```bash
cd firebase-auth-app
```

3. Install dependencies

```bash
npm install
```

It will create a directory called `firebase-auth-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the required dependencies:

## Firebase Configuration
Copy and paste your configuration from your Firebase project's dashboard into `index.html`

It should look something like this
```
var firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    databaseURL: "https://PROJECT_ID.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID",
  };
  ```
## Activate Sign-In Methods

Enable the Google Sign-Up Method under the `Authentication/Sign-In Method/Sign-In Providers`

<img src="https://firebasestorage.googleapis.com/v0/b/url-creator-2ee08.appspot.com/o/Screenshot%20(128).png?alt=media&token=c004aaad-3a8f-4f17-b725-fb86a58b6787">

## Authorized Domain
Add the domain where the app is to be hosted under the `Authentication/Sign-In Method/Authorized Domains`

<img src="https://firebasestorage.googleapis.com/v0/b/url-creator-2ee08.appspot.com/o/Screenshot%20(129).png?alt=media&token=31bb0f30-8955-47a4-9299-367a70cbd351"><br><br>
🌟 You are all set!

## Author

👤 **Karan Choudhary**

* Github: [@itskaranchoudhary](https://github.com/itskaranchoudhary)

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check [issues page](https://github.com/itskaranchoudhary/firebase-auth-app/issues).

## Show your support

Give a ⭐️ if this project helped you!
<!-- 
Many Thanks to all the `Stargazers`!<br/>
[![Stargazers repo roster for @xKaran/firebase-auth-template](https://reporoster.com/stars/itskaranchoudhary/firebase-auth-app)](https://github.com/itskaranchoudhary/firebase-auth-app/stargazers)
 -->
## 📝 License

Copyright © 2021 [Karan Choudhary](https://github.com/itskaranchoudhary).<br />
This project is [MIT](https://github.com/itskaranchoudhary/firebase-auth-app/blob/master/LICENSE) licensed.
