import { Injectable } from '@angular/core';
import { Skill } from 'src/app/ui/skill-badge/skill-badge.component';

export interface Project {
  name: string;
  desc: string;
  skills: Skill[];
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  readonly workProjects: Project[] = [
    {
      name: 'Profile Map References',
      desc: 'Created an application using Neo4j for managing and visualizing reference data in a knowledge graph format.',
      skills: ['TypeScript', 'Angular', 'NgRx', 'RxJS', 'NEO4J', 'AG Grid'],
    },
    {
      name: 'German Energy Dashboard',
      desc: 'Developed an interactive dashboard for tracking energy metrics in Germany, focusing on renewable and non-renewable sources.',
      skills: ['TypeScript', 'Angular', 'NgRx', 'RxJS', 'Chart.js', 'D3.js'],
    },
    {
      name: 'The Spark',
      desc: 'Enhanced Q_PERIOR by launching a platform for employees to propose and assess business improvement ideas, aiding in the allocation of innovation funds.',
      skills: ['TypeScript', 'Angular', 'NgRx', 'RxJS', 'RWD', 'Jest'],
    },
    {
      name: 'R&D Department Initiatives',
      desc: 'Engaged in varied R&D projects covering education, communication, HR, and environmental innovations.',
      skills: [
        'TypeScript',
        'Angular',
        'React',
        'NgRx',
        'RxJS',
        'Docker',
        'RWD',
        'Storybook',
      ],
    },
    {
      name: 'Swiss Social Assistance',
      desc: 'Worked on programs within the Swiss public sector focusing on social assistance.',
      skills: ['TypeScript', 'Angular', 'NgRx', 'RxJS'],
    },
    {
      name: 'Swiss Election System',
      desc: 'Developed a system for public officials to manage elections, track progress, and generate outcome reports in Switzerland.',
      skills: ['TypeScript', 'Angular', 'NgRx', 'RxJS'],
    },
    {
      name: 'Affiliate system for FinTech',
      desc: 'System for managing affiliates in the FinTech industry.',
      skills: [
        'TypeScript',
        'Angular',
        'NgRx',
        'RxJS',
        'GitLab',
        'CSS3',
        'RWD',
        'Sass',
      ],
    },
    {
      name: 'Multiportals in environment industry',
      desc: 'Designed and developed multiportals for the environment industry.',
      skills: [
        'TypeScript',
        'Angular',
        'NgRx',
        'RxJS',
        'PWA',
        'GitLab',
        'CSS3',
        'RWD',
        'Sass',
      ],
    },
  ];

  readonly sideProjects: Project[] = [
    {
      name: 'Portfolio',
      desc: 'Built a personal portfolio website to showcase my work and skills.',
      skills: ['TypeScript', 'Angular', 'RxJS', 'Sass', 'RWD', 'TailwindCSS'],
    },
  ];
}
