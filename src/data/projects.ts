export const projectIds = ['coffeestock', 'kronii', 'epersgeist'] as const;
export type ProjectId = (typeof projectIds)[number];

export const projects: {
  id: ProjectId;
  name: string;
  github?: string;
  year: number;
  stack: string[];
}[] = [
  {
    id: 'coffeestock',
    name: 'CoffeeStock',
    github: 'https://github.com/ffutryk/coffeestock',
    year: 2026,
    stack: ['TypeScript', 'Express', 'TypeORM'],
  },
  {
    id: 'epersgeist',
    name: 'Epersgeist',
    year: 2026,
    stack: ['Java Spring', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Python'],
  },
  {
    id: 'kronii',
    name: 'Kronii',
    github: 'https://github.com/ffutryk/kronii',
    year: 2025,
    stack: ['Elixir'],
  },
];
