import Link from "next/link";
import Image from "next/image";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="/images/chem.png"
            alt="Example"
            width={1280}
            height={720}
            className="rounded-lg shadow-lg"
          />
        </Link>
        <div>
          <Link href="#">テクノロジー</Link>
          <Link href="#">Nextの勉強</Link>
          <p>nineball, 2024/08/12公開</p>
          <a href="#">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam iure
            voluptate vero corrupti amet ipsa eum consequuntur totam expedita
            hic, sit dolorem corporis error laboriosam necessitatibus? Libero
            fugit voluptates accusamus.
          </a>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;

{
  /* <a href="https://unsplash.com/@ymoran?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
  Yucel Moran
</a>; */
}
