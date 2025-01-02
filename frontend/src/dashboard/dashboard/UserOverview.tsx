
import { StatCard } from './StatCard';
import { FileText, Clock, Star, GraduationCap } from 'lucide-react';

export function UserOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Active Assignments"
        value="3"
        icon={FileText}
        trend={{ value: 2, isPositive: true }}
      />
      <StatCard
        title="Completed Tasks"
        value="28"
        icon={GraduationCap}
        trend={{ value: 8, isPositive: true }}
      />
      <StatCard
        title="Average Rating"
        value="4.9"
        icon={Star}
        trend={{ value: 0.3, isPositive: true }}
      />
      <StatCard
        title="Response Time"
        value="2.5h"
        icon={Clock}
        trend={{ value: 15, isPositive: true }}
      />
    </div>
  );
}