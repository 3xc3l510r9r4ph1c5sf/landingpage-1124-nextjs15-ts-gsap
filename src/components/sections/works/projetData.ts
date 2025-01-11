interface ProjectData {
  id: string;
  title: string;
  companyName: string;
  date: string;
  imageUrl: string;
  color: string;
}

export const projectData: ProjectData[] = [
  {
    id: "01",
    companyName: "WBS AG",
    date: "2023-2024",
    imageUrl: "/project-1.png",
    title: "Trainspot",
    color: "#000000",
  },
  {
    id: "02",
    title: "Project B",
    companyName: "Company B",
    date: "2024-2025",
    imageUrl:
      "https://images.unsplash.com/photo-1676793894040-b6dd72276620?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#8C8C8C",
  },
  {
    id: "03",
    title: "Project C",
    companyName: "Company C",
    date: "2025-2026",
    imageUrl:
      "https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#EFE8D3",
  },
  {
    id: "04",
    title: "Silencio",
    imageUrl: "/project-1.png",
    color: "#706D63",
    companyName: "CompanyD",
    date: "2025-2026",
  },
];
