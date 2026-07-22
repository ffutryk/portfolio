import { experience, type ExperienceId } from '../data/experience';
import { ui, defaultLang } from '../i18n/ui';

export interface ResolvedExperience {
  id: ExperienceId;
  from: number;
  to?: number;
  content: string;
}

export function getMostRecentExperience(lang: keyof typeof ui = defaultLang): ResolvedExperience {
  const labels = ui[lang].experience;

  const mostRecent = [...experience].sort((a, b) => {
    const aEnd = a.to ?? Infinity;
    const bEnd = b.to ?? Infinity;
    return bEnd - aEnd || b.from - a.from;
  })[0];

  return {
    ...mostRecent,
    content: labels[mostRecent.id] ?? ui[defaultLang].experience[mostRecent.id],
  };
}
