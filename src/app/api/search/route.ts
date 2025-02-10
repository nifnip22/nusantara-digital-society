import { getAllPosts } from '@/lib/mdx';
import Fuse from "fuse.js";

export async function GET(req: Request) {
const posts = await getAllPosts();
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("search") || "";
  const fuse = new Fuse(posts, { keys: ["title"], threshold: 0.3 });
  const results = query ? fuse.search(query).map(({ item }) => item) : posts;

  return Response.json(results);
}
