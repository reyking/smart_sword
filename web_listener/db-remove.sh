#!/bin/bash
echo "DROP USER IF EXISTS $1; DROP DATABASE IF EXISTS $2" | mariadb
echo "db $2 removida, ususraio $1 removido"