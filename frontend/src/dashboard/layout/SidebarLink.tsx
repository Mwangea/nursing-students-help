
import { NavLink } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  name: string;
}

export function SidebarLink({ href, icon: Icon, name }: SidebarLinkProps) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => `
        flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
        ${isActive ? 'bg-yellow-400 text-black' : 'text-gray-300 hover:bg-gray-800'}
      `}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{name}</span>
    </NavLink>
  );
}