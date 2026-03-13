import { NextResponse } from "next/server"

import { companyTypeCatalog } from "../../../../lib/domain-catalog"

export async function GET() {
  return NextResponse.json({ options: companyTypeCatalog })
}
