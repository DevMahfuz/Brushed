import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "Blowout",
    description:
      "From sleek lengths to beach waves, your best hair day awaits.",
    duration: 90,
    price: 50,
    type: "hair",
  },
  {
    id: 2,
    name: "Dry Styling",
    description:
      "Skip the shower. Revive dry, unwashed hair with a fresh style.",
    duration: 30,
    price: 50,
    type: "hair",
  },
  {
    id: 3,
    name: "Updo",
    description: "Take your hair up a notch with the updo of your choice.",
    duration: 60,
    price: 95,
    type: "hair",
  },
  {
    id: 4,
    name: "Special Occasion Hair",
    description:
      "An elevated take on our signature blowout for life’s special moments.",
    duration: 75,
    price: 100,
    type: "hair",
  },
  {
    id: 5,
    name: "Special Occasion Updo",
    description:
      "A luxe updo service for red carpets, galas, photoshoots + more.",
    duration: 90,
    price: 150,
    type: "hair",
  },
  {
    id: 6,
    name: "Haircut + Blowout",
    description:
      "Starts with a consultation, ends with a fresh cut + your favorite blowout.",
    duration: 75,
    price: 100,
    type: "hair",
  },
  {
    id: 7,
    name: "Men's Haircut",
    description:
      "A consultation + cut for all hair types + lengths. (Includes clipper work.)",
    duration: 60,
    price: 80,
    type: "hair",
  },
  {
    id: 8,
    name: "Kids Haircut",
    description: "A custom cut for your little one from our patient pros.",
    duration: 45,
    price: 60,
    type: "hair",
  },

  {
    id: 9,
    name: "Everyday Makeup",
    description:
      "Make your natural features pop with a lighter, faster application. (Available Monday - Friday from 8am - 2pm)",
    duration: 30,
    price: 65,
    type: "makeup",
  },
  {
    id: 10,
    name: "Makeup",
    description:
      "Put your best face forward with day or night makeup by our pros.",
    duration: 60,
    price: 90,
    type: "makeup",
  },
  {
    id: 11,
    name: "Makeup Lesson",
    description: "Become your own pro with a lesson on any makeup technique.",
    duration: 90,
    price: 135,
    type: "makeup",
  },
  {
    id: 12,
    name: "Special Occasion Makeup",
    description:
      "A luxurious, event-ready application for life’s special moments.",
    duration: 90,
    price: 150,
    type: "makeup",
  },

  {
    id: 13,
    name: "Manicure",
    description:
      "Feel perfectly polished + put-together with our signature mani.",
    duration: 45,
    price: 45,
    type: "nails",
  },
  {
    id: 14,
    name: "Pedicure",
    description:
      "Bring glam all the way down to your toes with a signature pedi.",
    duration: 60,
    price: 60,
    type: "nails",
  },
  {
    id: 15,
    name: "Manicure + Pedicure",
    description: "Get pampered + polished with an indulgent mani-pedi.",
    duration: 90,
    price: 90,
    type: "nails",
  },
  {
    id: 16,
    name: "Adult + Kids Manicure",
    description: "Make memories with your mini as you both enjoy a mani.",
    duration: 60,
    price: 75,
    type: "nails",
  },
  {
    id: 17,
    name: "Photoshoots",
    description:
      "Get camera-ready + keep your squad by your side throughout the shoot.",
    duration: 60,
    price: 0,
    type: "events",
  },
  {
    id: 18,
    name: "Events + Group Glam",
    description:
      "From company parties to bachelorettes, customize your group glam sesh.",
    duration: 60,
    price: 0,
    type: "events",
  },
  {
    id: 19,
    name: "Custom",
    description:
      "Not seeing what you want? We’re flexible. Let’s create something you’ll love.",
    duration: 60,
    price: 0,
    type: "events",
  },

  {
    id: 20,
    name: "Wedding Trial Hair",
    description:
      "Get an in-depth consult, step-by-step styling + accessory placement.",
    duration: 90,
    price: 150,
    type: "weddings",
  },
  {
    id: 21,
    name: "Wedding Trial Makeup",
    description:
      "Get an in-depth consult, step-by-step application + false lashes.",
    duration: 90,
    price: 175,
    type: "weddings",
  },
  {
    id: 22,
    name: "Wedding Day Hair",
    description:
      "Work closely with your bridal-certified stylist to create your perfect look.",
    duration: 90,
    price: 150,
    type: "weddings",
  },
  {
    id: 23,
    name: "Wedding Day Makeup",
    description:
      "Work closely with your bridal-certified artist to create your perfect look.",
    duration: 90,
    price: 175,
    type: "weddings",
  },
];

export async function GET(request: Request) {
  return NextResponse.json({ products: products });
}
