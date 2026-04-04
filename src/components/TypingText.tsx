import { useEffect, useState } from "react";

const words = ["Product", "Developer", "Techie"];

export default function TypingText() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause
        }
      } else {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="flex-grow-0 inline-flex">
      <h3
        className="text-white text-2xl sm:text-3xl xl:text-5xl tracking-wide xl:tracking-widest"
        style={{
          fontFamily: "Tabular, monospace",
          borderRight: "3px solid",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        &lt;{displayText}/&gt;
      </h3>
    </div>
  );
}