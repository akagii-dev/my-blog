import ModeButton from "./mode-button";

export default function Header() {
  return (
    <header className="flex h-14 border-b border-border/40">
      <ul className="flex ml-4 gap-4">
        <li>
          <h1 className="text-2xl font-semibold">Blog</h1>
        </li>
        <li>
            <h1 className="text-2xl font-semibold">About</h1>
        </li>
      </ul>
      <ul className="flex flex-1 items-center justify-end">
        <li className="">
          <ModeButton />
        </li>
      </ul>
    </header>
  );
}
