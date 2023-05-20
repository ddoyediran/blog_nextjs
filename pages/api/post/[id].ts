import prisma from "../../../lib/prisma";

// DELETE post. route "/api/post/:id"
export default async function handle(req, res) {
  const postId = req.params.id;

  if (req.method === "DELETE") {
    const post = await prisma.post.delete({
      where: { id: postId },
    });

    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
