import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { readFile } from "fs/promises";
import { existsSync } from "fs";
import mime from "mime";

export async function GET(req: NextRequest, { params }: { params: { filename: string } }) {
    const { filename } = await params;

    try {
        const filePath = path.join(process.cwd(), "files", filename);

        if (!existsSync(filePath)) {
            return NextResponse.json({ error: "File not found" }, { status: 404 });
        }

        const mimeType = mime.getType(filePath) || "application/octet-stream";
        const fileBuffer = await readFile(filePath);

        const headers = new Headers();
        headers.set('Content-Type', mimeType);
        headers.set('Content-Disposition', `attachment; filename="${filename}"`);
        return new Response(fileBuffer, {
            status: 200,
            headers: headers,
        });
    }
    catch (error) {
        // Log the error for debugging purposes on the server
        console.error(`Error downloading file ${filename}:`, error);

        // Return a 404 error if the file is not found (a common reason for failure)
        return new Response(`File not found: ${filename}`, { status: 404 });
    }
}