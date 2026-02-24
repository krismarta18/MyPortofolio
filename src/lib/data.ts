export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: "Freelance" | "Personal" | "PT Bank Negara Indonesia (Persero) Tbk" | "PT Mega Auto Finance"
  ;
  image: {
    src: string;
    alt: string;
    year?: string;
  };
};

export const PROJECTS: Project[] = [
  {
    title: "Seewash — Laundry Management System",
    description:
      "Pengembangan sistem pemesanan laundry disekitar, end to end mencakup aplikasi mobile, API, dan database. Fitur utama: katalog layanan, pemesanan, pelacakan status yang terintegrasi dengan Seewash Partner, dan manajemen pelanggan untuk laundry.",
    tech: ["ASP.NET Core", "SQL Server", "Android Studio", "Docker", "GitHub Actions", "Firebase"],
    category: "Personal",
    image: {
      src: "/globe.svg",
      alt: "Seewash system preview placeholder",
        year: "2021 - Sekarang",
    },
  },
  {
    title: "Seewash Partner",
    description:
       "Pengembangan aplikasi dan API untuk kebutuhan mitra dengan sistem kontrol akses berbasis status langganan, integrasi dengan sistem utama, serta sinkronisasi data operasional secara terpusat.",
    tech: ["ASP.NET Core", "SQL Server", "Android Studio", "Docker", "GitHub Actions", "Firebase"],
    category: "Personal",
    image: {
      src: "/globe.svg",
      alt: "Seewash Partner preview placeholder",
        year: "2021 - Sekarang",
    },
  },
  {
    title: "WhatsApp Automation System",
    description:
      "Membangun sistem automation WhatsApp berbasis backend API sebagai source of truth, terintegrasi dengan WhatsApp Gateway (Baileys) dan workflow automation (n8n) untuk auto-reply faq",
    tech: ["Node.js", "Baileys", "n8n", "Supabase"],
    category: "Personal",
    image: {
      src: "/file.svg",
      alt: "WhatsApp automation preview placeholder",
        year: "2026",
    },
  },
  {
    title: "Digisales - Application For Sales Team",
    description:
      "Mengembangkan aplikasi internal untuk tim sales dengan fitur utama: menawarkan produk perusahaan, mengelola leads, dan reporting closing/tidak closing.",
    tech: [".NET Core", "SQL Server", "Entity Framework", "Job Scheduler"],
    category: "PT Bank Negara Indonesia (Persero) Tbk",
    image: {
      src: "/lock.svg",
      alt: "Digisales - Application For Sales Team",
        year: "2021 - 2024",
    },
  },
  {
    title: "BNI Move - Application For Sales Team",
    description:
      "Mengembangkan aplikasi internal untuk tim sales dengan fitur utama yaitu memfasilitasi pengajuan kredit KUR untuk calon nasabah dan melakukan survey lapangan untuk calon nasabah yang sudah mengajukan kredit KUR.",
    tech: [".NET Core", "SQL Server", "Job Scheduler",".NET Framework","Entity Framework"],
    category: "PT Bank Negara Indonesia (Persero) Tbk",
    image: {
      src: "/lock.svg",
      alt: "BNI Move - Application For Sales Team",
        year: "2021 - 2024",
    },
  },
  {
    title: "Fincore - Application Finance Core System",
    description:
      "Mengembangakn sistem core finance untuk kebutuhan internal perusahaan dengan fitur utama yaitu memfasilitasi pengajuan kredit, manajemen data nasabah, dan reporting untuk kebutuhan internal perusahaan.",
    tech: ["Node.js", "Baileys", "n8n", "Supabase"],
    category: "PT Mega Auto Finance",
    image: {
      src: "/lock.svg",
      alt: "Fincore - Application Finance Core System",
        year: "2024 - Sekarang",
    },
  },
  {
    title: "SRSM - Application For Internal Company",
    description: "Membangun sistem untuk melakukan tracking dan monitoring layanan yang diberikan perusahaan kepada klien, dengan fitur utama yaitu manajemen data layanan, manajemen data klien, dan reporting.",
    tech: ["Node.js", "Baileys", "n8n", "Supabase"],
    category: "Freelance",
    image: {
      src: "/send.svg",
      alt: "SRSM - Application For Internal Company",
        year: "2025 ",
    },
  },
  {
    title: "Medical Check up Reporting",
    description:
      "Membangun sistem untuk melakukan reporting hasil medical check up dengan fitur utama yaitu manajemen data pasien, manajemen data hasil medical check up, dan reporting.",
    tech: ["Node.js", "Baileys", "n8n", "Supabase"],
    category: "Freelance",
    image: {
      src: "/send.svg",
      alt: "Medical Check up Reporting",
        year: "2019",
    },
  },
  {
    title: "Absensi Karyawan Internal Company",
    description:
      "Membangun sistem untuk melakukan absensi karyawan internal perusahaan dengan fitur utama yaitu manajemen data karyawan, manajemen data absensi, dan reporting.",
    tech: ["Node.js", "Baileys", "n8n", "Supabase"],
    category: "Freelance",
    image: {
      src: "/send.svg",
      alt: "Absensi Karyawan Internal Company",
        year: "2018",
    },
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Backend",
    items: ["ASP.NET Core (Web API)", "Store Procedure",
         "Node.js (Express)", 
         "Golang (basic)",
         "Python (basic)",
         "System Integration",
          "REST API Design",
           "Authentication & Authorization",
         "API Documentation (Swagger/OpenAPI)",
        "Global Error Handling & Logging",
    "Standardizasi API Response"],
  },
  {
    title: "Database",
    items: ["Microsoft SQL Server","Indexing","Query Optimization","Database Design", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    title: "DevOps & Deployment",
    items: ["Docker","Reverse Proxy","Environment Configuration",
        "GitHub Actions",
         "Linux VPS",
          "NGINX", 
          "Tailscale"],
  },
  {
    title: "Automation & Integration",
    items: ["n8n", "Workflow Automation"    ],
  },
  {
    title: "Frontend & Mobile",
    items: ["Next.js (basic)", "JavaScript", "Bootstrap", "Android (Java)",
        "Razor Pages","HTML/CSS","Tailwind CSS","API Integration (Fetch/Axios)",
        "Rest API Integration (Android)","Google Maps API (Android)",
        "Firebase Integration (Android)"
    ],
  },
  {
    title: "Tools",
    items: ["Github","GitLab", "VS Code","Visual Studio 2022", "Android Studio","Navicat","Postman",
        "Figma", "Microsoft Office (Word, Excel, PowerPoint)",
         "Google Workspace (Docs, Sheets, Slides)", 
         "SQL Server Management Studio (SSMS)",
         "Tailscale", "n8n Automation"],
  },
];
