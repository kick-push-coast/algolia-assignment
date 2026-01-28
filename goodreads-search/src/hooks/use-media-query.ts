import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(() =>
        typeof window !== "undefined"
            ? window.matchMedia(query).matches
            : false
    );

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQueryList = window.matchMedia(query);

        function onChange(event: MediaQueryListEvent) {
            setMatches(event.matches);
        }

        mediaQueryList.addEventListener("change", onChange);
        return () => mediaQueryList.removeEventListener("change", onChange);
    }, [query]);

    return matches;
}
