'use client';

import styles from './style.module.scss';
import { useState, useEffect, useRef, useCallback } from 'react';
import Modal from './modal/index';
import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { projectData } from './projectData';
import Heading from '@/components/common/heading';

interface ModalState {
  active: boolean;
  index: number;
}

const scaleAnimation: Variants = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const cursorAnimation: Variants = {
  initial: { scale: 0, x: '50%', y: '50%' },
  enter: {
    scale: 1,
    x: '30%',
    y: '30%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '30%',
    y: '30%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Works() {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });
  const { active, index } = modal;

  const modalContainer = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLSpanElement | null>(null);

  const xMoveContainer = useRef<(x: number) => void>(() => {});
  const yMoveContainer = useRef<(y: number) => void>(() => {});
  const xMoveCursor = useRef<(x: number) => void>(() => {});
  const yMoveCursor = useRef<(y: number) => void>(() => {});
  const xMoveCursorLabel = useRef<(x: number) => void>(() => {});
  const yMoveCursorLabel = useRef<(y: number) => void>(() => {});

  useEffect(() => {
    // Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current!, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current!, 'top', {
      duration: 0.8,
      ease: 'power3',
    });

    // Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current!, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    yMoveCursor.current = gsap.quickTo(cursor.current!, 'top', {
      duration: 0.5,
      ease: 'power3',
    });

    // Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current!, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current!, 'top', {
      duration: 0.45,
      ease: 'power3',
    });
  }, []);

  const moveItems = useCallback((x: number, y: number) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  }, []);

  const manageModal = useCallback(
    (active: boolean, index: number, x: number, y: number) => {
      moveItems(x, y);
      setModal({ active, index });
    },
    [moveItems]
  );

  return (
    <section className="relative pt-[40px] md:pt-[60px] lg:pt-[100px]">
      <Heading className="mb-10 px-[0.63rem]">
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
            <Modal
              index={index}
              projectsData={data}
              manageModal={manageModal}
              key={data.id}
            />
          ))}
        </div>
        <>
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}
            className={styles.modalContainer}
          >
            <div
              style={{ top: index * -100 + '%' }}
              className={styles.modalSlider}
            >
              {projectData.map((project, idx) => {
                const { imageUrl, color } = project;
                return (
                  <div
                    className={styles.modal}
                    style={{ backgroundColor: color }}
                    key={`modal_${idx}`}
                  >
                    <Image src={imageUrl} width={300} height={0} alt="image" />
                  </div>
                );
              })}
            </div>
          </motion.div>
          {/* cursor  */}
          <motion.div
            ref={cursor}
            style={{ pointerEvents: 'auto' }}
            className={`${styles.cursor} flex items-center justify-center space-x-1 text-[12px] font-medium`}
            variants={cursorAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}
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
