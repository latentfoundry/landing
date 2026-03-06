import type { CSSProperties } from "react";

const words = ["LATENT", "FOUNDRY"];

function getFlickerStyle(wordIndex: number, letterIndex: number): CSSProperties {
  const seed = wordIndex * 13 + letterIndex * 7;
  const delay = 0.16 * letterIndex + wordIndex * 0.55 + (seed % 5) * 0.05;
  const duration = 1.2 + (seed % 4) * 0.18;

  return {
    "--flicker-delay": `${delay.toFixed(2)}s`,
    "--flicker-duration": `${duration.toFixed(2)}s`,
  } as CSSProperties;
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <h1
        aria-label="Latent Foundry"
        className="flicker-heading inline-flex items-center gap-16 whitespace-nowrap text-4xl font-bold uppercase text-white sm:gap-24 sm:text-6xl"
      >
        {words.map((word, wordIndex) => (
          <span key={word} className="flicker-word" aria-hidden="true">
            {Array.from(word).map((letter, letterIndex) => (
              <span
                key={`${word}-${letter}-${letterIndex}`}
                className="flicker-letter"
                style={getFlickerStyle(wordIndex, letterIndex)}
              >
                {letter}
              </span>
            ))}
          </span>
        ))}
      </h1>
    </div>
  );
}
