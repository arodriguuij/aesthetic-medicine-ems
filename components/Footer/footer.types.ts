export interface NavigationItem {
  name: string;
  href?: string;
  icon: (props?: any) => JSX.Element;
  isLink?: boolean;
}

export interface Navigation {
  contact: NavigationItem[];
  support: NavigationItem[];
  legal: NavigationItem[];
  social: NavigationItem[];
}
