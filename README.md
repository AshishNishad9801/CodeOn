  

# CodeOn: Real-time Collaborative Web Application

  

![CodeOn](https://user-images.githubusercontent.com/76893116/185206393-101abb1b-8a0f-4aa7-8ea4-c48c3a7ba57e.png)

  

## Technology Stack

- React

- Node.js

- Express.js

- Socket.io

- Firebase

- APIs

  

---

  

CodeOn is a cutting-edge real-time collaborative web application designed to facilitate discussions on coding problems. With advanced audio and video features, it offers an interactive and engaging learning experience.

  

## Key Features

  

### Login/Signup Page

  

![Login/Signup](https://user-images.githubusercontent.com/76893116/185209075-2c6a9117-e54e-4c89-bec0-a21f8dcc23af.png)

  

### Room Activation Page

  

![Room Activation](https://user-images.githubusercontent.com/76893116/185209360-ac461e93-1793-45db-95d1-64e26a7163c0.png)

  

### Editor Interface Page

  

![Editor Interface](https://user-images.githubusercontent.com/76893116/185210384-f972f663-6cf4-4073-8967-917d1f2d59a5.png)

  

### Video Meet

  

![Video Meet 1](https://user-images.githubusercontent.com/76893116/185211014-1ead314e-cf16-48ce-8375-8abfd30e7ba7.png)

  

![Video Meet 2](https://user-images.githubusercontent.com/76893116/185211278-ef9bd7c6-3117-4c04-8ce4-4e6db8281394.png)

  

---

  

## Instructions

  

Follow these steps to run the CodeOn website on your local machine:

  

1. Clone this repository using `git clone`

2. Install the required dependencies using `npm install`

3. Set up the required environment variables by creating a `.env` file. It should follow the below format:

`REACT_APP_BACKEND_URL=`

`REACT_APP_FIREBASE_API_KEY=`

`REACT_APP_FIREBASE_AUTH_DOMAIN=`

`REACT_APP_FIREBASE_PROJECT_ID=`

`REACT_APP_FIREBASE_STORAGE_BUCKET=`

`REACT_APP_FIREBASE_MESSAGING_SENDER_ID=`

`REACT_APP_FIREBASE_APP_ID=`

`REACT_APP_FIREBASE_MEASUREMENT_ID=`
  

5. Run `npm run build`

6. To start the server, run `nodemon server.js` in the project's root directory (By default it runs on localhost:/5000)