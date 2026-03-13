import { NextResponse } from "next/server"

import { memberRoleCatalog } from "../../../../lib/domain-catalog"

export async function GET() {
  return NextResponse.json({ options: memberRoleCatalog })
}
