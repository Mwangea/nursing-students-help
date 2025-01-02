

import { SidebarLinks } from './navigation/SideBarLinks';
import { SupportCard } from './SupportCard';

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`fixed left-0 top-0 h-screen bg-black text-white pt-16 transition-all duration-300 ${
      isOpen ? 'w-64' : 'w-0 -translate-x-full'
    }`}>
      <div className="overflow-y-auto h-full py-4">
        <SidebarLinks />
        <SupportCard />
      </div>
    </aside>
  );
}