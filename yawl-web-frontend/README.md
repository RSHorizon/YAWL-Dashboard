# YAWL Web Frontend

## Start Requirements

YAWL Web Admin is based on the Angular framework and Typescript and some other libraries.
The most libraries are downloaded automatically by the package manager npm. But for this to work, you have to install nodejs and angular-cli.

1. Download the current version of [nodejs](https://nodejs.org/en/).
2. Unzip the downloaded archive file and move the extracted files to a path of your choice. E.g. `/usr/local/nodejs/`.
3. Add the bin-directory of nodejs (e.g. `/usr/local/nodejs/bin`) to your PATH environment variable, so that you can use the tools of nodejs in a shell directly without specifying the absolute path.
4. Install angular-cli with `npm -g @angular/cli`. Now you can use the tool `ng`.
5. Install yarn with `npm install -g yarn`.

## Deployment for production

1. Goto root path of YAWL-Dashboard-Frontend. (E.g. `cd ~/yawl-web-frontend`)
2. Install all dependencies automatically under node_modules with `yarn install`.
3. Start build process with `ng build --prod` and wait.
4. All result files are in the directory `dist`.
5. Copy all files from dist to a webspace.
6. Configure the webspace, that it delivers the index.html file for GET-Path `/` and all 404 errors. This is due to the routing mechanism in YAWL Web Admin. [More about this routing mechanism called HTML5 History PushState](https://angular.io/guide/router#appendix-locationstrategy-and-browser-url-styles).
7. Customize your configuration by editing `config.json`.


## Development version

1. Goto root path of YAWL Web Admin. (E.g. `cd ~/yawl-web-frontend`)
2. Install all dependencies automatically under node_modules with `yarn install`.
3. Start serve process with `ng serve` and wait.

`ng serve` builds the application and starts a web server. It runs in the background and watches for changes. If any change is made on the source files, it builds the application again and reloads the browser page.

The dev server can be accessed by visiting [http://localhost:4200](http://localhost:4200).



<sub><sub><sup>Documentation by Philipp R. Thomas, edited by Robin Steinwarz</sup></sub></sub>
