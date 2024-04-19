import { NextResponse } from "next/server";

const data = [
  {
    cetagory: "Hair",
    services: [
      {
        id: 45,
        name: "Blow Dry",
        price: 139,
      },
      {
        id: 46,
        name: "Blow Dry with Iron",
        price: 159,
      },
      {
        id: 47,
        name: "Blowdry with Curl",
        price: 189,
      },
      {
        id: 48,
        name: "Straighten with Iron",
        price: 129,
      },
      {
        id: 49,
        name: "Keratin Short Hair",
        price: 349,
      },
      {
        id: 50,
        name: "Keratin Medium Hair",
        price: 449,
      },
      {
        id: 51,
        name: "Keratin Long Hair",
        price: 559,
      },
      {
        id: 52,
        name: "Keratin Extra Long Hair",
        price: 659,
      },
      {
        id: 53,
        name: "Keratin Anti Frizz Treatment Short",
        price: 399,
      },
      {
        id: 54,
        name: "Keratin Anti Frizz Treatment Medium",
        price: 499,
      },
      {
        id: 55,
        name: "Keratin Anti Frizz Treatment Long",
        price: 599,
      },
      {
        id: 56,
        name: "Keratin Anti Frizz Treatment Extra Long",
        price: 699,
      },
      {
        id: 57,
        name: "Protein Root Treatment - Root,Root",
        price: 250,
      },
      {
        id: 58,
        name: "Protein Treatment - Short",
        price: 389,
      },
      {
        id: 59,
        name: "Protein Treatment - Medium",
        price: 499,
      },
      {
        id: 60,
        name: "Protein Treatment - Long",
        price: 649,
      },
      {
        id: 61,
        name: "Protein Treatment - Extra Long",
        price: 749,
      },
      {
        id: 62,
        name: "Hair Cut",
        price: 259,
      },
      {
        id: 63,
        name: "Curtain bangs",
        price: 59,
      },
      {
        id: 64,
        name: "Root Touch Up",
        price: 119,
      },
      {
        id: 65,
        name: "Root Touch Up Regrowth",
        price: 139,
      },
      {
        id: 66,
        name: "Full Color",
        price: 220,
      },
      {
        id: 67,
        name: "Balayage / Ombre",
        price: 349,
      },
      {
        id: 68,
        name: "Highlights / Streaks",
        price: 239,
      },
      {
        id: 69,
        name: "Toner/Fashion Color",
        price: 249,
      },
      {
        id: 70,
        name: "Hair Detox",
        price: 39,
      },
    ],
  },
  {
    cetagory: "Nails",
    services: [
      {
        id: 71,
        name: "Manicure",
        price: 59,
      },
      {
        id: 72,
        name: "Classic Manicure",
        price: 69,
      },
      {
        id: 73,
        name: "Gelish Manicure",
        price: 119,
      },
      {
        id: 74,
        name: "French Gelish Manicure",
        price: 139,
      },
      {
        id: 75,
        name: "No Polish Pedicure",
        price: 69,
      },
      {
        id: 76,
        name: "Classic Pedicure",
        price: 89,
      },
      {
        id: 77,
        name: "Gelish Pedicure",
        price: 129,
      },
      {
        id: 78,
        name: "French Gelish Pedicure",
        price: 159,
      },
      {
        id: 79,
        name: "No Polish Mani/ Pedi",
        price: 119,
      },
      {
        id: 80,
        name: "Classic Mani/ Pedi",
        price: 139,
      },
      {
        id: 81,
        name: "Gelish Mani/ Pedi",
        price: 199,
      },
      {
        id: 82,
        name: "Gelish Removal",
        price: 49,
      },
    ],
  },
  {
    cetagory: "Face Care",
    services: [
      {
        id: 83,
        name: "Full Face Threading/Wax",
        price: 79,
      },
      {
        id: 84,
        name: "Upper Lip Threading/Wax",
        price: 20,
      },
      {
        id: 85,
        name: "Lower Lip Threading/Wax",
        price: 20,
      },
      {
        id: 86,
        name: "Eyebrow Threading/Wax",
        price: 39,
      },
      {
        id: 87,
        name: "Eyebrow Tinting",
        price: 69,
      },
      {
        id: 88,
        name: "Forehead Threading/Wax",
        price: 59,
      },
      {
        id: 89,
        name: "Sideface Threading/Wax",
        price: 49,
      },
      {
        id: 90,
        name: "Ear Threading/Wax",
        price: 40,
      },
      {
        id: 91,
        name: "Deep Cleaning",
        price: 119,
      },
      {
        id: 92,
        name: "Face Express",
        price: 199,
      },
      {
        id: 93,
        name: "Brighthening Facial",
        price: 299,
      },
    ],
  },
  {
    cetagory: "Body",
    services: [
      {
        id: 94,
        name: "Halk Arms Wax",
        price: 40,
      },
      {
        id: 95,
        name: "Full Arms Wax",
        price: 69,
      },
      {
        id: 96,
        name: "Half Legs Wax",
        price: 49,
      },
      {
        id: 97,
        name: "Full Legs Wax",
        price: 79,
      },
      {
        id: 98,
        name: "Bikini Wax",
        price: 80,
      },
      {
        id: 99,
        name: "Under Arm Waxing",
        price: 29,
      },
      {
        id: 100,
        name: "Full Body Wax",
        price: 250,
      },
      {
        id: 101,
        name: "Full Body Wax with Bikini",
        price: 399,
      },
      {
        id: 102,
        name: "Forehead Threading",
        price: 25,
      },
      {
        id: 103,
        name: "Eyebrows Threading",
        price: 20,
      },
      {
        id: 104,
        name: "Upper Lip Threading",
        price: 15,
      },
      {
        id: 105,
        name: "Stomach Waxing",
        price: 50,
      },
      {
        id: 106,
        name: "Back Waxing Full/Half",
        price: "59/39",
      },
      {
        id: 107,
        name: "Full Face Threading",
        price: 79,
      },
      {
        id: 108,
        name: "Full Face Waxing",
        price: 89,
      },
    ],
  },
];

export async function GET(request: Request) {
  return NextResponse.json({ data });
}
