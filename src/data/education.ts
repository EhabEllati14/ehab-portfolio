import type { Education } from '../types'

export const educationList: Education[] = [
  {
    id: 1,
    institution: 'Birzeit University',
    degree: "Bachelor's Degree in Computer Science",
    period: 'Sep 2021 – Mar 2026',
    location: '',
    gpa: '3.5 / 4.0',
    average: '90%',
    distinction: true,
    honorList: '5x Honor List',
    courses: ['Artificial Intelligence', 'Machine Learning', 'Big Data', 'Data Structures & Algorithms'],
    badge: '',
  },
  {
    id: 2,
    institution: 'Birzeit University',
    degree: 'Minor in Business Administration',
    period: '2023 – Mar 2026',
    location: '',
    average: '92%',
    courses: ['Strategic Management', 'Small Business', 'Leadership', 'Management', 'Communication'],
    badge: '',
  },
  {
    id: 3,
    institution: 'University of Messina',
    degree: 'Erasmus+ Exchange Program',
    period: 'Feb 2024 – Jul 2024',
    location: 'Messina, Italy',
    honorList: 'Honor List',
    courses: ['AI & Machine Learning Engineering', 'Big Data', 'System Security & Blockchain'],
    description: 'One of the most defining experiences of my life. Studied at an Italian university through the Erasmus+ Exchange Program, earned the Honor List, and grew in both technical depth and personal independence. Learned Italian (A2), built lasting friendships across Europe, and developed real cross-cultural communication and adaptability.',
    badge: '',
  },
]
