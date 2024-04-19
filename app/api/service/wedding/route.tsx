import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Bridal Beauty Package",
    description:
      "Wedding Trial Hair | Wedding Trial Makeup | Wedding Day Hair | Wedding Day Makeup",
    duration: 90,
    price: 1999,
  },
  {
    id: 2,
    name: "Glam Squad Package",
    description:
      "Bridal Party Hair Downstyle | Bridal Party Hair Upstyle | Bridal Party Makeup",
    duration: 60,
    price: 2499,
  },
  {
    id: 3,
    name: "Little Princess Package",
    description: "Flower Girl Hair",
    duration: 30,
    price: 499,
  },
];

export async function GET(request: Request) {
  return NextResponse.json({ data });
}
