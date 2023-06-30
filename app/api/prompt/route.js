import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
  try {
    await connectToDB();

    // find all posts and populate creator to know who created it - basically a query of DB on creator
    const prompts = await Prompt.find({}).populate("creator");

    // return creator specific prompts
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
