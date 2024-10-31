"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {

  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-background text-foreground p-4 rounded-lg border border-border">
      <h1 className="text-primary-foreground">Welcome to Zcrum</h1>
      <p className="text-muted-foreground">This is a project management app.</p>
      <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 bg-accent-foreground text-accent rounded-md"
    >
      Toggle Theme
    </Button>
    </div>
  );
}
