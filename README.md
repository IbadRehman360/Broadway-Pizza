1. Introduction
   Welcome to Broadway Pizza, a React-based web application for ordering delicious pizzas online. This app is designed to provide a seamless experience for customers to browse through a variety of pizzas, customize their orders, and add them to the cart for easy checkout. It leverages Redux for state management and Tailwind CSS for styling, ensuring a responsive and visually appealing user interface.

2. Features
   Broadway Pizza offers a range of features to enhance the user experience:

Pizza Selection: Browse a wide selection of mouthwatering pizzas with detailed descriptions and images.
Add to Cart: Add pizzas to your cart with the option to specify quantity and priority for each item.
Cart Management: View, edit, and remove items from your cart before proceeding to checkout.
Order Summary: Review your order summary, including itemized details and total cost.
Redux State Management: Utilizes Redux for efficient and centralized state management.
Responsive Design: Ensures a seamless experience across desktop and mobile devices. 3. Technologies Used
Broadway Pizza is built using the following technologies:

React: A JavaScript library for building user interfaces.
Redux: A state management library for managing the application's global state.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Axios: A promise-based HTTP client for making API requests.
React Router: For managing routing within the application. 4. Getting Started
To run the Broadway Pizza app locally, follow these steps:

- cart
  - items: [] // Array of items in the cart
  - total: 0 // Total cost of items in the cart
- pizzas
  - items: [] // Array of available pizzas
  - loading: false // Indicates if pizzas are being fetched
  - error: null // Stores any error that occurs during fetch

7. Contributing
   Contributions to Broadway Pizza are welcome! If you'd like to contribute, please follow these steps:
