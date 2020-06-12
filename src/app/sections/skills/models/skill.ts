import { SkillCategories } from './skill-categories.enum';

export interface Skill {
  key?: any;
  name: string;
  category?: SkillCategories[];
  imgUrl: string;
  url?: string;
  rate?: number;
}
