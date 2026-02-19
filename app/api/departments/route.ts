import { NextResponse } from "next/server";

const DEPARTMENTS_API_URL = process.env.DEPARTMENTS_API_URL || "";

export async function GET() {
  try {
    const res = await fetch(DEPARTMENTS_API_URL, {
      headers: { "Accept": "application/json" },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to load departments", departments: [] },
        { status: res.status }
      );
    }

    const data = await res.json();
    const departments = Array.isArray(data.departments) ? data.departments : [];
    return NextResponse.json({ departments });
  } catch (err) {
    console.error("Departments API error:", err);
    return NextResponse.json(
      { error: "Failed to load departments", departments: [] },
      { status: 500 }
    );
  }
}
