import Link from "next/link";
import Image from "next/image";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my4 flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="/images/chem.png"
            alt="Example"
            width={1280}
            height={720}
            className="rounded-lg shadow-lg"
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            テクノロジー
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Nextの勉強
          </Link>
          <p className="text-sm pb-3 text-slate-900">
            nineball, 2024/08/12公開
          </p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam iure
            voluptate vero corrupti amet ipsa eum consequuntur totam expedita
            hic, sit dolorem corporis error laboriosam necessitatibus? Libero
            fugit voluptates accusamus.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
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
