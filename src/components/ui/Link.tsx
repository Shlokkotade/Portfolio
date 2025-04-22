import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  ...props
}) => {
  const isInternalLink = href.startsWith('#');

  const handleInternalClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isInternalLink) {
      e.preventDefault();
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <a
      href={href}
      className={`transition-all duration-300 ${className}`}
      onClick={isInternalLink ? handleInternalClick : undefined}
      {...props}
    >
      {children}
    </a>
  );
};