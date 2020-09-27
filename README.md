# Star Wars Universe
An application allow user to view the information of peoples under selected species, the weight and mass of people are plotted on **Scatter Graph**.

***

Table Of Contents 
=================

  * [About The Project](#about-the-project)
    * [File Structure](#file-structure)
  * [Limitation](#limitation)
  * [Getting Started](#getting-started)
    * [Running in Development](#running-in-development)
  * [Environment](#environment)


***

About The Project
=================
The project setup with **Presentational and Container Component Pattern** where presentational component
is responsible for user interface and reusability and container component are concerned on side effects.

The file structure are constructed and arranged in extensible and maintainable manners to establish highly scalable folder structure.

We will utilize the ```useContext``` and ```useReducer``` hooks to manage states like Redux for better state 
communications in entire application. 

File structure
-----------------

```
src/
├── api/                 => store collection of APIs
|   ├── species.ts       => species API endpoints
├── states/              => container components and global states
|   ├── species/         => 
|       ├── hooks/              => species' related hooks for presentational component
|           ├── useSpecies.ts           => interact with data stores side-effects
|           ├── useSpeciesPeople.ts     => obtain selected items from radio tables
|       ├── actions.ts          => action dispatch to stores.
|       ├── reducer.ts          => describe how application response to actions
|       ├── types.ts            => data types and action types use by dataStore folder.
|       ├── utils.ts            => utility and helper functions
|   ├── initialState.ts  => groups initialState of all reducers for combineReducers method
|   ├── rootReducer.ts   => combine all reducers for store 
├── store/               => global store of entire application
|   ├── index.tsx           => StoreProvider required to be connected with Application root
├── utils/               => utilities for entire project 
├── views/               => presentational component 
|   ├── components/             => reusable component without side-effects
|   ├── containers/             => container with side-effects
|   ├── presentations/          => number of pages available in the project
|   ├── routes/                 => routes mapping to presentation component
|   ├── app.tsx                 => root component
└── index.tsx            => entry point of React application

```

*** 

Limitation
==========
The limitations of this application are listed below for better improvements on upcoming development:

1. User experience of Select Species journey can be further improved, replace `Select` with `AutoComplete` so that user able to search across the list of species.
2. Styling for entire application is not attractive, no instruction for user to perform any moves once arrive the page.

Getting Started
===============

Running in Development
----------------------
1. Start the development environment with `npm`.
```bash
$ npm run start
```


Environment
===========
1. NodeJS v12.18.3 
2. NPM v6.14.6








