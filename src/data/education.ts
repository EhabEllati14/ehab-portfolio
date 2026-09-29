import type { Education } from '../types'

export const educationList: Education[] = [
  {
    id: 1,
    institution: 'Birzeit University',
    degree: "Bachelor's Degree in Computer Science",
    period: 'Sep 2021 – Mar 2026',
    location: 'West Bank, Palestine',
    gpa: '3.5 / 4.0',
    average: '90%',
    distinction: true,
    honorList: '5× Honor List',
    courses: ['Artificial Intelligence', 'Machine Learning', 'Big Data', 'Data Structures & Algorithms'],
    badge: '🎓',
  },
  {
    id: 2,
    institution: 'Birzeit University',
    degree: 'Minor in Business Administration',
    period: '2023 – Mar 2026',
    location: 'West Bank, Palestine',
    average: '92%',
    courses: ['Strategic Management', 'Small Business', 'Leadership', 'Management', 'Communication'],
    badge: '📊',
  },
  {
    id: 3,
    institution: 'University of Messina, Italy',
    degree: 'Erasmus+ Exchange Program',
    period: 'Feb 2024 – Jul 2024',
    location: 'Messina, Italy',
    honorList: 'Honor List',
    badge: '🌍',
  },
]
