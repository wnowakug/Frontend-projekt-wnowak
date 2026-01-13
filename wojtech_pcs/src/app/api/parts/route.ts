import { NextResponse } from "next/server";

import cpus from "@/data/parts/cpus.json";
import gpus from "@/data/parts/gpus.json";
import rams from "@/data/parts/rams.json";
import drives from "@/data/parts/drives.json";

export async function GET() {
  return NextResponse.json({
    cpus,
    gpus,
    rams,
    drives
  });
}

