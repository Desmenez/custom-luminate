#!/bin/sh
# Check if the environment variables are set
if [ ! -f .env ] && [ -f .env.sample ]; then
  echo "Copy .env.sample to .env"
  cp .env.sample .env
fi