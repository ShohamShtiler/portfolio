import mindayImg from '../assets/minday.png'
import mistertoyImg from '../assets/mistertoy.png'
import minesweeperImg from '../assets/minesweeper.png'
import gmailImg from '../assets/gmail.png'
import momentumImg from '../assets/wip.png'

export const projects = [
  {
    id: 'minday',
    name: 'Minday',
    description:
      'A Monday.com-inspired work management platform with drag-and-drop boards, real-time updates, and advanced team collaboration features.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Socket.IO'],
    status: null,
    github: 'https://github.com/ShohamShtiler/Minday',
    live: 'https://minday.onrender.com',
    image: mindayImg,
  },
  {
    id: 'mister-toy',
    name: 'Mister Toy',
    description:
      'Full-stack e-commerce app for managing toys, including CRUD operations, filtering, authentication, and real-time chat.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    status: null,
    github: 'https://github.com/ShohamShtiler/Mistertoy',
    live: 'https://mistertoy-backend-2oeq.onrender.com',
    image: mistertoyImg,
  },
  {
    id: 'momentum',
    name: 'Momentum',
    description:
      'Modern productivity dashboard for tracking habits, goals, and daily progress with a clean UI and dynamic data visualization.',
    tech: ['React', 'TypeScript', 'SCSS'],
    status: 'In Progress',
    github: 'https://github.com/ShohamShtiler/momentum',
    live: null,
    image: momentumImg,
  },
  {
    id: 'appsus',
    name: 'Appsus',
    description:
      'Google-inspired productivity suite combining email and notes apps, showcasing modular architecture and advanced state management.',
    tech: ['React', 'JavaScript', 'CSS'],
    status: null,
    github: 'https://github.com/ShohamShtiler/Appsus',
    live: 'https://shohamshtiler.github.io/Appsus/',
    image: gmailImg,
  },
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    description:
      'Classic Minesweeper game with multiple difficulty levels, smart expansion logic, and a polished interactive UI.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    status: null,
    github: 'https://github.com/ShohamShtiler/minesweeper',
    live: 'https://minesweeper-zzk3.onrender.com',
    image: minesweeperImg,
  },
]
