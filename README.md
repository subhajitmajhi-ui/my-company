# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Designed 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

This readme document provides an overview of the structure and URLs of a website with a home page and a product page. The website is organized as follows:

## Home Page: The home page is accessible at the root URL, which is /.

## Product Page: The product page is accessible at /product/1.

## Home Page (URL: /)
The home page serves as the main landing page for the website. It typically contains all product, links to single product pages. Visitors will see this page when they enter the website's base URL.

In Home page i fetch all product name and image from [https://dummyjson.com/products?limit=10&skip=0](https://dummyjson.com/products?limit=10&skip=0) this API end point by REDUX-SAGA. When you click in "View Product", you go to Single Product Page.

## Single Product Page (URL: /product/1)
The product page is a specific page dedicated to showcasing a particular product or service. In this example, it's represented as /product/1. You can replace 1 with any product identifier or slug to view different product pages if your website has multiple products.

In Home page i fetch all product name and image from [https://dummyjson.com/products/1](https://dummyjson.com/products/1) this API end point by AXIOS. Left and right panel sticky in here.

## Use NPM packages :
Tailwind CSS
Material UI
React Redux
React-Saga
React Router DOM
React Loader Spinner
Axios