# Paradicms Collections Management System

This [monorepo](https://en.wikipedia.org/wiki/Monorepo) contains mot of the code and data for the Paradicms Collections Management System.

## Getting started

For documentation on how to use Paradicms, see the [Paradicms website](https://paradicms.org/).

For developer documentation, read on.

## Repository organization

This repository is organized into three main sections:

* `app/`: [Paradicms app](https://paradicms.org/docs/introduction/apps) implementations
* `lib/py/`: Python libraries, which are primarily used by [Paradicms GitHub Actions](https://paradicms.org/docs/reference/github-actions)
  * `lib/py/etl`: code for transforming data from various sources (Airtable, Omeka, spreadsheets, et al.) into the [Paradicms data model](https://paradicms.org/docs/introduction/data-model/)
  * `lib/py/ssg`: code for statically generating websites (apps) from data in the Paradicms data model
* `lib/ts`: TypeScript libraries used by app implementations

### Scripts

There are standardized scripts for building and testing different parts of the code, following the [Scripts to Rule Them All](https://github.com/github/scripts-to-rule-them-all) pattern. These scripts reside in (sub)directories named `script/`.


## First-time setup


### Python libraries

#### Dependencies

* [Python 3.9+](https://www.python.org/)
* [Poetry](https://python-poetry.org/)


#### Setup

```
script/py/bootstrap
```


### TypeScript libraries and apps

#### Dependencies

* [Node.js 16+](https://nodejs.org/en)
* [Yarn 1.x](https://classic.yarnpkg.com/lang/en/)

#### Setup

```
script/ts/bootstrap
```


## Building

### TypeScript libraries

```
yarn build-lib
```

### TypeScript libraries and apps

```
export DATA_FILE_PATH="$PWD/data/synthetic/synthetic_data.trig"
yarn build
```

### A single TypeScript app

```
export DATA_FILE_PATH="$PWD/data/synthetic/synthetic_data.trig"
cd app/work-search
yarn build
```

### A single TypeScript library

```
cd lib/ts/models
yarn build
```


## Running tests

#### Python libraries

```
script/py/test
```

#### TypeScript libraries and apps

```
script/ts/test
```


## Continuous Integration and Deployment

This repository uses [GitHub Actions](https://github.com/features/actions) for Continuous Integration and Deployment (CI/CD). See the `.github/workflows` directory for GitHub Actions workflow specifications.

Merges to the default branch build a single Docker image from the `Dockerfile` in the root of the repository and push it to the GitHub Container registry. This Docker image is the basis for the [Paradicms GitHub Actions](https://paradicms.org/docs/reference/github-actions). It contains:

* Installed versions of the Python libraries
* Built versions of the Paradicms apps


## Coding conventions

### Python

The Python libraries use type annotations throughout, and [mypy](https://www.mypy-lang.org/) for type checking.

Python code is formatted with the [Black code formatter](https://black.readthedocs.io/en/stable/).

[Flake8](https://flake8.pycqa.org/en/latest/) is used for additional linting.

### TypeScript

TypeScript code is formatted with [Prettier](https://prettier.io/).
