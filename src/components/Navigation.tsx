import { Home, FileText, Folder, Award, Mail, Menu } from 'lucide-react';

interface NavigationProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const navItems = [
  { id: 'ABOUT', icon: Home, label: 'About' },
  { id: 'RESUME', icon: FileText, label: 'Resume' },
  { id: 'PROJECTS', icon: Folder, label: 'Projects' },
  { id: 'CERTIFIED', icon: Award, label: 'Certified' },
  { id: 'CONTACT', icon: Mail, label: 'Contact' },
];

export default function Navigation({ activeItem, onItemClick }: NavigationProps) {
  return (
    <nav className="nav-panel flex flex-col items-center gap-8 py-8 px-4 w-20">
      <button className="nav-icon-button group">
        <Menu className="w-6 h-6 text-zinc-400 group-hover:text-yellow-400 transition-colors duration-300" />
      </button>

      <div className="flex-1 flex flex-col gap-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`nav-item ${isActive ? 'active' : ''}`}
              title={item.label}
            >
              <Icon className="w-6 h-6" />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
