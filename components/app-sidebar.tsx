"use client"

import * as React from "react"
import
{
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import
{
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Johan Gutierrez",
    email: "JohanGutierrez@outlook.cl",
    avatar: "/favicon.ico",
  },
  teams: [
    {
      name: "Remanente",
      logo: GalleryVerticalEnd,
      plan: "App",
    },
  ],
  navMain: [
    {
      title: "Periodos",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Primera Generación",
          url: "/Periodo/Primera_Generacion",
        },
        {
          title: "Noé y El Diluvio",
          url: "/Periodo/Noe_y_El_Diluvio",
        },
        {
          title: "Los Patriarcas",
          url: "/Periodo/Los_Patriarcas",
        },
        {
          title: "De Egipto a Canaán",
          url: "/Periodo/De_Egipto_a_Canaan",
        },
        {
          title: "Los Jueces",
          url: "/Periodo/Los_Jueces",
        },
        {
          title: "Reino Unido",
          url: "/Periodo/Reino_Unido",
        },
        {
          title: "Reino Dividido",
          url: "/Periodo/Reino_Dividido",
        },
        {
          title: "El Exilio",
          url: "/Periodo/El_Exilio",
        },
        {
          title: "Vida de Cristo",
          url: "/Periodo/Vida_de_Cristo",
        },
        {
          title: "Iglesia Primitiva",
          url: "/Periodo/Iglesia_Primitiva",
        },
        {
          title: "Edad Media",
          url: "/Periodo/Edad_Media",
        },
        {
          title: "La Reforma",
          url: "/Periodo/La_Reforma",
        },
        {
          title: "Profecías de Apocalipsis",
          url: "/Periodo/Profecias_de_Apocalipsis",
        },
      ],
    },
    {
      title: "Eventos",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Adán",
          url: "/Evento/Adan",
        },
        {
          title: "Set",
          url: "/Evento/Set",
        },
        {
          title: "Enos",
          url: "/Evento/Enos",
        },
        {
          title: "Cainán",
          url: "/Evento/Cainan",
        },
        {
          title: "Mahalaleel",
          url: "/Evento/Mahalaleel",
        },
        {
          title: "Jared",
          url: "/Evento/Jared",
        },
        {
          title: "Enoc",
          url: "/Evento/Enoc",
        },
        {
          title: "Matusalén",
          url: "/Evento/Matusalen",
        },
        {
          title: "Lamec",
          url: "/Evento/Lamec",
        },
        {
          title: "Noé",
          url: "/Evento/Noe",
        },
        {
          title: "Sem",
          url: "/Evento/Sem",
        },
        {
          title: "Arfaxad",
          url: "/Evento/Arfaxad",
        },
        {
          title: "Salá",
          url: "/Evento/Sala",
        },
        {
          title: "Heber",
          url: "/Evento/Heber",
        },
        {
          title: "Peleg",
          url: "/Evento/Peleg",
        },
        {
          title: "Reu",
          url: "/Evento/Reu",
        },
        {
          title: "Serug",
          url: "/Evento/Serug",
        },
        {
          title: "Nacor",
          url: "/Evento/Nacor",
        },
        {
          title: "Taré",
          url: "/Evento/Tare",
        },
        {
          title: "Abraham",
          url: "/Evento/Abraham",
        },
        {
          title: "Isaac",
          url: "/Evento/Isaac",
        },
        {
          title: "Jacob",
          url: "/Evento/Jacob",
        },
        {
          title: "José",
          url: "/Evento/Jose",
        }
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar ( { ...props }: React.ComponentProps<typeof Sidebar> )
{
  return (
    <Sidebar collapsible="icon" { ...props }>
      <SidebarHeader>
        <TeamSwitcher teams={ data.teams } />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={ data.navMain } />
        <NavProjects projects={ data.projects } />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={ data.user } />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
