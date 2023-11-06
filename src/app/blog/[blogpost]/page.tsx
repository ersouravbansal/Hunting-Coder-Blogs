"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/blogpost.module.css";
import { useRouter } from "next/router";

export default function Page({ params }: { params: { blogpost: string } }) {
  const [blogTitle, setBlogTitle] = useState();
  const [blogAuthor, setBlogAuthor] = useState();
  const [blogContent, setBlogContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/getblog?blogpost=${params.blogpost}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogTitle(data.message.title);
        setBlogContent(data.message.content);
        setBlogAuthor(data.message.author)

      } catch (error) {
        console.error("Some error occurred", error);
      }
    };

    fetchData();
  }, [blogTitle]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <>
          <h1 className="p-2 ">{blogTitle}</h1>
          <hr />
          <h3>Author: {blogAuthor}</h3>
          <div className="p-2">{blogContent}</div>
        </>
      </main>
    </div>
  );
}
