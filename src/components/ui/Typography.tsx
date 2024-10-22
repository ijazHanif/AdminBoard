import { ReactNode } from 'react';
import clsx from 'clsx';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  children: ReactNode;
}

export const Typography = ({ variant, className, children }: TypographyProps) => {
  const baseStyles = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    p: 'text-base',
    span: 'text-sm',
  };

  const Component = variant;

  return (
    <Component className={clsx(baseStyles[variant], className)}>
      {children}
    </Component>
  );
};
