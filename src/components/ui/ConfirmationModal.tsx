"use client";

import React from 'react';
import { Button, Icon } from '@/components/ui';
import styles from './ConfirmationModal.module.scss';
import clsx from 'clsx';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'success' | 'warning' | 'info' | 'danger';
  showIcon?: boolean;
  iconSrc?: string;
  iconAlt?: string;
  children?: React.ReactNode;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'info',
  showIcon = true,
  iconSrc,
  iconAlt = 'Confirmation icon',
  children
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          {showIcon && (
            <div className={clsx(styles.modalIcon, styles[`modalIcon--${type}`])}>
              <Icon
                src={iconSrc || `/images/common/checkmark-icon.png`}
                alt={iconAlt}
                width={24}
                height={24}
              />
            </div>
          )}
          <h2 className={styles.modalTitle}>{title}</h2>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <Icon
              src="/images/common/exit-icon.png"
              alt="Close"
              width={16}
              height={16}
            />
          </button>
        </div>

        <div className={styles.modalBody}>
          <p className={styles.modalMessage}>{message}</p>
          {children && (
            <div className={styles.modalContent}>
              {children}
            </div>
          )}
        </div>

        <div className={styles.modalFooter}>
          <Button
            variant="outline"
            onClick={onClose}
            className={styles.cancelButton}
          >
            {cancelText}
          </Button>
          <Button
            variant="solid"
            onClick={handleConfirm}
            className={clsx(styles.confirmButton, styles[`confirmButton--${type}`])}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
