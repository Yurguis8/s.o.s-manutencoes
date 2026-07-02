import React from 'react';

interface ShineCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  animated?: boolean;
}

export const ShineCard: React.FC<ShineCardProps> = ({
  children,
  className = '',
  innerClassName = '',
  animated = true,
}) => {
  return (
    <div className={`shine-card rounded-md ${className}`}>
      {animated && <div className="shine-card__sweep" aria-hidden="true" />}
      <div className={`shine-card__content p-6 h-full  ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
};
