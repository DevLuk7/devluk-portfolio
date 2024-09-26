import { Injectable } from '@angular/core';
import { TSkillIconKey } from 'src/app/ui/skills.service';

export interface Project {
  name: string;
  desc: string;
  skills: TSkillIconKey[];
  link?: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  readonly workProjects: Project[] = [
    {
      name: 'Profile Map References',
      desc: 'Created an application using Neo4j for managing and visualizing reference data in a knowledge graph format.',
      skills: ['typescript', 'angular', 'elf', 'rxjs', 'neo4j', 'aggrid'],
    },
    {
      name: 'German Energy Dashboard',
      desc: 'Developed an interactive dashboard for tracking energy metrics in Germany, focusing on renewable and non-renewable sources.',
      skills: [
        'typescript',
        'angular',
        'ngrx',
        'rxjs',
        'chartdotjs',
        'd3dotjs',
      ],
    },
    {
      name: 'The Spark',
      desc: 'Enhanced Q_PERIOR by launching a platform for employees to propose and assess business improvement ideas, aiding in the allocation of innovation funds.',
      skills: ['typescript', 'angular', 'ngrx', 'rxjs', 'rwd', 'Jest'],
    },
    {
      name: 'R&D Department Initiatives',
      desc: 'Engaged in varied R&D projects covering education, communication, HR, and environmental innovations.',
      skills: [
        'typescript',
        'angular',
        'react',
        'ngrx',
        'rxjs',
        'docker',
        'rwd',
        'storybook',
      ],
    },
    {
      name: 'Swiss Social Assistance',
      desc: 'Worked on programs within the Swiss public sector focusing on social assistance.',
      skills: ['typescript', 'angular', 'ngrx', 'rxjs'],
    },
    {
      name: 'Swiss Election System',
      desc: 'Developed a system for public officials to manage elections, track progress, and generate outcome reports in Switzerland.',
      skills: ['typescript', 'angular', 'ngrx', 'rxjs'],
    },
    {
      name: 'Affiliate system for FinTech',
      desc: 'Developed a affiliate management system tailored for the FinTech sector, enabling efficient tracking, monitoring and performance metrics.',
      skills: [
        'typescript',
        'angular',
        'ngrx',
        'rxjs',
        'gitlab',
        'css3',
        'rwd',
        'sass',
      ],
    },
    {
      name: 'Multiportals in environment industry',
      desc: 'Designed and developed multiple web portals for the environmental sector, integrating external applications via iframes, utilizing WebSockets for real-time data management.',
      skills: [
        'typescript',
        'angular',
        'ngrx',
        'rxjs',
        'pwa',
        'gitlab',
        'css3',
        'rwd',
        'sass',
      ],
    },
  ];

  readonly sideProjects: Project[] = [
    {
      name: 'Portfolio',
      desc: 'Built a personal portfolio website to showcase my work and skills.',
      skills: ['typescript', 'angular', 'rxjs', 'sass', 'rwd', 'tailwindcss'],
    },
    {
      name: 'Learning English',
      desc: 'Personalized English learning application to enhance language skills through interactive exercises, progress tracking, and customized lesson plans.',
      skills: [
        'typescript',
        'react',
        'nextdotjs',
        'redux',
        'nestjs',
        'sass',
        'shadcnui',
        'tailwindcss',
        'vercel',
        'rwd',
        'openai',
        'digitalocean',
        'chromewebstore',
        'lucide',
      ],
      link: 'https://english-ai-ui.vercel.app',
    },
  ];
}
