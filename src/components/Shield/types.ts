export type ShieldProps = {
  className?: string;
  urlShield?: string;
  shieldArgs?: ShieldArgs;
};

export type ShieldArgs = {
  style?: string;
  label?: string;
  message?: string;
  labelColor?: string;
  color?: string;
  logoColor?: string;
  logo?: string;
  [key: string]: any;
};
