#!/bin/bash
dredd --config dredd-api.yml
dredd --config dredd-pages.yml --level=debug