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

const LIONS_PRIDE_IMAGES = [
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716764/imgi_32_5947516a6956b83d2c093275857f5449_upscayl_8x_dwh4gh.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716762/imgi_31_a072e685090676717eb4b4aca727c5ba_upscayl_8x_h2oysq.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716760/imgi_30_a332d58ef863ecc1b53a78e53d167caa_upscayl_8x_hmqrlk.jpg",
];

const KIEPERSOL_IMAGES = [
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770715647/imgi_9_a448e5c8b2ca7718b9f435219d4abc99_upscayl_4x_y7ruwu.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770715648/imgi_11_342443b7a28b3548c90ec838ef528f54_upscayl_4x_c9qica.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770715648/imgi_10_e0b587995ccf782be799c270eba13ef6_upscayl_4x_wskhaf.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770715650/imgi_12_d689358fea4d44aa9fdae64af1483383_upscayl_4x_b9r0jn.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770715652/imgi_13_6f5a22b1866fb2ddda0267c7e05d0784_upscayl_4x_gsfsq9.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770715654/imgi_14_50d83bd72b4e7aa7587486ec7ccffb1f_upscayl_4x_a8nedz.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770715656/imgi_15_4d3131d6b22cec158706b0583c363fe4_upscayl_4x_m5cn95.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770715658/imgi_16_b57389fa9a219f6816b0b3594c7d6208_upscayl_4x_m38ngt.jpg",
];

const IS_MOTORS_IMAGES = [
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770796284/SHOPFRONTS_fyjqxp.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716577/imgi_33_24d77577fe36f8e1a58b9a92278d3ae2_upscayl_4x_zxx6u3.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716580/imgi_36_3b89b4c225ce023b4bebbca5a017dc0e_upscayl_4x_rrvafn.jpg",
];

const SHIELD_SA_IMAGES = [
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716875/imgi_17_2564cdef103459a5f155dc82bb349b2f_upscayl_8x_zdtq1x.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716877/imgi_18_cb0bba61e887801e0954ac97b0ada6ca_upscayl_8x_swhzwj.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716878/imgi_19_48ce98327e7ec1f4d954c218430cc14d_upscayl_8x_dyehuu.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716881/imgi_20_a2e1a0195be54f2f890239de5a21fa93_upscayl_8x_qdtfqc.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716884/imgi_21_edfe7beb52eacee75a7f1a3b284e02aa_upscayl_8x_uxkgww.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716885/imgi_22_1344724d7835b14f6dc6bdeb0a214f60_upscayl_8x_netv6t.jpg",
];

const SOLID_BUILD_IMAGES = [
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716918/imgi_23_af5b59174e10a8d12b9061431ea4ce26_upscayl_8x_smr2dy.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716920/imgi_24_4b8c38d8e8488c577a08a8a4e1d6bfdd_upscayl_8x_v5qwua.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716925/imgi_26_85c8f24d9da870a1a25eb6f09106ac96_upscayl_8x_oesc7e.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716925/imgi_25_34c15996965639c0b5171bbb4a490515_upscayl_8x_k6ncsb.jpg",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716927/imgi_27_1590de6fe3880c6ac1125de1a8857c8b_upscayl_8x_pch3m4.jpg",
];

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
    coverImage: LIONS_PRIDE_IMAGES[0],
    images: LIONS_PRIDE_IMAGES,
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
    coverImage: KIEPERSOL_IMAGES[0],
    images: KIEPERSOL_IMAGES,
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
    coverImage: SHIELD_SA_IMAGES[0],
    images: SHIELD_SA_IMAGES,
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
    coverImage: SOLID_BUILD_IMAGES[0],
    images: SOLID_BUILD_IMAGES,
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
    coverImage: IS_MOTORS_IMAGES[0],
    images: IS_MOTORS_IMAGES,
  },
  {
    slug: "residential",
    title: "Residential Highlights",
    category: "Residential",
    description: "A curated snapshot of our residential glass and aluminium work.",
    coverImage:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770800318/Untitled_design_1_jlawsc.jpg",
    beforeAfterSections: [
      {
        title: "Architectural Sliding Door Installation",
        beforeImage:
          "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770799731/before_after_rfjksl.jpg",
        afterImage:
          "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770799729/before_after_1_zo5v1x.jpg",
        note: "Precision-fitted aluminium sliding system for modern living.",
      },
      {
        title: "Custom Aluminium Window Installation",
        beforeImage:
          "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770799728/before_after_2_osegxc.jpg",
        afterImage:
          "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770799730/before_after_3_ur9wim.jpg",
        note: "Energy-efficient aluminium windows built for durability and style.",
      },
    ],
    galleryImages: [
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770800318/Untitled_design_1_jlawsc.jpg",
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770800320/Untitled_design_4_keilsr.jpg",
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770800322/Untitled_design_5_p3oebr.jpg",
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770800324/Untitled_design_6_tij3kg.jpg",
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770800325/Untitled_design_7_qacbmo.jpg",
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
