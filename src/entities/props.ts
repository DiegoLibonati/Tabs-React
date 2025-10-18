interface DefaultProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonExpProps {
  company: string;
  isActive: boolean;
  handleActiveCompany: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CompanyExpProps {
  company: string;
  title: string;
  dates: string;
  duties: string[];
}

export interface DutieItemProps {
  dutie: string;
}
