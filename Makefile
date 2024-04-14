.PHONY: build clone # all sync

# all: sync

# sync:
# 	rsync -av --delete weave-gitops/website/build/ assets

build:
	cd website && make production-build URL=https://fluxcd.io/

clone:
	git clone git@github.com:fluxcd/website
