import { NextResponse } from "next/server";
import connect from "@/lib/dbconnect";
import User from "@/models/User";

export const GET = async () => {
  try {
    await connect();
    const users = await User.find({});

    return NextResponse.json(users, { status: 201 });
  } catch (err) {
    return NextResponse.json("Database Error", { status: 500 });
  }
};
