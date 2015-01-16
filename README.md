# Meteor Typescript Seed project

This is a seed project which you can use to start your own project with
Typescript and Meteor.

Though it will work with most versions of Typescript and Meteor, I have tested
it with satisfactory results with:

 1. Meteor 1.0.2.1 & 1.0
 2. Typescript 1.4.1.0 & 1.3

With Typescript version `<1.1`, the delays in compilation become intolerable
for a large project.

## Usage

Fork this repository and change the name of the project in `bower.json`.

### Setup

You will need this only once.

    # Fetches and installs the meteor-typescript-libs and DefinitelyTyped
    bower install

The name of the folder for the definitions is set to `.bower` instead of the
default `bower_components` because Meteor ignores folders which start with
a period while building your application.

An alternate way to manage `DefinitelyTyped` dependencies is to use [tsd](http://www.tsdpm.com/).

### Development

Run the following commands in three _different_ terminals:

  1. `tsc --watch --out client/main.js client/main.ts`
  2. `tsc --watch --out server/main.js server/main.ts`
  3. `meteor run`

## Coding conventions

Most conventions are described on the [meteor-typescript-libs](https://github.com/meteor-typescript/meteor-typescript-libs#typescriptmeteor-coding-style).

However, the speed of compilation has become so far that it is not worth the
effort to write definition `.d.ts` files manually anymore.

As long as you reference other files from `main.ts` using the 
`<reference path=".../my-file.ts" />` syntax, Typescript will automatically add
them to the watch-list and continue to watch them.

## Acknowledgements

This project relies on:

  1. [meteor-typescript-libs](https://github.com/meteor-typescript/meteor-typescript-libs)
  2. [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped)

