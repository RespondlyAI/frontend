import { NextResponse } from "next/server"

type CreateMember = {
  username: string
  email: string
  role: string
}

type CreateOrgPayload = {
  orgName?: string
  description?: string
  domain?: string
  website?: string
  companyType?: string
  size?: string
  members?: CreateMember[]
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CreateOrgPayload

    if (!payload.orgName || !payload.domain || !payload.website) {
      return NextResponse.json(
        { message: "orgName, domain and website are required" },
        { status: 400 }
      )
    }

    const members = payload.members || []
    const hasAdmin = members.some((member) => member.role === "admin")

    if (!hasAdmin) {
      return NextResponse.json(
        { message: "At least one admin member is required" },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      id: `org_${Date.now()}`,
      message: "Organization created successfully",
    })
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 })
  }
}
