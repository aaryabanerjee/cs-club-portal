# CS Club Portal 🖥️

Welcome to the **CS Club Portal**, a web app built for the Computer Science Club to showcase projects, share resources, and celebrate achievements! This app has a slick Matrix-themed design with a digital rain animation, making it a fun and engaging platform for club members to connect and collaborate.

This README is a complete guide to the project, covering everything from setup instructions to detailed code breakdowns. Whether you’re a club member looking to use the app or a developer wanting to contribute, you’ll find all the info you need right here!

## ✨ Features

- **Home Page**: A welcoming landing page with quick links to view projects or submit a new one.
- **Projects Page**: Displays all submitted projects with titles, descriptions, GitHub links, tags, and optional images.
- **Submit Project Page**: A form for members to submit their projects, including a title, description, GitHub link, tags, and an optional image upload.
- **Hall of Fame Page**: Highlights notable club members or achievements (currently static, but can be made dynamic).
- **Resources Page**: A curated list of resources for AP Computer Science A, Introduction to Computer Science, and App Development, plus internship and opportunity links for club members.
- **Matrix Theme**: A cool Matrix-inspired design with a digital rain animation that runs seamlessly across all pages.
- **Responsive Navbar**: A navigation bar that adapts to different screen sizes, with a hamburger menu on mobile for easy access to all pages.

## 🛠️ Tech Stack

- **Frontend**: React (with React Router for navigation)
- **Backend/Database**: Firebase Firestore (for storing projects)
- **Storage**: Firebase Storage (for project image uploads)
- **Styling**: Custom CSS with a Matrix-inspired theme (green text, digital rain animation)
- **Animation**: Canvas-based digital rain effect

## 📸 Screenshots

*Coming soon! Add some screenshots of the app in action to show off the Matrix vibe.*

## 🚀 Getting Started

Follow these steps to get the CS Club Portal up and running on your local machine.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed (v14 or later recommended). Download it from [nodejs.org](https://nodejs.org/).
- **Firebase Account**: You’ll need a Firebase account to set up the backend. Sign up at [firebase.google.com](https://firebase.google.com/).

### Installation

#### Expand the Zip File
- If you downloaded the project as a zip file (`cs-club-portal.zip`) from GitHub, you’ll need to unzip it first.
- On Windows: Right-click the `cs-club-portal.zip` file, select "Extract All," and choose a destination folder.
- On macOS/Linux: Double-click the `cs-club-portal.zip` file, or use the terminal:
  ```bash
  unzip cs-club-portal.zip
### Project Structure
# Project Structure

- **cs-club-portal/**  
  ├── **public/**  
  &nbsp;&nbsp;&nbsp;&nbsp;# Static assets (index.html, favicon, etc.)  
  ├── **src/**  
  │   ├── **components/**  
  │   │   ├── `DigitalRain.js`  
  │   │   &nbsp;&nbsp;&nbsp;&nbsp;# Matrix digital rain animation  
  │   │   ├── `Navbar.js`  
  │   │   &nbsp;&nbsp;&nbsp;&nbsp;# Navigation bar  
  │   ├── **pages/**  
  │   │   ├── `Home.js`  
  │   │   &nbsp;&nbsp;&nbsp;&nbsp;# Home page  
  │   │   ├── `Projects.js`  
  │   │   &nbsp;&nbsp;&nbsp;&nbsp;# Projects list page  
  │   │   ├── `SubmitProject.js`  
  │   │   &nbsp;&nbsp;&nbsp;&nbsp;# Project submission form  
  │   │   ├── `HallOfFame.js`  
  │   │   &nbsp;&nbsp;&nbsp;&nbsp;# Hall of Fame page  
  │   │   ├── `Resources.js`  
  │   │   &nbsp;&nbsp;&nbsp;&nbsp;# Resources page  
  │   ├── `firebase.js`  
  │   &nbsp;&nbsp;&nbsp;&nbsp;# Firebase configuration and initialization  
  │   ├── `App.js`  
  │   &nbsp;&nbsp;&nbsp;&nbsp;# Main app component with routing  
  │   ├── `App.css`  
  │   &nbsp;&nbsp;&nbsp;&nbsp;# Global styles  
  │   ├── `index.js`  
  │   &nbsp;&nbsp;&nbsp;&nbsp;# Entry point  
  ├── `package.json`  
  &nbsp;&nbsp;&nbsp;&nbsp;# Dependencies and scripts  
  └── `README.md`  
  &nbsp;&nbsp;&nbsp;&nbsp;# You’re reading it!
