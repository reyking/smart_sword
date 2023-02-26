#!/bin/bash
echo "CREATE USER '$1'@'%' IDENTIFIED BY '$2'; CREATE DATABASE $3; GRANT ALL PRIVILEGES ON $3.* TO '$1'@'%'; FLUSH PRIVILEGES; " | mariadb
echo "usuario $1 creado, y db $3 creada"
npx sequelize db:migrate