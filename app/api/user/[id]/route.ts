import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/dbconnect";
import User from "@/models/User";

interface userParams {
  params: { id: string };
}

export const GET = async (request: Request, { params }: userParams) => {
  try {
    const { id } = params;
    await connect();

    const user = await User.findById(id);

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json("Database Error", { status: 500 });
  }
};
