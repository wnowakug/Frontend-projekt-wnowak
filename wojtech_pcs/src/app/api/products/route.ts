import { NextResponse } from "next/server";
import products from "@/data/products/pc-sets.json";

export async function GET() {
  return NextResponse.json(products);
}
