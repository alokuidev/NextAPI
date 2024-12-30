import { student } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const getprams = await content.params;
  const filterData = student.filter((elem) => elem.id == getprams.id);
  return NextResponse.json(
    filterData.length == 0
      ? { result: "No Data Found", success: false }
      : filterData,
    { status: 200 }
  );
}
