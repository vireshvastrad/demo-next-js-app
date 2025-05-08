// app/api/reset/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Your reset logic here
    // For example, clearing a database or resetting state

    return NextResponse.json({
      message: "Data reset successfully",
      // any other data you want to return
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to reset data" },
      { status: 500 }
    );
  }
}
