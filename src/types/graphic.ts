export interface Graphic {
  id: string;
  name: string;
  logo: string;
  title: string;
  description: string;
  tags: string[];
  project_images: string[];
  category: string[];
  software_used?: string[];
  duration?: string;
}
