#!/bin/sh
set -xe
: "${URLBACK}"

sed -i "s|URLBACK|$URLBACK|g" /opt/nginx/html/main*.js

exec "$@"