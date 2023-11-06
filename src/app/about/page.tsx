import React from "react";
import styles from "@/styles/about.module.css"; //component level css
import Image from "next/image";
const About = () => {
  return (
    <>
      <h1 className={`${styles.heading_about} ${styles.center_align}`}>
        {" "}
        Lets Explore More About Hunting Coders
      </h1>
      
      <div className={`${styles.container}`}>
        <div className={` ${styles.row} ${styles.flex_item}`}>
          <div className={`${styles.column1}`}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              rerum natus aut, modi, harum consequatur tempore et animi aliquid
              explicabo id, quod quia dolorum quasi ratione temporibus est
              commodi adipisci! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vero sapiente facere perspiciatis repellat. Est
              iure, pariatur non eos mollitia maiores omnis sed. Mollitia eos
              suscipit veniam fugit magnam distinctio, cum necessitatibus nam
              omnis quisquam cupiditate blanditiis placeat. Odit, consequatur
              impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vero sapiente facere perspiciatis repellat. Est iure, pariatur non
              eos mollitia maiores omnis sed. Mollitia eos suscipit veniam fugit
              magnam distinctio, cum necessitatibus nam omnis quisquam
              cupiditate blanditiis placeat. Odit, consequatur impedit! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente
              facere perspiciatis repellat. Est iure, pariatur non eos mollitia
              maiores omnis sed. Mollitia eos suscipit veniam fugit magnam
              distinctio, cum necessitatibus nam omnis quisquam cupiditate
              blanditiis placeat. Odit, consequatur impedit!
            </p>
          </div>
          <div className={`${styles.column2}`}>
            {" "}
            <Image
              src={"/image/coder.avif"}
              width={400}
              height={600}
              alt={""}
            />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, in id
          quis nihil natus vel sint, molestiae labore laudantium illo, eius
          doloribus voluptate! Quasi culpa magni eveniet doloribus corporis,
          atque eius explicabo ipsa neque inventore delectus dolore praesentium
          distinctio totam fuga debitis tempore. Voluptatum quis laborum dolorem
          repudiandae assumenda dolorum laboriosam rerum eveniet esse aspernatur
          autem accusantium, pariatur voluptates incidunt?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente
          facere perspiciatis repellat. Est iure, pariatur non eos mollitia
          maiores omnis sed. Mollitia eos suscipit veniam fugit magnam
          distinctio, cum necessitatibus nam omnis quisquam cupiditate
          blanditiis placeat. Odit, consequatur impedit!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit a earum iusto neque nulla voluptate architecto esse
          molestias soluta, facilis, aut porro exercitationem voluptatibus eaque
          tempora minima sunt accusamus dolorum?
        </p>
      </div>
    </>
  );
};

export default About;
