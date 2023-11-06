// "use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "@/styles/blog.module.css";

const Blog = async () => {
  const fetchData = async () => {
  const blogs = await fetch("http://localhost:3000/api/blogs").then(
    (response) => response.json()
  );
  return blogs.message
};

const blogs= await fetchData()

  // const [blogs, setBlogs] = useState([]);
  // console.log(props)
  // useEffect(() => {
  //   console.log("Running effect from all blogs page");
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Data received:", data);
  //       setBlogs(data.message);
  //     })
  //     .catch((error) => {
  //       console.error("Error occurred:", error);
  //     });
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="gradi">
        <h2 className={" font-bold p-10"}>All Blogs</h2>
      </div>
      <div className="flex items-center justify-between font-mono text-sm ">
        {blogs.map((blogData: { slug: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; content: string; author: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => (
          <div className={`${styles.blogItem}`} key={index}>
            <Link href={`/blog/${blogData?.slug}`}>
              <h2 className="font-bold pb-3">{blogData?.title}</h2>
            </Link>
            <p>{blogData?.content.substr(0, 400)}</p>
            <div className="pt-3">Author: {blogData?.author}</div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Blog;
