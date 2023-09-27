import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/dbconnect";
import Article from "@/models/Article";

export const GET = async (request: Request) => {
  const { id } = await request.json();

  try {
    await connect();
    const articles = await Article.find({ author: id });

    return NextResponse.json(articles, { status: 201 });
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

    return new NextResponse("Article has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
