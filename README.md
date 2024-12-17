<div align="center">
    <h1> Apparel Arena </h1>
    <h3>  </h3>
</div>

# Table of Contents

1. [About Apparel Arena](#about-apparel-arena)
    - [Built With](#built-with)
2. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
        - [Frontend](#frontend)
        - [Backend](#backend)
3. [Contributors](#contributors)

## About Apparel Arena

Apparel Arena, a e-commerce website based on clothing where multiple sellers (multi-vendor) can sell their products or services like [Daraz](https://www.daraz.com.bd/).
This project proposes a online clothing platform where customers can choose and submit their own personal customized designs and also can customize the clothing according their desire.

### Built With

-   Node.js (Express.js Framework)
-   MongoDB (NoSQL DB)
-   Mongoose (ODM (Object Document Mapper) for MongoDB)
-   React
-   Tailwind CSS

## Getting Started

### Prerequisites

Make sure you have node and MongoDB installed in your device.

**`NodeJs`**: Install Nodejs from [here](https://nodejs.org/en/download/package-manager)

**`MongoDB`**: Install MongoDB from [here](https://www.mongodb.com/try/download/community). If you want to see the data downlod the [MongoCompass](https://www.mongodb.com/docs/compass/current/install/) as well.

### Installation

-   Clone the Repository

    ```bash
    git clone https://github.com/moursalinme/Hotel-Management-API.git
    cd Apparel-Arena
    ```

#### Backend

1.  Navigate to the backend root foler.

    ```bash
    cd 'Apparel-Arena (Backend)'
    ```

2.  Create a new `.env` file in the frontend root directory. Add the following environment variables to the file:

    ```bash
    port=
    dburl=
    NODE_ENV=
    JWT_SECRET_KEY=
    JWT_EXP_TIME=
    PASS_SALT_LEN=
    COOKIE_EXP_TIME=
    EMAIL_USERNAME=
    EMAIL_PASSWORD=
    EMAIL_HOST=
    EMAIL_PORT=
    ```

3.  Replace the values for the environment variables with your project-specific configuration. It should look like this:

    ```bash
    port= xxxx
    dburl= YourMongoDBURL
    NODE_ENV=development
    JWT_SECRET_KEY=Your_SECRET_KEY
    JWT_EXP_TIME=1d
    PASS_SALT_LEN=10
    COOKIE_EXP_TIME=10
    EMAIL_HOST=Your_EmailHost
    EMAIL_PORT=Your_EmailPort
    EMAIL_USERNAME=Your_EmailUSERNAME
    EMAIL_PASSWORD=Your_EmailPassword
    ```

4.  **Install Dependencies:**

    ```bash
    npm install
    ```

5.  **Run the Application:**

    ```bash
    npm run start
    ```

#### Frontend

1.  Navigate to the frontend root foler.

    ```bash
    cd 'Apparel-Arena (Frontend)'
    ```

2.  Create a new `.env` file in the frontend root directory. Add the following environment variables to the file:

    ```bash
    VITE_apiKey =
    VITE_authDomain =
    VITE_projectId =
    VITE_storageBucket =
    VITE_messagingSenderId =
    VITE_appId =
    VITE_API_URL =
    VITE_IMG_UPLOAD_PRESET =
    VITE_IMG_UPLOAD_URL =
    VITE_STRIPE_PUBLICK_KEY =
    ```

3.  Replace the values for the environment variables with your project-specific configuration. It should look like this:

    ```bash
    VITE_apiKey = Your_APIKEY
    VITE_authDomain = Your_AuthDomain.firebaseapp.com
    VITE_projectId = Your_ProjectID
    VITE_storageBucket = Your_StorageBucket
    VITE_messagingSenderId = Your_MessagingSenderId
    VITE_appId = x:xxxxxxxx:xx:xxxxxxxxxx
    VITE_API_URL = http://localhost:Your_Port
    VITE_IMG_UPLOAD_PRESET = Your_ImgUploadPreset
    VITE_IMG_UPLOAD_URL = Your_ImageUploadURL
    VITE_STRIPE_PUBLICK_KEY = YourStripePublicKey
    ```

4.  **Install Dependencies:**

    ```bash
    npm install
    ```

5.  **Run the Application:**

    ```bash
    npm run start
    ```

## Contributors

-   **Md. Sefat Enam (Frontend)**

-   **Moursalin Emon (Backend)**

## Supervisor

-   Md Sumon Reza

    **Lecturer**
    Department of Computer Science and Engineering, <br/>
    Faridpur Engineering College <br/>
    Faridpur 7800, Dhaka, Bangladesh

<p align="right">(<a href="#top">back to top</a>)</p>
