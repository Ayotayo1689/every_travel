import { useState, useEffect } from "react";

export function TypingText({
  words = ["Travel", "Hotel", "Pickup"],
  speed = false,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (wordIndex >= words.length) return;

    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setSubIndex((prev) => prev + 1);
          if (subIndex === currentWord.length) {
            setDeleting(true);
            setTimeout(() => {}, 2000); // pause before deleting
          }
        } else {
          setSubIndex((prev) => prev - 1);
          if (subIndex === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      speed ? (deleting ? 20 : 100) : deleting ? 50 : 200
    ); // typing speed vs deleting speed

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, wordIndex]);

  return (
    <span className="text-yellow-400 border-r-1 border-black duration-300 ease-out transition-transform  ">
      {words[wordIndex].substring(0, subIndex)}
      
    </span>
  );
}
