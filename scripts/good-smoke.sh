#!/bin/bash
dredd --config dredd-api.yml --level=debug
sleep 5s
dredd --config dredd-pages.yml --level=debug