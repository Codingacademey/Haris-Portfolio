import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/hero', icon: User },
    { name: 'Projects', url: '/hero#projects', icon: Briefcase },
    { name: 'Resume', url: '/hero#about', icon: FileText }
  ]

  return <NavBar items={navItems} />
}
