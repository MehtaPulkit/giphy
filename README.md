# Montu GIPHY GIF Viewer and Search App

This project is a take-home challenge designed to evaluate frontend developers interested in working at Montu. The goal of this challenge is to build a React application that allows users to view and search GIFs using the Giphy API.

## Project Overview

The application provides the following features:

1. **Trending GIFs:** Displays the first page of trending GIFs fetched from Giphy's Trending Endpoint when the app is first loaded.
2. **Search GIFs:** Allows users to search for specific GIFs using Giphy's Search Endpoint.
3. **Pagination:** Users can browse through multiple pages of GIFs, both for trending GIFs and search results.
4. **Skeleton Loaders:** While GIFs are being fetched, skeleton loaders are displayed for a smooth user experience.
5. **Save and Unsave GIFs:** Users can save GIFs for later viewing, and the saved GIFs persist even after refreshing or closing the app.
6. **Like Button Animation:** An animation is added to the "save" button when users save or unsave a GIF.

## Tech Stack

The project is built using the following technologies:

- **React** with **TypeScript**
- **Vite** for fast project setup and development
- **Tailwind CSS** for styling
- **Axios** for making API requests to Giphy
- **React Query** for efficient data fetching and caching
- **Context API** and `useReducer` for state management (instead of Redux)
- **LocalStorage** for persisting saved GIFs across sessions

## Setup and Installation
<<<<<<< HEAD

### Prerequisites

