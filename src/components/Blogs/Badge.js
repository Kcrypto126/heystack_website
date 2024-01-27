import Link from "next/link";

export const Badge = ({ href, name }) => {
  const defaultRoute = `/tag/${href}`;
  return (
    <Link
      href={defaultRoute}
      className="my-4 px-4 py-1 rounded-full bg-slate-100 text-xs w-fit"
    >
      {name}
    </Link>
  );
};
