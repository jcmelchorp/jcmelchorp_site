import { Skill } from '../../skills/models/skill';

export interface Job {
  key?: string;
  company: string;
  companyType?: string;
  companyUrl?: string;
  companyImgUrl?: string;
  position?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  skills?: Skill[];
}
