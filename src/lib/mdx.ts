"use server"; 

import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import {  ArtikelProps } from "@/utils/types";

const postsDirectory = path.join(process.cwd(), "src/mdx/artikel");

export async function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");

      const { frontmatter } = await compileMDX<ArtikelProps>({
        source: fileContent,
        options: { parseFrontmatter: true },
      });

      return {
        slug: filename.replace(".mdx", ""), 
        title: frontmatter.title,
        date: frontmatter.date,
        author: frontmatter.author,
        imageSrc: frontmatter.imageSrc,
        imageAlt: frontmatter.imageAlt

      };
    })
  );

  return posts;
}
