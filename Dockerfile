# # FROM --platform=${BUILDPLATFORM}
# FROM --platform=linux/arm64 golang:1.21.3-bullseye AS build-go
# WORKDIR /opt/build
# COPY spin.toml .
# RUN curl -LO https://github.com/fermyon/spin-fileserver/releases/download/v0.2.1/spin_static_fs.wasm
# RUN mkdir website
# COPY website/public/ website/public/
#
# FROM scratch
# COPY --from=build-go /opt/build/spin_static_fs.wasm .
# COPY --from=build-go /opt/build/spin.toml .
# COPY --from=build-go /opt/build/website .
# ENTRYPOINT ["/spin.toml"]
