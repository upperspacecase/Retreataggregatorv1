"use client";

import Link from "next/link";
import { retreats } from "@/data/retreats";
import { useSaved } from "@/lib/saved-context";
import { analytics } from "@/lib/analytics";
import { useState } from "react";

export default function SavedRetreats() {
  const { saved, removeSaved, updateNote } = useSaved();

  const savedRetreats = saved
    .map((s) => ({
      ...s,
      retreat: retreats.find((r) => r.slug === s.slug),
    }))
    .filter((s) => s.retreat);

  return (
    <div className="min-h-screen bg-cream pt-28 md:pt-36 pb-20">
      <title>Your Saved Retreats | Curated Calm</title>
      <meta
        name="description"
        content="Your personal collection of saved wellness retreats. Places you're dreaming about."
      />
      <div className="max-w-4xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="animate-fade-up">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
            Saved Retreats
          </h1>
          <p className="text-charcoal-light mb-12">
            Places you&rsquo;re dreaming about.
          </p>
        </div>

        {savedRetreats.length === 0 ? (
          <div className="text-center py-20 animate-fade-up">
            <p className="font-serif text-xl text-charcoal-light italic mb-3">
              Nothing saved yet.
            </p>
            <p className="text-warm-gray mb-8">
              Take your time &mdash; the right place has a way of finding you.
            </p>
            <Link
              href="/"
              className="text-sm text-ochre hover:text-terracotta border-b border-ochre/40 hover:border-terracotta transition-colors duration-300 pb-0.5"
            >
              Explore retreats
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {savedRetreats.map(({ slug, note, retreat }) => (
              <SavedCard
                key={slug}
                slug={slug}
                note={note}
                retreat={retreat!}
                onRemove={() => removeSaved(slug)}
                onNoteChange={(n) => updateNote(slug, n)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SavedCard({
  slug,
  note,
  retreat,
  onRemove,
  onNoteChange,
}: {
  slug: string;
  note: string;
  retreat: (typeof retreats)[number];
  onRemove: () => void;
  onNoteChange: (note: string) => void;
}) {
  const [editingNote, setEditingNote] = useState(false);
  const [noteValue, setNoteValue] = useState(note);

  return (
    <article className="group animate-fade-up">
      <Link href={`/retreat/${slug}`}>
        <div className="relative overflow-hidden aspect-[4/3] mb-4">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] group-hover:scale-[1.02]"
            style={{
              backgroundImage: `url('${retreat.images.hero}')`,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </div>
      </Link>

      <div className="space-y-2">
        <p className="text-warm-gray text-xs tracking-[0.15em] uppercase">
          {retreat.location} &middot; {retreat.duration}
        </p>
        <Link href={`/retreat/${slug}`}>
          <h3 className="font-serif text-xl text-charcoal hover:text-charcoal-light transition-colors duration-300">
            {retreat.name}
          </h3>
        </Link>
        <p className="font-serif text-sm text-charcoal-light italic">
          {retreat.tagline}
        </p>

        {/* Personal note */}
        {editingNote ? (
          <div className="pt-2">
            <textarea
              value={noteValue}
              onChange={(e) => setNoteValue(e.target.value)}
              placeholder="Add a personal note... (e.g., &quot;for our anniversary?&quot;)"
              className="w-full px-3 py-2 bg-linen border border-stone/40 rounded-sm text-sm text-charcoal placeholder:text-warm-gray/50 focus:border-charcoal-light focus:outline-none resize-none"
              rows={2}
              autoFocus
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => {
                  onNoteChange(noteValue);
                  if (noteValue.trim()) analytics.savedNoteAdded(slug);
                  setEditingNote(false);
                }}
                className="text-xs text-charcoal-light hover:text-charcoal transition-colors"
              >
                Save note
              </button>
              <button
                onClick={() => {
                  setNoteValue(note);
                  setEditingNote(false);
                }}
                className="text-xs text-warm-gray hover:text-charcoal-light transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : note ? (
          <button
            onClick={() => setEditingNote(true)}
            className="block pt-1 text-sm text-warm-gray italic hover:text-charcoal-light transition-colors"
          >
            &ldquo;{note}&rdquo;
          </button>
        ) : (
          <button
            onClick={() => setEditingNote(true)}
            className="block pt-1 text-xs text-warm-gray/60 hover:text-warm-gray transition-colors"
          >
            Add a note...
          </button>
        )}

        <div className="flex items-center gap-4 pt-2">
          <Link
            href={`/retreat/${slug}`}
            className="text-xs text-charcoal-light hover:text-charcoal border-b border-stone hover:border-charcoal transition-all duration-300 pb-0.5"
          >
            Explore
          </Link>
          <button
            onClick={onRemove}
            className="text-xs text-warm-gray hover:text-terracotta transition-colors duration-300"
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}
