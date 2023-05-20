import prisma from "../../../lib/prisma";

// PUT method to update published field
export default async function handle(req, res) {
  const postId = req.params.id;

  const post = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      published: true,
    },
  });

  res.json(post);
}
