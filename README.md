# Front-end POC

An investigation into adopting modern (as of 2020 anyway) front-end component
architectures non-destructively and incrementally.

## Running The Project

1. `$ bundle install`
2. `$ yarn install`
3. `$ yarn run build:dev` - builds JS and CSS.
4. `$ bundle exec rails s -p <port of your choosing>`

## Project Overview

This project does the following:
- Adopts JS modules as a core architecture.
- Leverages Yarn for JS and CSS compilation.
- Provides auditing tools in the form of linters and type checkers.
- Compiles documentation for JS via JSDoc