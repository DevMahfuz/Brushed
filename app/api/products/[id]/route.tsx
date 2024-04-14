import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const { id } = request.;
//   return NextResponse.json({ id: id });
// }

const productArry = [
  {
    id: 23,
    name: "Wedding Day Makeup",
    description:
      "Work closely with your bridal-certified artist to create your perfect look.",
    duration: 90,
    price: 175,
    type: "weddings",
    addOns: [
      {
        name: "Braid",
        description: "Add a braid — French, fishtail, classic + beyond.",
        price: 50,
      },
      {
        name: "Braid",
        description: "Add a braid — French, fishtail, classic + beyond.",
        price: 50,
      },
    ],
    WhatToExpect:
      "After a personalized consultation, your stylist will create your desired look using the latest tools and luxe products.",
    HowToPrepare:
      "Shampoo 10-15 minutes before your appointment. Hair should be clean and damp (but not soaking wet) when your stylist arrives. Please have a place for your stylist to set up near an electrical outlet",
  },
];

export async function GET(request, context: { params }) {
  const id = context.params.id; // '1'
  let parsId = Number(id);
  return NextResponse.json({ id: parsId });
}
