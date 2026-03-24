'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

export function RevealGroup({
  children,
  className,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0.03 : 0.08,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  delay = 0,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement> & { delay?: number }>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: {
          opacity: 0,
          y: reduceMotion ? 0 : 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration: reduceMotion ? 0.18 : 0.7,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
