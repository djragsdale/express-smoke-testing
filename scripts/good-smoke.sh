#!/bin/bash
dredd --config dredd-api.yml --level=debug
echo "============================================================"
echo "============================================================"
echo "============================================================"
sleep 5s
dredd --config dredd-pages.yml --level=debug