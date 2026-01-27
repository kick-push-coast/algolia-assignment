import { createContext, useContext, useState, type ReactNode } from "react";

type MobileFiltersContextValue = {
    isMobileFiltersOpen: boolean;
    toggleMobileFilters: () => void;
};

const MobileFiltersContext = createContext<MobileFiltersContextValue | undefined>(
    undefined
);

export function MobileFiltersProvider({ children }: { children: ReactNode }) {
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    function toggleMobileFilters() {
        setIsMobileFiltersOpen((open) => !open);
    }

    return (
        <MobileFiltersContext.Provider
            value={{ isMobileFiltersOpen, toggleMobileFilters }}
        >
            {children}
        </MobileFiltersContext.Provider>
    );
}

export function useMobileFilters() {
    const context = useContext(MobileFiltersContext);
    if (!context) {
        throw new Error(
            "useMobileFilters must be used within a MobileFiltersProvider"
        );
    }
    return context;
}
