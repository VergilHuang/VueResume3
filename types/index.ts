export type SkillDataType = {
  id: number;
  category: string;
  sub_categories: SubCategoryType[];
};

export type SubCategoryType = {
  sub_name: string;
  skills: SkillType[];
};

export type SkillType = {
  id: number;
  title: string;
  level: string;
};
