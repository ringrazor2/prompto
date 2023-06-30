import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// exact same as prompt route instead we add additional params due to dynamic route (look at folder structure)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    // specifying creator as params will give only prompts from that user
    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    // return creator specific prompts
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
