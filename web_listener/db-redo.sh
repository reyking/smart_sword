#!/bin/bash
USER="hans"
PASS="hans"
DB="SwordData"
sh db-remove.sh $USER $DB
sh db-init.sh $USER $PASS $DB 