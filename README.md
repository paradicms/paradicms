# Paradicms Collections Management System

This [monorepo](https://en.wikipedia.org/wiki/Monorepo) contains mot of the code and data for the Paradicms Collections Management System.

## Getting started

For documentation on how to use Paradicms, see the [Paradicms website](https://paradicms.org/).

For developer documentation, read on.

## Repository organization

### Code

The code in this repository is organized into three areas:

* `app/`: [Paradicms app](https://paradicms.org/docs/introduction/apps) implementations
* `lib/py/`: Python libraries, which are primarily used by [Paradicms GitHub Actions](https://paradicms.org/docs/reference/github-actions)
  * `lib/py/etl`: code for transforming data from various sources (Airtable, Omeka, spreadsheets, et al.) into the [Paradicms data model](https://paradicms.org/docs/introduction/data-model/)
  * `lib/py/ssg`: code for statically generating websites (apps) from data adhering to the Paradicms data model
* `lib/ts`: TypeScript libraries used by app implementations

### Data

The `data/` directory contains synthetic data used in development and test data used in unit tests. It also contains generated [Costume Core](http://www.ardenkirkland.com/costumecore/) ontologies.

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
export DATA_FILE_PATHS="$PWD/data/synthetic/synthetic_data.trig"
yarn build
```

### A single TypeScript app

```
export DATA_FILE_PATHS="$PWD/data/synthetic/synthetic_data.trig"
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


## Continuous Integration

This repository uses [GitHub Actions](https://github.com/features/actions) for Continuous Integration and Deployment (CI/CD). See the `.github/workflows` directory for GitHub Actions workflow specifications.


## Continuous Deployment

Merges to the default branch trigger a GitHub Actions workflow that:

* builds a single Docker image from the `Dockerfile` in the root of the repository and
* pushes the image to the GitHub Container registry for the organization

[This Docker image](https://github.com/paradicms/paradicms/pkgs/container/paradicms) is the working environment for the [Paradicms GitHub Actions](https://paradicms.org/docs/reference/github-actions). It contains:
* Python libraries and their dependencies installed in the image's system Python interpreter
* TypeScript libraries and their dependencies
* Ready-to-build Paradicms apps


## Coding conventions and tools

### Python

The Python libraries use type annotations throughout, and [mypy](https://www.mypy-lang.org/) for type checking.

Python code is formatted with the [Black code formatter](https://black.readthedocs.io/en/stable/).

[Flake8](https://flake8.pycqa.org/en/latest/) is used for additional linting.

### TypeScript

TypeScript code is formatted with [Prettier](https://prettier.io/).


## License

[GNU General Public License version 3 (GPLv3)](https://www.gnu.org/licenses/gpl-3.0.en.html)