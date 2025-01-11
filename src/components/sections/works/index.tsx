"use client";
import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./modal";
import { motion, Variants } from "motion/react";
import gsap from "gsap";
import Image from "next/image";
import { projectData } from "./projetData";
import Heading from "@/components/common/heading";

// Define the types for the modal state
interface ModalState {
  active: boolean;
  index: number;
}

// Define the types for the cursor refs
interface CursorRefs {
  current: HTMLElement | null;
}

// Define the props for the Project component
interface ProjectData {
  index: number;
  projectsData: {
    imageUrl: string;
    color: string;
    [key: string]: any; // You can add more specific fields if known
  };
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

const scaleAnimation: Variants = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const cursorAnimation: Variants = {
  initial: { scale: 0, x: "50%", y: "50%" },
  enter: {
    scale: 1,
    x: "30%",
    y: "30%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "30%",
    y: "30%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Works() {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });
  const { active, index } = modal;
  
  const modalContainer = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLSpanElement | null>(null);

  let xMoveContainer = useRef<(x: number) => void>(() => {});
  let yMoveContainer = useRef<(y: number) => void>(() => {});
  let xMoveCursor = useRef<(x: number) => void>(() => {});
  let yMoveCursor = useRef<(y: number) => void>(() => {});
  let xMoveCursorLabel = useRef<(x: number) => void>(() => {});
  let yMoveCursorLabel = useRef<(y: number) => void>(() => {});

  useEffect(() => {
    // Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current!, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current!, "top", {
      duration: 0.8,
      ease: "power3",
    });

    // Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current!, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current!, "top", {
      duration: 0.5,
      ease: "power3",
    });

    // Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current!, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current!, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x: number, y: number) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };

  const manageModal = (active: boolean, index: number, x: number, y: number) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <section className="relative pt-20 md:pt-[7.12rem] lg:pt-40">
      <Heading className="mb-10 px-[0.63rem]">
        <span className="md:hidden">
          Enjoy user- <br className="block md:hidden" /> friendly
          <br className="hidden md:block lg:hidden" /> designs
        </span>
        <span className="hidden md:inline">Recent projects</span>
      </Heading>
      <div
        onMouseMove={(e) => {
          moveItems(e.clientX, e.clientY);
        }}
        className={styles.projects}
      >
        <div className={styles.body}>
          {projectData.map((data, index) => (
            <Project
              index={index}
              projectsData={data}
              manageModal={manageModal}
              key={index}
            />
          ))}
        </div>
        <>
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
            className={styles.modalContainer}
          >
            <div
              style={{ top: index * -100 + "%" }}
              className={styles.modalSlider}
            >
              {projectData.map((project, index) => {
                const { imageUrl, color } = project;
                return (
                  <div
                    className={styles.modal}
                    style={{ backgroundColor: color }}
                    key={`modal_${index}`}
                  >
                    <Image
                      src={`${imageUrl}`}
                      width={300}
                      height={0}
                      alt="image"
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
          {/* cursor  */}
          <motion.div
            ref={cursor}
            className={`${styles.cursor} flex items-center justify-center space-x-1 text-[12px] font-medium`}
            variants={cursorAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          >
            <span
              className="inline-block rounded-sm bg-[#bebeb0] p-1 text-center font-bold"
              ref={cursorLabel}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                />
              </svg>
            </span>
            <span className="inline-block">VIEW</span>
          </motion.div>
        </>
      </div>
    </section>
  );
}
