
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const StatCard = ({
  title,
  value,
  icon,
  description,
  trend,
  className,
}: StatCardProps) => {
  return (
    <Card className={cn("card-hover", className)}>
      <CardContent className="p-6 flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <div className="mt-1 flex items-baseline gap-1">
            <h3 className="text-2xl font-bold">{value}</h3>
            {trend && (
              <span
                className={cn(
                  "text-xs font-medium",
                  trend.isPositive ? "text-green-600" : "text-red-600"
                )}
              >
                {trend.isPositive ? "+" : "-"}{trend.value}%
              </span>
            )}
          </div>
          {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
        </div>
        <div className="rounded-full p-2 bg-ennanie-50 text-ennanie-600">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};
