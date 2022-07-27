export type ContainerShieldsProps = {
  className?: string;
};

export type ShieldFrontMatter = {
  name: string;
  src?: string;
  link?: string;
  target?: string;
  break?: boolean;
  [key: string]: any;
};

export interface ShieldsFrontMatter {
  shields: ShieldFrontMatter[];
}
