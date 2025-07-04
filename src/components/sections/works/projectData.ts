// src/components/sections/works/projectData.ts

export interface ProjectData {
  id: string;
  title: string;
  companyName: string;
  date: string; // used as the timeframe
  imageUrl: string;
  slug: string;
  color: string;
  sector: string;
  myRole: string;
  gallery?: string[]; // array of photo URLs for the "under the role" section
  externalUrl?: string; // optional external URL for projects that link outside the app
  comingSoon?: boolean; // optional flag to indicate if the project is coming soon
  headingImage?: string; // New heading image for projects
}

export const projectData: ProjectData[] = [
  {
    id: '01',
    companyName: 'Case study Elysium',
    date: '2024-2025 (ongoing project)',
    imageUrl: '/elysiumurl.png',
    headingImage: '/elysiumintro.png', // New heading image for Elysium
    title: 'Elysium Consulting',
    color: '#0C0C0C',
    slug: 'elysium',
    sector: 'Business & Finance Consulting',
    myRole: 'Design & Development',
    gallery: ['/public/elysiumurl.png', '/elysium-gallery2.png'],
    externalUrl:
      'https://www.figma.com/proto/fL8vxgeOVwvC3acrsOfZvl/PROJECTS-WEB?page-id=8410%3A3867&node-id=8410-3868&viewport=403%2C153%2C0.11&t=3bOXh6Q2LLUObPqE-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=8410%3A3868',
  },
  {
    id: '02',
    companyName: 'UX/UI Case Study - WBS Gruppe AG',
    date: '2023-2024',
    imageUrl: '/project-2.png',
    headingImage: '/trainspot-heading.png',
    title: 'Trainspot',
    color: '#0C0C0C',
    slug: 'trainspot',
    sector: 'Digital Education & Technology',
    myRole: 'UX/UI Designer & Agile Team Member',
    gallery: ['/trainspot2s.svg', '/trainspot3s.svg', '/trainspot1s.svg'],
    externalUrl:
      'https://www.figma.com/proto/fL8vxgeOVwvC3acrsOfZvl/PROJECTS-WEB?page-id=6003%3A24158&node-id=6546-25201&viewport=-6873%2C-7452%2C0.66&t=jgtdkRGOqrAylpPb-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6546%3A25201',
  },
  {
    id: '03',
    title: 'KundeV',
    companyName: 'UX/UI Case Study - WBS Gruppe AG ',
    date: '2022-2023',
    imageUrl: '/project-3.png',
    color: '#0C0C0C',
    slug: 'kundev',
    sector: 'E-Learning Solutions',
    myRole: 'Product Designer & Researcher',
    gallery: [
      '/kurskonfigurator-gallery1.jpg',
      '/kurskonfigurator-gallery2.jpg',
    ],
    externalUrl:
      'https://www.figma.com/proto/fL8vxgeOVwvC3acrsOfZvl/PROJECTS-WEB?page-id=8169%3A38862&node-id=8169-38863&viewport=328%2C326%2C0.61&t=GfkMhJA2Y4Pn0Trw-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=8169%3A38863',
  },
  {
    id: '04',
    title: 'Design System',
    companyName: 'WBS Gruppe AG',
    date: '2020-2023',
    imageUrl:
      'https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    color: '#EFE8D3',
    slug: 'designsystem',
    sector: 'Digital Product Design',
    myRole: 'Lead Visual Designer',
    gallery: ['/trainspot1.png', '/trainspot2.png', '/trainspot3.png'],
    comingSoon: true,
  },
  {
    id: '05',
    title: 'Kursplannung',
    imageUrl: '/project-1.png',
    color: '#706D63',
    companyName: 'WBS Gruppe AG',
    date: '2021-2022',
    slug: 'kursplannung',
    sector: 'Learning Management',
    myRole: 'UX Strategist & Planner',
    gallery: ['/kursplannung-gallery1.jpg'],
    comingSoon: true,
  },
];
