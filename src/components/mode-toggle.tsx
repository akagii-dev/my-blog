"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []); // next-themes bugs solution. see https://github.com/pacocoursey/next-themes/issues/169
  if (!mounted) return null;
  return theme === "light" ? (
    <SunIcon onClick={() => setTheme("dark")} />
  ) : (
    <MoonIcon onClick={() => setTheme("light")} />
  );
}
