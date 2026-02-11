export type TeamContact = {
  name: string;
  role: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  photo: string;
};

export const teamContacts: TeamContact[] = [
  {
    name: "Chris Van Zyl",
    role: "Operations",
    phone: "0827252559",
    phoneDisplay: "082 725 2559",
    email: "chrisvanzyl@jjglass.co.za",
    photo: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770735070/Untitled_20design_20_2__upscayl_4x_byh0gs.jpg",
  },
  {
    name: "Kenny Van Zyl",
    role: "Company Director",
    phone: "0824595073",
    phoneDisplay: "082 459 5073",
    email: "jjglass@mweb.co.za",
    photo: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770735072/Untitled_20design_20_1__upscayl_4x_dlnfy1.jpg",
  },
  {
    name: "Jaques Viljoen",
    role: "Operations",
    phone: "0661291611",
    phoneDisplay: "066 129 1611",
    email: "jacquesv@jjglass.co.za",
    photo: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770735072/Untitled_20design_20_4__upscayl_4x_vvl9wr.jpg",
  },
];
