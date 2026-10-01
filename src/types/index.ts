export interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
  tags: string[]
  highlight?: boolean
}

export interface Project {
  id: number
  name: string
  description: string
  tags: string[]
  github?: string
  featured?: boolean
}

export interface SkillCategory {
  id: number
  name: string
  icon: string
  skills: string[]
}

export interface Education {
  id: number
  institution: string
  degree: string
  period: string
  location: string
  gpa?: string
  average?: string
  distinction?: boolean
  honorList?: string
  courses?: string[]
  badge?: string
  description?: string
}

export interface Certification {
  id: number
  name: string
  issuer: string
  period: string
  icon?: string
}

export interface Stat {
  label: string
  value: string
  icon: string
}
