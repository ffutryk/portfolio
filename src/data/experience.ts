export const experienceIds = ['technical-instructor'] as const;
export type ExperienceId = typeof experienceIds[number];

export const experience: { id: ExperienceId; from: number; to?: number }[] = [
  { id: 'technical-instructor', from: 2024 },
];
