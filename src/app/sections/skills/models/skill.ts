import { SkillCategories } from './skill-categories.enum';
export interface Skill {
  key?: string;
  uid?: string;
  name: string;
  category?: SkillCategories[];
  imgUrl: string;
  url?: string;
  rate?: number;
}
