"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ModeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []); // next-themes bugs solution. see https://github.com/pacocoursey/next-themes/issues/169
  if (!mounted) return <></>;
  return theme === "light" ? (
    <SunIcon className="box-border w-6 h-6" onClick={() => setTheme("dark")} />
  ) : (
    <MoonIcon
      className="box-border w-6 h-6"
      onClick={() => setTheme("light")}
    />
  );
}
