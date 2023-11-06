"use client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
export default async function Home() {
  const fetchData = async () => {
    const blogs = await fetch("http://localhost:3000/api/blogs").then(
      (response) => response.json()
    );
    return blogs.message
  };
  
  const blogs= await fetchData()
  return (
    <>
      <style jsx>{`
        .myImg {
        }
        h3 {
          font-size: 16px;
        }
        .mySpan {
          background: rgb(238, 238, 251);
          background: radial-gradient(
            circle,
            rgba(238, 238, 251, 1) 0%,
            rgba(229, 229, 255, 1) 35%,
            rgba(192, 237, 246, 1) 100%
          );
        }
      `}</style>
      <main className="flex min-h-screen flex-col items-center">
        <div className="z-10 items-center justify-between font-mono text-sm lg:flex mySpan">
          <h1>
            <span className="">Hunting Coder:&nbsp;</span>
          </h1>
          <p className="fixed bold left-0 top-0 flex w-full justify-center border-b border-gray-200 bg-gradient-to-b from-zinc-100 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono">
              A Blog For Hunting Geeks By a Hunting Geek!
            </code>
          </p>
        </div>
        <div className="imageWrap">
          <Image
            className="myImg"
            src="/image/coder.avif"
            alt={""}
            width={200}
            height={300}
          />
        </div>

        <div className="blogs">
          <h2 className="font-bold gradi pb-3 pt-2">Popular Blogs</h2>
          <div className="flex items-center justify-between font-mono text-sm ">
        {blogs.map((blogData: { slug: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; content: string; author: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => (
          <div className={`blogcard`} key={index}>
            <Link href={`/blog/${blogData?.slug}`}>
              <h2 className="font-bold pb-3">{blogData?.title}</h2>
            </Link>
            <p>{blogData?.content.substr(0, 400)}</p>
            <div className="pt-3">Author: {blogData?.author}</div>
          </div>
        ))}
      </div>
          {/* <div className="blogItem">
            <h3 className="font-bold">How To Learn Javascript</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, dolorem rerum, quidem aspernatur iure, eos odit ut
              error fugit eveniet blanditiis. Blanditiis tempora maxime sunt.
            </p>
          </div>
          <div className="blogItem">
            <h3 className="font-bold">How To Learn ReactJs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, dolorem rerum, quidem aspernatur iure, eos odit ut
              error fugit eveniet blanditiis. Blanditiis tempora maxime sunt.
            </p>
          </div>
          <div className="blogItem">
            <h3 className={"font-bold"}>How To Learn NextJs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, dolorem rerum, quidem aspernatur iure, eos odit ut
              error fugit eveniet blanditiis. Blanditiis tempora maxime sunt.
            </p>
          </div>
          <div className="blogItem">
            <h3 className="font-bold">How To Learn RemixJS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, dolorem rerum, quidem aspernatur iure, eos odit ut
              error fugit eveniet blanditiis. Blanditiis tempora maxime sunt.
            </p>
          </div> */}
        </div>
      </main>
      <Script src="script.js" strategy="lazyOnload"></Script>
    </>
  );
}
