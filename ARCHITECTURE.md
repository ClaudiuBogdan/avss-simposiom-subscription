# System design

The application is divided into two parts: the frontend and the backend.

## Frontend

## Backend

1. Store user info: name, email, etc

2. Process user payment
   1. Create customer in Stipe
   2. Create checkout session in Stripe using customer id
   3. Send checkout session id to frontend
3. Send email to user
