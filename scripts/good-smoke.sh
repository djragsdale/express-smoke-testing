#!/bin/bash
dredd --config dredd-api.yml
ps aux | grep "node serve.js"
ps aux | grep "node serve.js" | grep -v grep | awk '{print $2}' | xargs kill -9
dredd --config dredd-pages.yml