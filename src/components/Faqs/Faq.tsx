"use client";

import { useId, useState } from 'react';
import styles from './Faq.module.scss';
import clsx from 'clsx';
import { FaqProps } from '@/types';
import { ChevronIcon } from '@/components/ui';

const Faq = ({ question, answer }: FaqProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const contentId = useId();

    return (
        <div className={styles.faq}>
            <button
                className={clsx(
                    styles.faq__questionWrapper,
                    { [styles["faq__questionWrapper--isExpanded"]]: isOpen }
                )}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={contentId}
            >
                <h5>{question}</h5>
                <div className='bg-yellow rounded-lg p-2 flex justify-center items-center'>
                    <ChevronIcon
                        direction={isOpen ? 'up' : 'down'}
                        size={24}
                    />
                </div>
            </button>
            {isOpen && (
                <div
                    id={contentId}
                    role="region"
                    aria-labelledby={contentId}
                    hidden={!isOpen}
                    className={styles.faq__answerWrapper}
                >
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default Faq;