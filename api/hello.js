import { Canvas } from "skia-canvas";

export async function GET(request) {
	const canvas = new Canvas(512, 512);
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "red";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	const buffer = await canvas.toBuffer();

	return new Response(buffer);
}
