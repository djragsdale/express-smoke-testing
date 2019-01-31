#!/bin/bash
dredd --config dredd-api.yml
ps aux
echo "Waiting 5 seconds for port to close"
sleep 5s
dredd --config dredd-pages.yml