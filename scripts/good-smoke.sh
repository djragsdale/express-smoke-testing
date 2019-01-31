#!/bin/bash
dredd --config dredd-api.yml
ps aux | grep "node serve.js"
ps aux | grep "node serve.js" | grep -v grep | awk '{print $2}' | xargs kill -9
echo "Waiting 5 seconds for port to close"
sleep 5s
dredd --config dredd-pages.yml