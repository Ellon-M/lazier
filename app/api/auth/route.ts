import User from "@/models/User";
import connect from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export const POST = async () => {
  await connect();
  const newUser = new User({name: "Sithea", email: "sithea@gmail.com", password: "mystrongpass123"});

  try {
    await newUser.save();
    return NextResponse.json("New User Created", {status: 201});
  } catch(err) {
    return NextResponse.json("Database Error", {status: 500});
  }
}