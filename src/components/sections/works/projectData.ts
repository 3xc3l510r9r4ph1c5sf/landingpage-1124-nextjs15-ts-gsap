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
  gallery?: string[]; // array of photo URLs for the “under the role” section
}

export const projectData: ProjectData[] = [
  {
    id: '01',
    companyName: 'WBS Gruppe AG',
    date: '2023-2024',
    imageUrl: '/project1-hero.png',
    title: 'Trainspot',
    color: '#0C0C0C',
    slug: 'trainspot',
    sector: 'Digital Education & Technology',
    myRole: 'UX/UI Designer & Agile Team Member',
    gallery: ['/trainspot2s.svg', '/trainspot3s.svg', '/trainspot1s.svg'],
  },
  {
    id: '02',
    title: 'Kurskonfigurator',
    companyName: 'WBS Gruppe AG',
    date: '2022-2023',
    imageUrl:
      'https://images.unsplash.com/photo-1676793894040-b6dd72276620?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3',
    color: '#8C8C8C',
    slug: 'kurskonfigurator',
    sector: 'E-Learning Solutions',
    myRole: 'Product Designer & Researcher',
    gallery: [
      '/kurskonfigurator-gallery1.jpg',
      '/kurskonfigurator-gallery2.jpg',
    ],
  },

  // Comment out or remove these if you do not want them accessible:
  // {
  //   id: '03',
  //   title: 'Design System',
  //   companyName: 'WBS Gruppe AG',
  //   date: '2020-2023',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  //   color: '#EFE8D3',
  //   slug: 'designsystem',
  //   sector: 'Digital Product Design',
  //   myRole: 'Lead Visual Designer',
  //   gallery: ['/trainspot1.png', '/trainspot2.png', '/trainspot3.png'],
  // },
  // {
  //   id: '04',
  //   title: 'Kursplannung',
  //   imageUrl: '/project-1.png',
  //   color: '#706D63',
  //   companyName: 'WBS Gruppe AG',
  //   date: '2021-2022',
  //   slug: 'kursplannung',
  //   sector: 'Learning Management',
  //   myRole: 'UX Strategist & Planner',
  //   gallery: ['/kursplannung-gallery1.jpg'],
  // },
];
