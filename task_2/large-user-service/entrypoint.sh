#!/bin/bash

if [[ "$MODE" = DEV ]]
then
    npm run start:dev
else
    npm run start
fi