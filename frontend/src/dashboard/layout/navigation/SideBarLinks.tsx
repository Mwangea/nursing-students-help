
import { Home, Search, FileText, Clock, Settings, HelpCircle, CreditCard, BookOpen, MessageSquare, BookOpenCheck } from 'lucide-react';
import { SidebarLink } from './SideBarLink';


const navigation = [
  { name: 'Dashboard', icon: Home, href: '/dashboard' },
  { name: 'My Assignments', icon: FileText, href: '/assignments' },
  { name: 'Search Questions', icon: Search, href: '/search' },
  { name: 'Unlocked Answers', icon: BookOpenCheck, href: '/unlocked-answers' },
  { name: 'Study Materials', icon: BookOpen, href: '/materials' },
  { name: 'Payment History', icon: CreditCard, href: '/payments' },
  { name: 'Support Chat', icon: MessageSquare, href: '/support' },
  { name: 'History', icon: Clock, href: '/history' },
  { name: 'Settings', icon: Settings, href: '/settings' },
  { name: 'Help', icon: HelpCircle, href: '/help' },
];

export function SidebarLinks() {
  return (
    <nav className="space-y-1 px-3">
      {navigation.map((item) => (
        <SidebarLink
          key={item.name}
          {...item}
        />
      ))}
    </nav>
  );
}