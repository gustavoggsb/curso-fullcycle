FROM golang:1.16.0-alpine AS builder

COPY main.go /go/src/app/main.go
RUN go build -ldflags="-w -s" -o /go/bin/desafio-go  /go/src/app/main.go


FROM scratch
COPY --from=builder /go/bin/desafio-go /usr/local/bin/desafio-go
CMD [ "/usr/local/bin/desafio-go" ]
