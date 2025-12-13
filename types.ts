import React from 'react';

export interface ChartData {
  name: string;
  value: number;
  value2?: number;
}

export interface FeatureItem {
  title: string;
  status: 'done' | 'doing' | 'pending';
  description: string;
}

export interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon?: React.ReactNode;
}