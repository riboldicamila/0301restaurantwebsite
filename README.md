# 📱 Website

## 📖 Project Description

This project is a **restaurant-inspired website** focused on building custom components without relying on pre-built UI libraries such as **Material UI** or **Bootstrap**. Instead, the design was crafted with **TailwindCSS**, enabling a fully customized and cohesive visual identity aligned with the restaurant’s aesthetic.  

The idea started from exploring design platforms like **Dribbble** and **Awwwards**, experimenting with different and new libraries, and challenging myself to see what kind of UX I could create from scratch.  

The main goal of this project was to explore and implement **animations and transitions** in a **modern and minimalist** way. 

Throughout the development process, several React concepts were applied, such as:  
- **React Router** for client-side navigation  
- **Custom Hooks** to encapsulate reusable logic  
- **Built-in Hooks** for state and lifecycle management  
- **Memoization techniques** like `useMemo` to optimize performance  
- Maintaining **component modularity** while keeping a consistent styling across the application. 

## 📖 Challenge

The main challenge was defining and sustaining a **cohesive custom design system** from scratch, while also integrating **animations and transitions** to enhance interactivity and deliver a smooth user experience.  

Another difficulty came from working with **TailwindCSS**, which often leads to **very large component files**. While Tailwind provides great flexibility and consistency in styling, it required frequent **refactoring** and breaking down the UI into **smaller, reusable components** to keep the codebase clean and maintainable.  

Additionally, organizing **larger sections styled with Tailwind** presented challenges in ensuring the project remained readable and scalable. 

Another key aspect was maintaining **minimalism in external libraries**. Instead of mixing multiple icon libraries (e.g., Lucide, FontAwesome), the project relied mainly on **React Icons** to cover most use cases. This approach reduced dependencies and improved long-term maintainability, especially when dealing with **future updates or version changes**.  


## 💭 Features

- **Responsive Design**: The portfolio adjusts seamlessly across different screen sizes.
- **Routing**: **React Router** is used for navigation between sections.


## 👩🏻‍💻 Tech Stack

- **React.js**: Frontend framework for building the user interface.
- **Vite**: Fast build tool and development server.
- **TailwindCSS**: Utility-first CSS framework for rapid UI design.
- **Framer Motion**: Library for smooth animations and transitions.
- **React Router**: For routing and navigation.
- **Axios**: For API requests and data fetching (not being used, because of mocking at this stage of the project).
- **React Datepicker**: For interactive date selection.
- **React Icons**: For lightweight and customizable icons.
- **React Intersection Observer**: To trigger actions when elements enter/leave the viewport.


## ⚡ Installation & Running

```bash
# Clone the repository
git clone https://github.com/riboldicamila/0301restaurantwebsite.git

# Navigate into the project folder
cd 0301restaurantwebsite

# Install dependencies
npm install

# Run in development mode
npm run dev
