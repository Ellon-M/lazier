import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/dbconnect";
import Article from "@/models/Article";
// import User from "@/models/User";

export const GET = async (request: NextRequest) => {

  try {
    await connect();

    const { email } = await request.json();
    const articles = await Article.find(email && { email });

    return NextResponse.json(articles, { status: 200 });
  } catch (err) {
    return NextResponse.json("Database Error", { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const newArticle = new Article(body);

  try {
    await connect();

    await newArticle.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
