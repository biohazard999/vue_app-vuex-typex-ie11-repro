# vue_app-vuex-typex-ie11-repro

This repro try's to isolate the problem ([After minified the script. Script can't be run on IE11 #13](https://github.com/istrib/vuex-typescript/issues/13)) with Vue.CLI3, ASP.NET Core 2.2 and vuex-typex.


## Project setup
```
npm install
dotnet restore
```

### Compiles and hot-reloads for development
```
dotnet run
```
Or just use VSCode for convenience.

### Compiles and minifies for production
```
npm run build:prod
dotnet run /p:Configuration=Release
```
Or just use VSCode for convenience.

### Repro

Just navigate to the server in dev or production mode with IE11, console -> BOOM