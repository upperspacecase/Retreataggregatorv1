"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface SavedRetreat {
  slug: string;
  note: string;
  savedAt: number;
}

interface SavedContextType {
  saved: SavedRetreat[];
  isSaved: (slug: string) => boolean;
  toggleSave: (slug: string) => void;
  updateNote: (slug: string, note: string) => void;
  removeSaved: (slug: string) => void;
}

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export function SavedProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState<SavedRetreat[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("saved-retreats");
    if (stored) {
      try {
        setSaved(JSON.parse(stored));
      } catch {
        // ignore malformed data
      }
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("saved-retreats", JSON.stringify(saved));
    }
  }, [saved, loaded]);

  function isSaved(slug: string) {
    return saved.some((s) => s.slug === slug);
  }

  function toggleSave(slug: string) {
    setSaved((prev) =>
      prev.some((s) => s.slug === slug)
        ? prev.filter((s) => s.slug !== slug)
        : [...prev, { slug, note: "", savedAt: Date.now() }]
    );
  }

  function updateNote(slug: string, note: string) {
    setSaved((prev) =>
      prev.map((s) => (s.slug === slug ? { ...s, note } : s))
    );
  }

  function removeSaved(slug: string) {
    setSaved((prev) => prev.filter((s) => s.slug !== slug));
  }

  return (
    <SavedContext.Provider
      value={{ saved, isSaved, toggleSave, updateNote, removeSaved }}
    >
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error("useSaved must be used within a SavedProvider");
  }
  return context;
}
