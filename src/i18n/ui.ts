import type { ExperienceId } from '../data/experience';
import { profile } from '../data/profile';
import type { ProjectId } from '../data/projects';

export const defaultLang = 'en';

export type UIContent = {
  'about.name.label': string;
  'about.picture.label': string;
  'about.picture.alt': string;
  'about.age.label': string;
  'about.location.label': string;
  'about.location.content': string;
  'about.education.label': string;
  'about.education.content': string;
  'about.languages.label': string;
  'about.languages.content': string[];
  'about.skills.label': string;
  'about.job.label': string;
  'about.tldr.label': string;
  'about.tldr.content': string;
  experience: Record<ExperienceId, string>;
  'experience.now.label': string;
  projects: Record<ProjectId, string>;
};

export const ui = {
  en: {
    'about.name.label': 'Name',
    'about.picture.label': 'Picture',
    'about.picture.alt': `${profile.name} Github's profile`,
    'about.age.label': 'Age',
    'about.location.label': 'Location',
    'about.location.content': 'Buenos Aires, Argentina',
    'about.education.label': 'Education',
    'about.education.content': 'Computer Science',
    'about.languages.label': 'Languages',
    'about.languages.content': ['Spanish', 'English'],
    'about.skills.label': 'Skills',
    'about.job.label': 'Job',
    'about.tldr.label': 'TL;DR',
    'about.tldr.content':
      'Computer Science student with practical experience developing REST APIs and two years leading technical teams. Self-taught learner with a proven ability to quickly adopt new languages and stacks.',
    experience: {
      'technical-instructor': 'Technical Instructor - Software Engineering',
    },
    'experience.now.label': 'Now',
    projects: {
      coffeestock: 'Web application for inventory and sales management',
      epersgeist: 'Polyglot persistence and predictive models',
      kronii: 'AI conversational assistant backend',
    },
  },
} as const satisfies Record<string, UIContent>;
