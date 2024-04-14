.PHONY: build clone # all sync

# all: sync

# sync:
# 	rsync -av --delete weave-gitops/website/build/ assets

build:
	cd website && make production-build URL=https://docs-fluxcd-website-6lrhgsuf.fermyon.app/

clone:
	git clone git@github.com:fluxcd/website
