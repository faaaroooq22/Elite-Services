
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface ServiceCategory {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}
