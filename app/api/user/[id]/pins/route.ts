import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/dbconnect";
import Pinboard from "@/models/Pinboard";

interface userParams {
  params: { id: string };
}

export const GET = async (request: Request, { params }: userParams) => {
  try {
    const { id } = params;
    await connect();
    console.log(id);

    const pins = await Pinboard.find({ author: id });

    return NextResponse.json(pins, { status: 201 });
  } catch (err) {
    return NextResponse.json("Database Error", { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const newPin = new Pinboard(body);

  try {
    await connect();
    await newPin.save();

    return new NextResponse("New Pinboard Created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


export const PUT = async (request: Request) => {
  const { pinId, newArticles } = await request.json();
  const filter = { _id: pinId };

  try {
    await connect();
    const updatedPin = await Pinboard.findOneAndUpdate(filter, {articles: newArticles}, {new: true});
    return new NextResponse(updatedPin, { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
}