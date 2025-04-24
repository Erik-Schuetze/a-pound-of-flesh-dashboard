FROM caddy:alpine

ARG CADDYFILE=Caddyfile.prod
COPY ./${CADDYFILE} /etc/caddy/Caddyfile