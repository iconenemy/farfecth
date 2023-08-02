
export interface ISectionRes {
  id: string;
  section_name: string;
}

export interface ISectionByIdRes {
  id: string;
  section_name: string;
  category: ICategoryRes[]
}

export interface ISectionByIdReq {
  id: string
  query?: string
}

export interface ICategoryRes {
  id: string;
  category_name: string;
}

export interface ISizeRes {
  id: string;
  size: 'xs' | 's' |  'm' |  'l' | 'xl' | 'xxl';
}

export interface IProductReq {
  section?: string
  category?: string
}

export interface IProductRes {
  id: string;
  name: string;
  price: number;
  color: string;
  description: string;
  image: string;
  in_stock: boolean;
  section: ISectionRes;
  category: ICategoryRes;
  size: ISizeRes[]
  created_at: Date;
  updated_at: Date;
}
