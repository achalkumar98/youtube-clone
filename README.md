🎥 YouTube Clone – React + Redux Toolkit + Tailwind CSS

A feature-rich, responsive YouTube clone application built with React 18, Redux Toolkit, and Tailwind CSS, integrating YouTube Data API v3 for real video content, with advanced features like real-time chat simulation, nested comments, and search suggestions with caching.

✨ Core Features
🎬 Video Playback – Embedded YouTube player with dynamic routing.

💬 Live Chat Simulation – Auto-scrolling chat with random user/message generation.

🗨 Threaded Comments – Infinite-level nested comment structure.

🔍 Instant Search Suggestions – YouTube API-powered autocomplete with result caching.

📱 Fully Responsive UI – Optimized for mobile, tablet, and desktop.

⚡ Global State Management – Redux Toolkit slices for menu, search, and chat.




📂 Directory Structure

src/
├── 📁 components/                  # UI Components
├── 📁 utils/                       # Redux slices, constants, helpers
├── ⚛ App.jsx                        # Main app component
└── 🚀 index.jsx                     # App entry point




🚀 Installation & Setup

# Clone the repository
git clone https://github.com/your-username/your-repo.git

# Navigate to the project folder
cd your-repo

# Install dependencies
npm install

# Create environment file
touch .env



Add your YouTube API key in .env:
 VITE_GOOGLE_API_KEY=your_youtube_api_key


Run the development server:
 npm run dev


🔑 Environment Variables
Variable	Description
VITE_GOOGLE_API_KEY	YouTube Data API v3 key for fetching videos & search suggestions



🧩 Tech Stack
Frontend: React 18

State Management: Redux Toolkit

Styling: Tailwind CSS

API: YouTube Data API v3

Icons: React Icons



🎥 Demo Video

## 🎥 Demo Video  

[![Watch Demo](https://img.shields.io/badge/▶%20Watch%20Demo-%20on%20Google%20Drive-red?style=for-the-badge&logo=google-drive)](https://drive.google.com/file/d/1aFTUeX_3YndsfGrqPOw-MKeLkERVRJzl/view?usp=sharing)  

> Click the button above to watch the project demo hosted on Google Drive.





🤝 Contribution Guidelines
Fork the repository

Create a new branch (feature/your-feature-name)

Commit changes (git commit -m 'Add some feature')

Push to branch (git push origin feature/your-feature-name)

Open a Pull Request




📜 License
This project is licensed under the MIT License – see the LICENSE file for details.
