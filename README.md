# 📱 Website

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

```

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

## 📦 Media Assets

All images and videos used in this project were sourced from **copyright-free libraries** and are hosted on **Cloudinary**.  

**Cloudinary**,  uses **Amazon CloudFront CDN (content delivery network)** to deliver content. This ensures that assets are served from servers **closest to each user**, significantly reducing latency and improving load times. 

This approach was chosen to allow **easy updates and URL changes** without needing to download the assets directly into the project. It also helps manage **large video files**, which would otherwise increase the project size significantly.  

The main trade-off is that this setup introduces a **dependency on an internet connection**, but since this is a web application, it is considered an acceptable compromise.

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

# 📱

## 💭 Deep Dive: Project Ideas & Key Implementations

### 💡 What Could Be Improved

- **Add React Helmet**: Since React is client-side, adding **React Helmet** would allow dynamic meta tags for SEO and better page visibility, which is important for a restaurant-oriented website.  

- **Maintain small, reusable UI components**: Continue building and refining **small, brand-consistent components** to ensure modularity and a cohesive design system as the project grows. It is key also if later on is decided to use other libreries, it is easier to transition to others styles/libreries when everything is modulerized and reusable. As you only change one component (ex button) and impacts in all the places that is being used. 

- **Decide between Axios and TanQuery**: For managing API endpoints, **TanQuery** is particularly useful due to its **caching capabilities and key-based management** of HTTP calls. This becomes crucial if the application scales up, for example, adding many more pages or additional commerce features.  

- **Implement loading spinners for images**: Even though images are served via **Cloudinary**, there is some latency. Adding **loading indicators** improves user experience while media loads.  

- **Testing with Jest and React Testing Library**: Incorporating **unit and integration tests** would improve reliability. **Jest** also provides **coverage reports**, helping ensure the application remains well-tested as it grows.

- **CSS Improvement**: Creating **brand color variables** (instead of hardcoding colors) will improve **maintainability, consistency, and scalability** across the application’s styles.



### 💡 Explanation of main animations effects used

- **Gradual Visibility Hook**: The **Use Gradual Visibility Custom Hook** allows components to appear **progressively on mount**. It returns an array of booleans (`isVisible`) indicating whether each component is visible. The `useEffect` runs **once on the initial mount**, and timers update the state over time. Each time the state changes, the hook returns the updated visibility, letting components apply **different CSS classes** based on their visibility. 

- **Motion Library**: The **Motion Library** allows you to create **animations easily in React** by using `motion` components instead of standard HTML tags.  

  - **Motion Tags**: Replace regular HTML elements with `motion` versions (e.g., `motion.div`, `motion.span`).  

  - **Variants**: Motion components accept a `variants` prop, which is an object defining states like `hidden` and `visible`. For each state, you can set properties like `opacity`, `visibility`, and others.  

  - **Transition**: Within each variant, you can define a `transition` object that specifies the **duration, delay, and type of animation**.  

  - **Parent-Child Behavior**: If a motion component is a parent, you should define the `initial` prop to set the starting state. Child components will **inherit the parent’s animation settings**, so they animate consistently.  

  - **Animate Prop**: The `animate` prop tells a motion component **which variant to apply**, controlling the active animation state.  

The Motion Library is designed to make **animations in React simple and declarative**, reducing the complexity of handling manual CSS transitions or keyframes.

- **React Intersection Observer**: **React Intersection Observer** is a React library that lets you track when elements enter the viewport during scrolling.  

  - **Hook Usage**: The library provides a hook that returns a `ref` and an `inView` boolean.  
    - `ref` is a reference to the component or container you want to observe.  
    - `inView` is a boolean that indicates whether the element is currently visible in the viewport.  

  - **Integration with Motion**: In our project, we use it together with **motion components** to trigger animations based on whether a component is in the viewport. This allows **smooth, scroll-based animations** in a declarative way.