- Node.js and npm installed on your machine
- A Giphy API key from [Giphy Developer Dashboard](https://developers.giphy.com/)

### Steps

1. **Clone the Repository**

   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>

2. **Install Dependencies**

   ```bash
   npm install
   
3. **Set up Giphy API Key**
-Create a .env file in the root of the project and add your Giphy API key
   ```bash
   VITE_GIPHY_API_KEY=your_api_key

4. **Run the application**
-To start the development server, run:
   ```bash
   npm run dev


## Key Features

1. **Trending GIFs:** 
   - The application displays trending GIFs from Giphy's Trending Endpoint on the initial load.

2. **Search Functionality:** 
   - Users can search for GIFs using the search bar, fetching results from Giphy's Search Endpoint.

3. **Pagination:** 
   - Both the trending GIFs and search results support pagination, allowing users to navigate between multiple pages of GIFs.

4. **Skeleton Loaders:** 
   - While GIFs are being fetched, skeleton loaders are displayed to provide a smooth and responsive user experience.

5. **Save & Unsave GIFs:** 
   - Users can save and unsave GIFs. Saved GIFs persist even after refreshing or closing the app, utilizing LocalStorage for persistence.


## Noteworthy Choices

1. **React Query:** 
   - Used for efficient data fetching, caching, and background data synchronization. This helped improve the performance and responsiveness of the application by reducing redundant API calls and managing caching automatically.

2. **Context API with useReducer:** 
   - I chose the Context API with `useReducer` over Redux to manage the state of saved GIFs, which aligns with Montu’s preference for managing complex state without an external library like Redux.

3. **Tailwind CSS:** 
   - Leveraged for rapid styling and responsive design. Tailwind CSS provided utility classes that simplified styling and made the UI development faster and more manageable.

4. **Vite for Project Setup:** 
   - I selected Vite for its fast build times and simplicity in setting up a React project. It significantly sped up the development workflow with a faster hot-reload feature and quicker builds.

5. **LocalStorage for Persistence:** 
   - For the saved GIFs feature, I used LocalStorage to ensure persistence across sessions. This choice allowed for a simple and lightweight method to maintain saved state without a backend.


## Challenges and Roadblocks

1. **Giphy API Image resolutions:** 
   - The Giphy API has numerous image resolutions, which required careful choice for page loading. I implemented using Webp images, which are smallers in size and no compromise to the resolution.

2. **Pagination Management:** 
   - Designing the pagination system to work seamlessly with both the trending and search endpoints involved careful state management. Ensuring that page transitions and data fetching were optimized without causing unnecessary re-renders was challenging.

3. **TypeScript Configuration:** 
   - Ensuring strict type safety throughout the app, particularly for API responses, required careful handling of Giphy's API data. Defining accurate types for complex nested data structures took extra effort but enhanced code reliability.


## Future Improvements

1. **Mobile Responsiveness:** 
   - While the project focuses on both desktop or mobile, future versions could further enchance mobile experience. This would improve the overall UX across various devices.

2. **Enhanced Error Handling:** 
   - The application could provide more detailed and user-friendly error messages in cases of failed API requests, network issues, or rate-limit errors. Currently, the errors are managed but could be presented better to users.

3. **Lazy Loading of GIFs:** 
   - Implementing lazy loading for GIFs would improve the app’s performance, especially when scrolling through multiple pages. This would optimize resource usage and enhance the user experience by loading images on-demand.

4. **Testing Coverage:** 
   - Adding more unit and integration tests, especially for the API calls, state management logic, and UI components, would ensure greater reliability and maintainability of the app in the long term.
=======

### Prerequisites

- Node.js and npm installed on your machine
- A Giphy API key from [Giphy Developer Dashboard](https://developers.giphy.com/)

### Steps

1. **Clone the Repository**

   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>

2. **Install Dependencies**

   ```bash
   npm install
   
3. **Set up Giphy API Key**
-Create a .env file in the root of the project and add your Giphy API key
   ```bash
   VITE_GIPHY_API_KEY=your_api_key

4. **Run the application**
-To start the development server, run:
   ```bash
   npm run dev


## Key Features

1. **Trending GIFs:** 
   - The application displays trending GIFs from Giphy's Trending Endpoint on the initial load.

2. **Search Functionality:** 
   - Users can search for GIFs using the search bar, fetching results from Giphy's Search Endpoint.

3. **Pagination:** 
   - Both the trending GIFs and search results support pagination, allowing users to navigate between multiple pages of GIFs.

4. **Skeleton Loaders:** 
   - While GIFs are being fetched, skeleton loaders are displayed to provide a smooth and responsive user experience.

5. **Save & Unsave GIFs:** 
   - Users can save and unsave GIFs. Saved GIFs persist even after refreshing or closing the app, utilizing LocalStorage for persistence.


## Noteworthy Choices

1. **React Query:** 
   - Used for efficient data fetching, caching, and background data synchronization. This helped improve the performance and responsiveness of the application by reducing redundant API calls and managing caching automatically.

2. **Context API with useReducer:** 
   - I chose the Context API with `useReducer` over Redux to manage the state of saved GIFs, which aligns with Montu’s preference for managing complex state without an external library like Redux.

3. **Tailwind CSS:** 
   - Leveraged for rapid styling and responsive design. Tailwind CSS provided utility classes that simplified styling and made the UI development faster and more manageable.

4. **Vite for Project Setup:** 
   - I selected Vite for its fast build times and simplicity in setting up a React project. It significantly sped up the development workflow with a faster hot-reload feature and quicker builds.

5. **LocalStorage for Persistence:** 
   - For the saved GIFs feature, I used LocalStorage to ensure persistence across sessions. This choice allowed for a simple and lightweight method to maintain saved state without a backend.


## Challenges and Roadblocks

1. **Giphy API Image resolutions:** 
   - The Giphy API has numerous image resolutions, which required careful choice for page loading. I implemented using Webp images, which are smallers in size and no compromise to the resolution.

2. **Pagination Management:** 
   - Designing the pagination system to work seamlessly with both the trending and search endpoints involved careful state management. Ensuring that page transitions and data fetching were optimized without causing unnecessary re-renders was challenging.

3. **TypeScript Configuration:** 
   - Ensuring strict type safety throughout the app, particularly for API responses, required careful handling of Giphy's API data. Defining accurate types for complex nested data structures took extra effort but enhanced code reliability.


## Future Improvements

1. **Mobile Responsiveness:** 
   - While the project focuses on both desktop or mobile, future versions could further enchance mobile experience. This would improve the overall UX across various devices.

2. **Enhanced Error Handling:** 
   - The application could provide more detailed and user-friendly error messages in cases of failed API requests, network issues, or rate-limit errors. Currently, the errors are managed but could be presented better to users.

3. **Lazy Loading of GIFs:** 
   - Implementing lazy loading for GIFs would improve the app’s performance, especially when scrolling through multiple pages. This would optimize resource usage and enhance the user experience by loading images on-demand.

4. **Testing Coverage:** 
   - Adding more unit and integration tests, especially for the API calls, state management logic, and UI components, would ensure greater reliability and maintainability of the app in the long term.


>>>>>>> fb5f6cf5745f6d9d91161dc762f9884fb13412ee
