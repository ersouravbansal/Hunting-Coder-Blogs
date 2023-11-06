import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(request: Request) {
  try {
    let allBlogs:any = [];
    const dirPath = path.join(process.cwd(), `/blogdata`);
    const data = await fs.readdir(dirPath);
    console.log("data:", data);

    const readFiles = data.map(async (item) => {
      const fileContent = await fs.readFile(path.join(dirPath, item), "utf-8");
      allBlogs.push(JSON.parse(fileContent));
      console.log("allBlogs:", allBlogs);
    });

    await Promise.all(readFiles);

    return NextResponse.json({ message: allBlogs });
  } catch (error) {
    // Handle the error here
    console.error("Error occurred:", error);
    return NextResponse.json(
      { error: "No Such Directory Found ." },
      { status: 500 }
    );
  }
}
