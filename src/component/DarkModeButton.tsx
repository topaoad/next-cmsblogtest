import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/solid";
import { MoonIcon } from "@heroicons/react/solid";
import { useCallback, useEffect, useState } from "react";

export const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();

  // レンダー後かを判定
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div>
      <button
        aria-label="DarkModeToggle"
        type="button"
        className="p-3 h-12 w-12 order-2 md:order-3 absolute left-2/4 transform -translate-x-2/4 md:relative md:left-0"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <>
            {theme === "dark" ? (
              <SunIcon height={"25"} width={"25"} />
            ) : (
              <MoonIcon height={"25"} width={"25"} />
            )}
          </>
        )}
      </button>
    </div>
  );
};
