import { NextRequest } from "next/server";

export const maxDuration = 10;

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const response = await fetch(`https://egju5a2jul.execute-api.us-east-2.amazonaws.com/prod/doctalk`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "x-api-key": `0em9WJjxQC242hJ8GRG9W3z2LbQQ7Zp9sm9SEwQ4`,
      },
      body: JSON.stringify({
        prompt: data.prompt,
        data_source: "pinecone_and_octoai",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    return new Response(JSON.stringify(responseData));
  } catch (error) {
    console.error(error);

    return new Response(null, { status: 500 });
  }
}
