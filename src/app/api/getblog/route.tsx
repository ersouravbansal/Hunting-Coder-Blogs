import { promises as fs } from 'fs';
import { NextResponse } from "next/server";
import path from 'path';
// http://localhost:3000/api/getblog?blogpost=how-to-learn-javascript
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const blogpost = searchParams.get('blogpost');
    const filePath = path.join(process.cwd(), `/blogdata/${blogpost}.json`);
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    return NextResponse.json({ message: data });
  } catch (error) {
    // Handle the error here
    console.error("Error occurred:", error);
    return NextResponse.json({ error: 'No Such Blog Found .' }, { status: 500 });
  }
}
