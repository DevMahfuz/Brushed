import { NextResponse } from "next/server";

const data = [
  {
    cetagory: "Combos & Bundles",
    services: [
      {
        id: 1,
        name: "Haircut & beard styling (any style of Haricut and Beard)",
        price: 159,
      },
      {
        id: 2,
        name: "Haircut & 15 mins Head Massage Combo",
        price: 119,
      },
      {
        id: 3,
        name: "Haircut and hair color",
        price: 229,
      },
      {
        id: 4,
        name: "Pamper Yourself Package (haircut, beard, mani, padi)",
        price: 199,
      },
      {
        id: 5,
        name: "Haircut Bundle (3 sessions)",
        price: 249,
      },
      {
        id: 6,
        name: "Hearcut and Beard Bundle (3 sessions)",
        price: 399,
      },
    ],
  },
  {
    cetagory: "Haircut",
    services: [
      {
        id: 7,
        name: "Premium Haircut",
        price: 99,
      },
      {
        id: 8,
        name: "Premium Haircut (Professional Fade)",
        price: 109,
      },
      {
        id: 9,
        name: "Premium Haircut (Complete new look)",
        price: 119,
      },
      {
        id: 10,
        name: "Haircut for Boys (12 yrs or below)",
        price: 79,
      },
    ],
  },
  {
    cetagory: "BeardCut",
    services: [
      {
        id: 11,
        name: "Clean shave",
        price: 65,
      },
      {
        id: 12,
        name: "Premium Beard Trimming",
        price: 69,
      },
      {
        id: 13,
        name: "Premium Beard Styling (Long beard)",
        price: 79,
      },
      {
        id: 14,
        name: "Arabic Beard Fade",
        price: 89,
      },
      {
        id: 15,
        name: "Scissor Beard Sculpt : For Patchy Beard",
        price: 99,
      },
      {
        id: 16,
        name: "Add on: Mustash Trimming",
        price: 29,
      },
    ],
  },
  {
    cetagory: "Hair Treatment",
    services: [
      {
        id: 17,
        name: "Hair color (Short)",
        price: 169,
      },
      {
        id: 18,
        name: "Hair Color(Medium)",
        price: 199,
      },
      {
        id: 19,
        name: "Hair Color(Long)",
        price: 239,
      },
      {
        id: 20,
        name: "Hair Mask",
        price: 149,
      },
      {
        id: 21,
        name: "Dandruff Scalp Care Treatment (Short)",
        price: 99,
      },
      {
        id: 22,
        name: "Dandruff Scalp Care Treatment (Med)",
        price: 129,
      },
      {
        id: 23,
        name: "Dandruff Scalp Care Treatment (Long)",
        price: 149,
      },
      {
        id: 24,
        name: "Beard color",
        price: 59,
      },
      {
        id: 25,
        name: "Keratine Treatment (Short)",
        price: 329,
      },
      {
        id: 26,
        name: "Keratine Treatment (Med)",
        price: 379,
      },
      {
        id: 27,
        name: "Keratine Treatment (Long)",
        price: 429,
      },
    ],
  },
  {
    cetagory: "Skin/Body Care",
    services: [
      {
        id: 28,
        name: "Back Wax",
        price: 99,
      },
      {
        id: 29,
        name: "Chest Wax",
        price: 99,
      },
      {
        id: 30,
        name: "Nose Wax",
        price: 29,
      },
      {
        id: 31,
        name: "Ear Wax",
        price: 29,
      },
      {
        id: 32,
        name: "Back Trimming",
        price: 49,
      },
      {
        id: 33,
        name: "Chest Trimming",
        price: 49,
      },
    ],
  },
  {
    cetagory: "Face Care",
    services: [
      {
        id: 34,
        name: "Charcoal Face Mask (Level 3)",
        price: 49,
      },
      {
        id: 35,
        name: "Express Facial (Casmara Mask)",
        price: 139,
      },
      {
        id: 36,
        name: "De-TAN Facial",
        price: 129,
      },
      {
        id: 37,
        name: "Dr. Renaud Signature Facial",
        price: 179,
      },
      {
        id: 38,
        name: "Add on: Cheeks Threading",
        price: 29,
      },
      {
        id: 39,
        name: "Add on: Black Head strip",
        price: 19,
      },
    ],
  },
  {
    cetagory: "Nails",
    services: [
      {
        id: 40,
        name: "Mani",
        price: 89,
      },
      {
        id: 41,
        name: "Padi",
        price: 109,
      },
      {
        id: 42,
        name: "Mani and Padi",
        price: 159,
      },
    ],
  },
  {
    cetagory: "Massage",
    services: [
      {
        id: 43,
        name: "Head, Neck & Shoulder Massage",
        price: 35,
      },
      {
        id: 44,
        name: "Head, Neck & Shoulder Massage",
        price: 35,
      },
    ],
  },
];

export async function GET(request: Request) {
  return NextResponse.json({ data });
}
