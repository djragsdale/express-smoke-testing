#!/bin/bash
dredd --config dredd-api.yml --level=debug
sleep 60s
dredd --config dredd-pages.yml --level=debug