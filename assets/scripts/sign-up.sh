#!/bin/bash

#curl "http://localhost:3000/sign-up" \
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/sign-up"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${CONFIRMPASSWORD}"'"
    }
  }'

echo


# To run, enter the following at console (with new values for EMAIL and PASSWORD.)
# EMAIL=heather@heatheradels.com PASSWORD=bunnymuffin CONFIRMPASSWORD=bunnymuffin scripts/sign-up.sh
