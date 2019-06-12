# CareBear App

Repository for the carebear app.

## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/nahakiole/carebear.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Deploying and running

### Run on Android device

`ionic cordova run android --device`

### Create apk for Android

`ionic cordova run android --prod`


## Project Structure

```
.
 ├── resources                    # Build files on the specific platforms (iOS, Android) and app icon + splash
 ├── src                          # This is where the app lives - *the main folder*
 ├── .gitignore                   # Specifies intentionally untracked files to ignore when using Git
 ├── config.xml                   # Ionic config file
 ├── ionic.config.json           # Global configuration for your Ionic app
 ├── package.json                 # Dependencies and build scripts
 ├── README.md                    # Project description
 ├── tsconfig.json                # TypeScript configurations
 └── tslint.json                  # TypeScript linting options
```

### src directory
```
.
   ├── ...
   ├── src                       
   │   ├── app                    # This folder contains global modules and styling
   │   ├── assets                 # This folder contains images and the *data.json*
   │   ├── theme                  # The global SCSS variables to use throughout the app
   │   ├── index.html             # The root index app file - This launches the app
   │   └── global.scss            # Global SCSS file
   └── ...
```

### app directory
```
.
   ├── ...
   ├── app                       
   │   ├── after-check            # Page after the repeated checkin
   │   ├── care-bear              # The reusable carebear component
   │   ├── category               # Category overview app
   │   ├── check                  # Daily check page
   │   ├── component-module       # Component which provides the components that pages have in common
   │   ├── debug                  # Debug menu
   │   ├── detail                 # Detail view of an entry
   │   ├── entry                  # Entry component on overview or category page
   │   ├── favorites              # List of favorites
   │   ├── home                   # Survey when starting app
   │   ├── list                   # Overview of all categories
   │   ├── search                 # Search page
   │   ├── app.component.ts       # Routing and app configuration
   │   └── app.module.ts          # Defining dependencies for main module
   └── ...
```

