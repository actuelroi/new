

import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";


interface iAppProps {
    id?: number;
    title?: string;
    slug?: string;
    excerpt?: string;
    coverImage?: string;
    date: string;
}



const SingleBlog = ({title, coverImage, excerpt, date, slug}: iAppProps) => {
  return (
    <div className="flex flex-col  mt-8" data-wow-delay=".1s">
      <div className="mb-2 overflow-hidden rounded ">
        <Link href={`/blogs/${slug}`} aria-label="blog cover" className="block">
          <Image
            src={coverImage!}
            alt="image"
            className="w-full transition group-hover:rotate-6 group-hover:scale-125"
            width={408}
            height={272}
            objectFit="contain"
          />
        </Link>
      </div>
      <div>
        <span className="mb-2 inline-block rounded bg-[#DC2626] px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
          {format(new Date(date), "dd MMM yyyy")}
        </span>
        <h3>
          <Link
            href={`/blogs/${slug}`}
            className="mb-1 inline-block text-lg font-semibold text-dark hover:text-[#DC2626] dark:text-white dark:hover:text-primary "
          >
            {title}
          </Link>
        </h3>
        <p className="text-sm  text-body-color  ">{excerpt}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
