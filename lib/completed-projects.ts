export type ProjectCategory = "Commercial" | "Industrial" | "Residential";

export type ProjectQuickFacts = {
  type: ProjectCategory;
  area: string;
  scope: string;
};

export type BusinessProject = {
  slug: "lions-pride" | "kiepersol" | "shield-sa" | "solid-build" | "is-motors";
  title: string;
  category: Exclude<ProjectCategory, "Residential">;
  description: string;
  quickFacts: ProjectQuickFacts;
  coverImage: string;
  images: string[];
};

export type ResidentialHighlightsProject = {
  slug: "residential";
  title: "Residential Highlights";
  category: "Residential";
  description: string;
  coverImage: string;
  beforeAfterSections: Array<{
    title: string;
    beforeImage: string;
    afterImage: string;
    note: string;
  }>;
  galleryImages: string[];
};

export type CompletedProject = BusinessProject | ResidentialHighlightsProject;

const PROJECT_IMAGE_LIONS_PRIDE =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716760/imgi_30_a332d58ef863ecc1b53a78e53d167caa_upscayl_8x_hmqrlk.jpg";
const PROJECT_IMAGE_KIEPERSOL =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770715648/imgi_11_342443b7a28b3548c90ec838ef528f54_upscayl_4x_c9qica.jpg";
const PROJECT_IMAGE_IS_MOTORS =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716577/imgi_33_24d77577fe36f8e1a58b9a92278d3ae2_upscayl_4x_zxx6u3.jpg";
const PROJECT_IMAGE_SHIELD_SA =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716875/imgi_17_2564cdef103459a5f155dc82bb349b2f_upscayl_8x_zdtq1x.jpg";
const PROJECT_IMAGE_SOLID_BUILD =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716918/imgi_23_af5b59174e10a8d12b9061431ea4ce26_upscayl_8x_smr2dy.jpg";

const RESIDENTIAL_DOORS =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725348/DOORS_jgtpmv.jpg";
const RESIDENTIAL_WINDOWS =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725361/WINDOWS_dlvucn.jpg";
const RESIDENTIAL_SHOWERS =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725362/Showers_kxlaod.jpg";
const RESIDENTIAL_MIRRORS =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725350/MIRRORS_bmyg6e.jpg";
const RESIDENTIAL_SHOPFRONTS =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725355/SHOPFRONTS_ysq4ma.jpg";
const RESIDENTIAL_BALUSTRADES =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725349/Balustrades_tqomgo.jpg";

export const completedProjects: CompletedProject[] = [
  {
    slug: "lions-pride",
    title: "Lions Pride",
    category: "Commercial",
    description: "Shopfront glazing and aluminium systems for a high-traffic site.",
    quickFacts: {
      type: "Commercial",
      area: "Gauteng",
      scope: "Shopfront glazing, doors, and finishing work",
    },
    coverImage: PROJECT_IMAGE_LIONS_PRIDE,
    images: [
      PROJECT_IMAGE_LIONS_PRIDE,
      PROJECT_IMAGE_KIEPERSOL,
      PROJECT_IMAGE_IS_MOTORS,
      PROJECT_IMAGE_LIONS_PRIDE,
    ],
  },
  {
    slug: "kiepersol",
    title: "Kiepersol",
    category: "Commercial",
    description: "Clean, modern glazing work delivered with controlled turnaround.",
    quickFacts: {
      type: "Commercial",
      area: "Gauteng",
      scope: "Aluminium glazing, fitting, and site finishing",
    },
    coverImage: PROJECT_IMAGE_KIEPERSOL,
    images: [
      PROJECT_IMAGE_KIEPERSOL,
      PROJECT_IMAGE_LIONS_PRIDE,
      PROJECT_IMAGE_SOLID_BUILD,
      PROJECT_IMAGE_KIEPERSOL,
    ],
  },
  {
    slug: "shield-sa",
    title: "SHIELD SA",
    category: "Industrial",
    description: "Industrial glazing and durable aluminium installation work.",
    quickFacts: {
      type: "Industrial",
      area: "Gauteng",
      scope: "Industrial glazing, aluminium systems, and compliance finish",
    },
    coverImage: PROJECT_IMAGE_SHIELD_SA,
    images: [
      PROJECT_IMAGE_SHIELD_SA,
      PROJECT_IMAGE_SOLID_BUILD,
      PROJECT_IMAGE_IS_MOTORS,
      PROJECT_IMAGE_KIEPERSOL,
      PROJECT_IMAGE_SHIELD_SA,
      PROJECT_IMAGE_LIONS_PRIDE,
    ],
  },
  {
    slug: "solid-build",
    title: "Solid Build",
    category: "Industrial",
    description: "Large-scale project support with consistent quality control.",
    quickFacts: {
      type: "Industrial",
      area: "Gauteng",
      scope: "Supply, install, and site coordination",
    },
    coverImage: PROJECT_IMAGE_SOLID_BUILD,
    images: [
      PROJECT_IMAGE_SOLID_BUILD,
      PROJECT_IMAGE_SHIELD_SA,
      PROJECT_IMAGE_IS_MOTORS,
      PROJECT_IMAGE_LIONS_PRIDE,
      PROJECT_IMAGE_SOLID_BUILD,
      PROJECT_IMAGE_KIEPERSOL,
    ],
  },
  {
    slug: "is-motors",
    title: "I&S Motors",
    category: "Industrial",
    description: "Practical glazing solutions designed for daily operational use.",
    quickFacts: {
      type: "Industrial",
      area: "Gauteng",
      scope: "Glazing, doors, and durable installation work",
    },
    coverImage: PROJECT_IMAGE_IS_MOTORS,
    images: [
      PROJECT_IMAGE_IS_MOTORS,
      PROJECT_IMAGE_SOLID_BUILD,
      PROJECT_IMAGE_SHIELD_SA,
      PROJECT_IMAGE_KIEPERSOL,
      PROJECT_IMAGE_IS_MOTORS,
      PROJECT_IMAGE_LIONS_PRIDE,
    ],
  },
  {
    slug: "residential",
    title: "Residential Highlights",
    category: "Residential",
    description: "A curated snapshot of our residential glass and aluminium work.",
    coverImage: RESIDENTIAL_SHOWERS,
    beforeAfterSections: [
      {
        title: "Shower Upgrades",
        beforeImage: RESIDENTIAL_SHOWERS,
        afterImage: RESIDENTIAL_SHOWERS,
        note: "Clean lines, precise fitment, and a premium finish.",
      },
      {
        title: "Doors & Openings",
        beforeImage: RESIDENTIAL_DOORS,
        afterImage: RESIDENTIAL_DOORS,
        note: "Improved airflow, security, and everyday usability.",
      },
    ],
    galleryImages: [
      RESIDENTIAL_SHOWERS,
      RESIDENTIAL_DOORS,
      RESIDENTIAL_MIRRORS,
      RESIDENTIAL_WINDOWS,
      RESIDENTIAL_BALUSTRADES,
      RESIDENTIAL_SHOPFRONTS,
    ],
  },
];

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
];

export function getCompletedProjectBySlug(slug: string) {
  return completedProjects.find((project) => project.slug === slug);
}

