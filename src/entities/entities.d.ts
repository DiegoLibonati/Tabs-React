// ##### TYPES #####

export type Job = {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
};

export type UseOpacity = {
  opacity: number;
  setOpacity: React.Dispatch<React.SetStateAction<number>>;
};

// ##### INTERFACES #####

export interface ButtonExpProps {
  company: string;
  index: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  setOpacity: React.Dispatch<React.SetStateAction<number>>;
}

export interface CompanyExpProps {
  company: string;
  title: string;
  dates: string;
  duties: string[];
  opacity: number;
}

export interface DutieItemProps {
    dutie: string
}