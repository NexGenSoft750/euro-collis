"use client";

import React, { useEffect } from 'react';
import { Icon } from '@/components/ui';
import styles from './SuccessNotification.module.scss';
import clsx from 'clsx';

interface SuccessNotificationProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  message: string;
  autoClose?: boolean;
  autoCloseDelay?: number;
  showIcon?: boolean;
  iconSrc?: string;
  iconAlt?: string;
}

const SuccessNotification: React.FC<SuccessNotificationProps> = ({
  isVisible,
  onClose,
  title,
  message,
  autoClose = true,
  autoCloseDelay = 5000,
  showIcon = true,
  iconSrc = "/images/common/checkmark-icon.png",
  iconAlt = "Success"
}) => {
  useEffect(() => {
    if (isVisible && autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose, autoCloseDelay, onClose]);

  if (!isVisible) return null;

  return (
    <div className={styles.notificationOverlay}>
      <div className={clsx(styles.notification, styles.notificationSlideIn)}>
        <div className={styles.notificationContent}>
          {showIcon && (
            <div className={styles.notificationIcon}>
              <Icon
                src={iconSrc}
                alt={iconAlt}
                width={24}
                height={24}
              />
            </div>
          )}
          
          <div className={styles.notificationText}>
            <h3 className={styles.notificationTitle}>{title}</h3>
            <p className={styles.notificationMessage}>{message}</p>
          </div>
          
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close notification"
          >
            <Icon
              src="/images/common/exit-icon.png"
              alt="Close"
              width={16}
              height={16}
            />
          </button>
        </div>
        
        <div className={styles.progressBar}>
          <div className={styles.progressBarFill}></div>
        </div>
      </div>
    </div>
  );
};

export default SuccessNotification;
