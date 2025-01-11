// "use client";

// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { twMerge } from "tailwind-merge";

// const CYCLES_PER_LETTER = 5;
// const SHUFFLE_TIME = 50;
// const CHARS = "!@#$%^&*():{};|,.<>/?";

// type Props = {
//   children: string;
//   className?: string;
// };

// const ScrambleText: React.FC<Props> = ({ children, className }) => {
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//   const TARGET_TEXT = children;

//   const [text, setText] = useState(TARGET_TEXT);

//   const scramble = () => {
//     let pos = 0;

//     intervalRef.current = setInterval(() => {
//       const scrambled = TARGET_TEXT.split("")
//         .map((char, index) => {
//           if (pos / CYCLES_PER_LETTER > index) {
//             return char;
//           }

//           const randomCharIndex = Math.floor(Math.random() * CHARS.length);
//           const randomChar = CHARS[randomCharIndex];

//           return randomChar;
//         })
//         .join("");

//       setText(scrambled);
//       pos++;

//       if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
//         stopScramble();
//       }
//     }, SHUFFLE_TIME);
//   };

//   const stopScramble = () => {
//     clearInterval(intervalRef.current as NodeJS.Timeout);
//     setText(TARGET_TEXT);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{
//         opacity: 1,
//         transition: { duration: 0.5 },
//       }}
//       onViewportEnter={scramble}
//       // onViewportLeave={stopScramble}
//       className={twMerge("relative", className)}
//     >
//       <h2 className="relative z-10">
//         <span>{text}</span>
//       </h2>
//     </motion.div>
//   );
// };

// export default ScrambleText;
