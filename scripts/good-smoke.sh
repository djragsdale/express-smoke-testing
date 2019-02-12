#!/bin/bash
dredd --config dredd-api.yml
sleep 5s
dredd --config dredd-pages.yml