interface NitroStackLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeConfig = {
  sm: 'max-w-[160px]',
  md: 'max-w-[220px]',
  lg: 'max-w-[300px]',
};

export default function NitroStackLogo({ size = 'md', className = '' }: NitroStackLogoProps) {
  return (
    <img
      src="/assets/brand/Name_with_logo_white.svg"
      alt="NitroStack"
      className={`h-auto w-full object-contain ${sizeConfig[size]} ${className}`}
    />
  );
}
