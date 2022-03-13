import Link from "next/link";

function Button(props) {
  return (
    <Link href={props.link}>
      <a className="cursor-pointer text-inherit bg-green-500 border-2 rounded border-green-500 px-3 py-2 text-slate-700 text-center shadow-md">
        {props.children}
      </a>
    </Link>
  );
}

export default Button;
