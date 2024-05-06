import { NextResponse } from "next/server";
import { snippetGroups } from "../../../data/snippets";

export async function GET() {
  return NextResponse.json(snippetGroups);
}
