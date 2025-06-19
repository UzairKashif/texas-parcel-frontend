Texas Parcels - Application Documentation
1. Introduction
Welcome to the official documentation for the Texas Parcels web application. This document provides a comprehensive overview of the project's architecture, components, and core functionalities. The application is a modern, single-page web app designed to showcase and sell land parcels, featuring a public-facing homepage and a secure user portal for viewing detailed property listings.

2. Technology Stack
The application is built with a modern, robust technology stack:

Frontend Framework: React (v18) with Create React App

Language: TypeScript

Styling: Tailwind CSS

Backend & Database: Firebase (Authentication and Firestore)

Mapping: Mapbox GL JS with react-map-gl

Image Carousel: Swiper.js

3. Project Structure
The project follows a standard React application structure, organizing files by their feature and purpose.

/src
├── components/         # Reusable UI components
│   ├── AboutSection.tsx
│   ├── AIFeatures.tsx
│   ├── AuthMap.tsx
│   ├── ContactSection.tsx
│   ├── FeaturedListings.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── PortalPropertyCard.tsx
│   ├── PropertyCard.tsx
│   ├── PropertyCarousel.tsx
│   └── Services.tsx
│
├── contexts/           # Shared application state (React Contexts)
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
│
├── pages/              # Top-level page components
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── PortalPage.tsx
│   ├── PropertyDetailsPage.tsx
│   └── SignUpPage.tsx
│
├── utils/              # Utility functions and static data
│   └── data.ts
│
├── App.tsx             # Main application component and routing logic
├── firebase.ts         # Firebase configuration and initialization
├── index.css           # Global CSS styles and Tailwind imports
├── index.tsx           # Application entry point
└── types.ts            # TypeScript type definitions

4. Core Concepts & Architecture
a. State-Based Routing
The application uses a simple but effective state-based routing system managed within App.tsx. Instead of a traditional URL-based router, the page state variable determines which component to render.

The handleNavigate function updates this state, causing the application to "navigate" to a new page.

The renderPage function in App.tsx contains the switch statement that returns the appropriate page component based on the current page state.

This approach is lightweight and sufficient for the current scope of the application.

b. Authentication Flow
User authentication is managed by Firebase Authentication and is integrated into the application through the AuthContext.

AuthContext.tsx: This context provider wraps the entire application. It exposes the currentUser object, loading state, and functions for signup, login, and logout. It listens for authentication state changes from Firebase and updates the currentUser state accordingly.

Protected Routes: The main App.tsx component checks the value of currentUser.

If a user is logged in (currentUser is not null), it renders the authenticated routes (PortalPage, PropertyDetailsPage).

If no user is logged in, it renders the public routes (HomePage, LoginPage, SignUpPage).

This ensures that the user portal is only accessible to authenticated users.

5. Component Breakdown
a. Pages (/src/pages)
HomePage.tsx: The public landing page. It assembles various informational sections like Hero, FeaturedListings, AboutSection, etc.

LoginPage.tsx & SignUpPage.tsx: These pages contain the forms for user authentication. They use the login and signup functions from AuthContext to interact with Firebase.

PortalPage.tsx: The main dashboard for authenticated users. It fetches the list of all properties from Firestore and displays them using the PortalPropertyCard component.

PropertyDetailsPage.tsx: This page displays the full details of a single property. It fetches the specific property's data from Firestore based on the ID passed to it.

b. Reusable Components (/src/components)
Header.tsx & Footer.tsx: The main navigation and footer for the site. They include links for navigation and reflect the user's authentication status.

AuthMap.tsx: A visually engaging Mapbox component displayed on the login and sign-up pages. It features a "fly-to" animation for a modern user experience.

PortalPropertyCard.tsx: A card component used in the PortalPage to display a summary of a property, including an image carousel.

PropertyCarousel.tsx: A reusable image slider built with Swiper.js, used to display multiple images for a property.

Informational Sections: Components like AboutSection, AIFeatures, ContactSection, and Testimonials are used on the HomePage to provide content about the business.

6. Firebase Integration
a. Configuration (src/firebase.ts)
This file is responsible for initializing the Firebase app. It exports the initialized auth and db (Firestore) instances, which are then used throughout the application.

IMPORTANT: The placeholder firebaseConfig object in this file must be replaced with your actual Firebase project credentials for the application to work.

b. Authentication
Sign-up/Login: SignUpPage.tsx and LoginPage.tsx call the signup and login functions from AuthContext, which in turn use Firebase's createUserWithEmailAndPassword and signInWithEmailAndPassword methods.

Session Management: onAuthStateChanged in AuthContext automatically monitors the user's session, ensuring the UI updates in real-time when a user logs in or out.

c. Firestore Database
Data Structure: The application expects a Firestore collection named properties. Each document in this collection represents a single land parcel and should conform to the Property interface defined in src/types.ts.

Data Fetching:

PortalPage.tsx fetches all documents from the properties collection to display the listings.

PropertyDetailsPage.tsx fetches a single document from the properties collection by its unique ID.

7. Setup and Running the Project
To run this project locally, follow these steps:

Firebase Project: Create a Firebase project and enable Authentication (Email/Password) and Firestore (in Test Mode).

Add Test Data: Create a properties collection in Firestore and add at least one document with fields matching the Property type.

Update Config: Copy your Firebase project's configuration object into src/firebase.ts.

Install Dependencies: Open a terminal in the project root and run npm install.

Start the App: Run npm start to launch the development server.