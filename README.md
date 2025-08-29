# 🌎 Planet Express 🚀

### Your world, delivered. An interactive 3D news explorer built with React and Three.js.



![planet](https://github.com/user-attachments/assets/ee811c3a-aeb5-48bd-a4bf-19ff1b2d3b92)


-----

## 👋 About The Project

Ever wondered what's happening *right now* on the other side of the planet?

**Planet Express** is an interactive web application that transforms how you connect with the world. What started as a simple WebGL globe to plot geographical data evolved into a dynamic news explorer. Click on any point on the globe, from the busiest cities to the most remote islands, and instantly get a feed of the latest news from that region.

This project isn't just about plotting dots on a map; it's about connecting abstract locations with real, human stories happening in real-time. It’s a testament to the power of modern web technologies to create beautiful, informative, and immersive experiences.

-----

## ✨ Features

  * **Interactive 3D Globe 🌐:** A stunning, auto-rotating WebGL globe built with React Three Fiber.
  * **Real-Time News Feed 📰:** Click anywhere on the globe, and the app fetches and displays a feed of the top 10 latest news articles for that country using the GNews API.
  * **Default Content on Load 🇮🇳:** The application loads with a default news feed for India, providing immediate content and engagement.
  * **Dynamic Geolocation 🗺️:** Uses a reverse geocoding API (OpenCage) to accurately convert your 3D click coordinates into a real-world country for precise news lookups.
  * **Custom Location Markers 📍:** Add your own persistent markers to the globe by clicking on them. *(Note: This feature was part of our development journey and can be re-enabled)*.
  * **Stunning Visuals ✨:** Features a beautiful starfield background and a glowing atmospheric effect around the globe for a polished, immersive experience.
  * **Professional Header & Links 🔗:** A clean, professional header with your GitHub and portfolio links.

-----

## 🛠️ Tech Stack

This project was brought to life with a stack of modern, powerful technologies:

  * **Framework:** [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
  * **3D Rendering:** [Three.js](https://threejs.org/) with [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) & [@react-three/drei](https://github.com/pmndrs/drei)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  * **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
  * **APIs:**
      * [GNews API](https://gnews.io/) for news articles.
      * [OpenCage Geocoding API](https://opencagedata.com/) for reverse geocoding.

-----

## 🚀 Getting Started: Running Locally

Want to run this on your own machine? Here’s how you can get set up.

1.  **Clone the repository**

    ```sh
    git clone https://github.com/ajay-rgb/PlanetExpress.git
    cd PlanetExpress
    ```

2.  **Install NPM packages**

    ```sh
    npm install
    ```

3.  **Set up your Environment Variables**

    This is a **crucial step**. The application needs API keys to fetch news and location data.

      * Create a new file in the root of your project called `.env.local`
      * Copy the following and paste your secret API keys into it.

    <!-- end list -->

    ```.env.local
    VITE_GNEWS_API_KEY="YOUR_API_KEY_FROM_GNEWS"
    VITE_OPENCAGE_API_KEY="YOUR_API_KEY_FROM_OPENCAGE"
    ```

4.  **Start the development server**

    ```sh
    npm run dev
    ```

    Your project should now be running on `http://localhost:5173`\!

-----

## Acknowledgements

This project wouldn't be possible without the amazing free APIs provided by:

  * [GNews.io](https://gnews.io/)
  * [OpenCage](https://opencagedata.com)
  * [USGS Earthquake Catalog](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) (used during development)

-----

## 👨‍💻 Connect with Me

Hey, I'm Ajay\! Thanks for checking out my project. I'm passionate about building beautiful and functional web experiences.

  * **GitHub:** [@ajay-rgb](https://www.google.com/search?q=https://github.com/ajay-rgb)
  * **Portfolio:** [View My Work](https://portfolio-tau-rouge-710zivsk3i.vercel.app/)
