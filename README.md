# Flux Docs - Re-Hosted

These docs are published as: [(not public url)](https://docs-fluxcd-website-6lrhgsuf.fermyon.app/)

You can easily repeat the same trick using Fermyon Cloud!

Later on, we may add a CI, but for now the site has been built and published by hand.

## How to maintain this Repository

There are three `make` targets:

### `make clone`

Git clone from `git@github.com:fluxcd/website`

Check out your branch to preview

### `make build`

Runs `cd website && make production-build` - first, make sure you set up venv
in your path and ran pip install.

## `spin deploy`

(You will need to update `spin.toml` to point at your own deployment)
