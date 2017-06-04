# SB Programming Exercise

[![CircleCI](https://circleci.com/gh/iammac360/sb-programming-ex.svg?style=svg)](https://circleci.com/gh/iammac360/sb-programming-ex)

## System Requirements:

* Git

* Node js v6.9.x or Greater

* [Yarn](https://yarnpkg.com/en/docs/install) (Optional, but I still recommend installing it 😀)

## Requirements Installation

### Setting up Nodejs

Install Node Version Manager first to manage multiple versions of node js.

To install or update nvm, you can use the install script using cURL:

```
# If you are using bash, please use this:
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

# And if you are using zsh, please use this:
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | zsh
```

If you already have nvm, then we can install nodejs.

```
nvm install v7.10.0
nvm use v7.10.0
nvm alias default v7.10.0
```

To verify if node is installed:

```
node --version
# it should return with something like this
# v7.10.0
```

### Installing Yarn

You can install Yarn through the Homebrew package manager. This will also install Node.js if it is not already installed.

```
# If you are using bash shell
curl -o- -L https://yarnpkg.com/install.sh | bash

# Or if you are using zsh
curl -o- -L https://yarnpkg.com/install.sh | zsh
```

Test that yarn is installed by running:

```
yarn --version
```

## Initial Project Setup

### Clone the repository

To clone the repository, you can follow this:

```
git clone git@github.com:iammac360/sb-programming-ex.git
```

### Bootstrap and setup the appliation.

If you already cloned the repository, please follow the follow steps below:

```
// If you have installed yarn you can install dependencies by running this:
yarn install

// Otherwise, you can still use the handy npm install
npm install
```

### Running the cli tool

```
// Signup
node shopback-calculator.js signup www.shopback.sg

// Spend
node shopback-calculator.js spend 10 15 20

// Redeem
node shopback-calculator.js redeem www.shopback.sg
```

### Running the tests


#### Running the full test suite
```
npm test
```
