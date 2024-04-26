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

### Issues

#### Issue #1

```
Error: cannot push Spin application

Caused by:
      Server error: url https://ghcr.io/v2/kingdon-ci/flux-docs/build/blobs/upload/0b47a1a2-9ed1-4f26-9bcd-d6595ca73e6f, code: 429, message: {"errors":[{"code":"TOOMANYREQUESTS","message":"retry-after: 22.625684ms, allowed: 2000/minute"}]}
```

<https://github.com/kingdon-ci/flux-docs/actions/runs/8841935876/job/24279803417>

Hmm

## Kubernetes deploy

There are Flux OCI resources that you can use to deploy on Kubernetes as well (WIP)
