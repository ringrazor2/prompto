"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const EditPrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();

  //get the id based off url
  const promptId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);

      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    if (promptId) getPromptDetails();
  }, [promptId]);

  //   const createPrompt = async (e) => {
  //     e.preventDefault();
  //     // for loader
  //     setSubmitting(true);
  //     try {
  //       // Post prompt data to user DB
  //       const response = await fetch("/api/prompt/new", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           prompt: post.prompt,
  //           userId: session?.user.id,
  //           tag: post.tag,
  //         }),
  //       });

  //       if (response.ok) {
  //         router.push("/");
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       // happens regardless
  //       setSubmitting(false);
  //     }
  //   };
  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      //   handleSubmit={createPrompt}
    />
  );
};

export default EditPrompt;
