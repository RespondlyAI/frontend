import { NextResponse } from "next/server"

import { domainCatalog } from "../../../../lib/domain-catalog"

export async function GET() {
  return NextResponse.json({ domains: domainCatalog })
}
