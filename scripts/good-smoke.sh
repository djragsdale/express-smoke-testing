#!/bin/bash
dredd --config dredd-api.yml
echo "Waiting 5 seconds for port to close"
sleep 5s
dredd --config dredd-pages.yml