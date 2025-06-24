import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Footprints, LayoutDashboard, ListChecks, Settings, LogOut } from 'lucide-react';

const navLinks = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/bookings', label: 'Bookings', icon: ListChecks },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
];

const AdminSidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r flex flex-col">
      <div className="h-20 flex items-center justify-center border-b">
        <Link to="/" className="flex items-center">
          <Footprints className="h-8 w-8 text-primary" />
          <span className="ml-2 text-2xl font-bold text-gray-800">Swim Steps</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navLinks.map((link) => (
          <Button key={link.to} variant="ghost" asChild className="w-full justify-start">
            <NavLink
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `flex items-center text-base ${isActive ? 'bg-accent text-accent-foreground' : 'text-gray-600 hover:bg-accent/50'}`
              }
            >
              <link.icon className="mr-3 h-5 w-5" />
              {link.label}
            </NavLink>
          </Button>
        ))}
      </nav>
      <div className="p-4 border-t">
        <Button variant="outline" asChild className="w-full justify-start">
          <Link to="/">
            <LogOut className="mr-3 h-5 w-5" />
            Back to Site
          </Link>
        </Button>
      </div>
    </aside>
  );
};

export default AdminSidebar;