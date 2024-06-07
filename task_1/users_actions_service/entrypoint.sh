#!/bin/bash

if [[ "$MODE" = DEV ]]
then
    npm run dev
else
    npm start
fi