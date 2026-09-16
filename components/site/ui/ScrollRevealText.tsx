"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

export interface RevealLine {
  text: string;
  className?: string;
}

interface ScrollRevealTextProps {
  /** Each line starts on a new line; the reveal runs through all of them in reading order. */
  lines: RevealLine[];
  className?: string;
}

// Character-by-character scroll reveal, modelled on text-reveal-scroll.framer.ai: every character
// starts at 20% opacity and fills to 100% in reading order as the block scrolls from the bottom
// of the viewport to its centre.
export function ScrollRevealText({ lines, className }: ScrollRevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end center"] });

  const total = lines.reduce((sum, line) => sum + line.text.length, 0);
  // Character index where each line starts in the overall reveal.
  const lineStarts = lines.map((_, i) => lines.slice(0, i).reduce((sum, line) => sum + line.text.length, 0));

  return (
    <div ref={ref} className={className}>
      {lines.map((line, lineIndex) => {
        const start = lineStarts[lineIndex];
        return (
          <p key={lineIndex} className={cn("m-0", line.className)}>
            {/* Screen readers get the sentence once; the per-character spans are visual only. */}
            <span className="sr-only">{line.text}</span>
            <span aria-hidden>
              {reduceMotion ? line.text : <Words text={line.text} start={start} total={total} progress={scrollYProgress} />}
            </span>
          </p>
        );
      })}
    </div>
  );
}

function Words({ text, start, total, progress }: { text: string; start: number; total: number; progress: MotionValue<number> }) {
  // Keep each word's characters together so a line never breaks mid-word.
  const parts = text.split(/(\s+)/);
  const partStarts = parts.map((_, i) => start + parts.slice(0, i).join("").length);

  return (
    <>
      {parts.map((part, partIndex) => {
        const partStart = partStarts[partIndex];
        if (/^\s+$/.test(part)) return <span key={partIndex}>{part}</span>;
        return (
          <span key={partIndex} className="inline-block whitespace-nowrap">
            {[...part].map((char, charIndex) => (
              <Char key={charIndex} char={char} index={partStart + charIndex} total={total} progress={progress} />
            ))}
          </span>
        );
      })}
    </>
  );
}

function Char({ char, index, total, progress }: { char: string; index: number; total: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}
