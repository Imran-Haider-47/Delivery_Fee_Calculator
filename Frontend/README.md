# Wolt Delivery Fee Calculator App

## Overview

The Wolt Delivery Fee Calculator App is a simple application that allows users to calculate the delivery fee based on various parameters such as cart value, delivery distance, number of items, and delivery time.

## Backend (FastAPI)

### Installation

1. Make sure you have Python installed on your system.

2. Install the required dependencies using the following command:

 
pip install -r requirements.txt
Running the Backend
Run the FastAPI backend using the following command:

bash
Copy code
uvicorn main:app --reload
The API will be available at http://127.0.0.1:8000.

API Endpoints
GET /: Root endpoint to check if the API is running.
POST /calculate-delivery-fee: Calculate the delivery fee based on user input.
Frontend (ReactJS)
Installation
Make sure you have Node.js and npm installed on your system.

Install the required dependencies using the following command:

npm install
Running the Frontend
Run the ReactJS frontend using the following command:

npm start
The app will be available at http://localhost:3000.

Usage
Access the frontend app in your browser at http://localhost:3000.

Enter the required information, such as cart value, delivery distance, number of items, and delivery time.

Click the "Calculate Delivery Fee" button to get the calculated delivery fee.

Technologies Used
Backend
FastAPI: FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.
Frontend
ReactJS: React is a JavaScript library for building user interfaces.