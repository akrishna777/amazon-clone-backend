![amazon-clone](https://i.ibb.co/KG2RTcm/brave-yei-QRZic-Co.png)
![amazon-clone2](https://i.ibb.co/QpnKqqw/Screenshots.jpg)
![amazon-clone2](https://i.ibb.co/v42R52W/brave-Dh-Noy-GTYK9.png)
# Amazon Clone 2022

## Introduction
This application has been created with the help of React and Node JS. The app has the most important functionalities of an E-commerce website. Users can view the products, add products to cart. The app has a complete and secure login, register and authentication features. Complete functionality of updating, removing and adding items have been provided. A payment gateway is also added with the help of Stripe. Users can buy an item with a test card number and the test payment will be processed successfully. Users can theirafter view their orders. The app is a complete Full Stack MERN application. 

Deployed Backend API Link:
https://amazon-clone-ak777.herokuapp.com/

## AMAZON CLONE API Routes:

Base URL : https://amazon-clone-ak777.herokuapp.com/

1. Authentication User Login:  "/users/signin" : This route is used for login in to the App. The user must provide an email ID and password which will be used to login. The email Id and password must first be created during registration.

2. Authentication User Registration: "/users/signup" : This route is used for creating an account within the app. The user must provide: Full name, Mobile Number, Email and password. Validation is not required.

3. Creating Payment Intent for generating order ID: "/payments/create-payment-intent": This route is for generating a order id with which users order information will be stored in the database. The user must send an cart total with the route which will reflect the amount of the whole transaction.

4. Creating an order: "/orders/postOrders": This route is for updating the orders array within a user record in the database. The user must send amount, cart details, payment id and user ID to complete the transaction and save the order in the database.

5. Getting all orders adter purchase: "/orders/getOrders": This route is used for getting all the orders after purchase. Only user id is needed from the user's end.

## Thank You


