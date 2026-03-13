import { NextResponse } from "next/server"

import { memberSizeCatalog } from "../../../../lib/domain-catalog"

export async function GET() {
  return NextResponse.json({ options: memberSizeCatalog })
}
