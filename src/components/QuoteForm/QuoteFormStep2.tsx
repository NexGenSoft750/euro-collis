import React from 'react';
import { Icon } from '@/components/ui';
import StarRating from '../common/rating/StarRating';
import CourierStatusBadge from '../common/statusBadge/CourierStatusBadge';
import styles from './QuoteForm.module.scss';

interface Courier {
  id: number;
  name: string;
  avatar: string;
  pickupCities: string;
  rating: number;
  reviewCount: number;
  trips: string;
  languages: string;
  status: string;
  statusIcon: string;
  price: number;
  deliveryDate: string;
  deliveryType: string;
}

interface QuoteFormStep2Props {
  couriers: Courier[];
  selectedCourier: number | null;
  sortByReviews: boolean;
  sortByDelivery: boolean;
  deliveryType: string;
  onSelectCourier: (courierId: number) => void;
  onBookCourier: (courierId: number) => void;
  onEditSelection: () => void;
  onSetSortByReviews: (value: boolean) => void;
  onSetSortByDelivery: (value: boolean) => void;
  onSetDeliveryType: (value: string) => void;
  isLoading?: boolean;
  errorMessage?: string;
}

const QuoteFormStep2: React.FC<QuoteFormStep2Props> = ({
  couriers,
  selectedCourier,
  sortByReviews,
  sortByDelivery,
  deliveryType,
  onSelectCourier,
  onBookCourier,
  onEditSelection,
  onSetSortByReviews,
  onSetSortByDelivery,
  onSetDeliveryType,
  isLoading,
  errorMessage
}) => {
  const getFilteredCouriers = () => {
    let filtered = [...couriers];
  
    // Filter by delivery type first
    if (deliveryType !== "All") {
      filtered = filtered.filter(
        (courier) => courier.deliveryType === deliveryType
      );
    }
  
    // Apply sorting logic based on active toggles
    filtered.sort((a, b) => {
      // Parse delivery dates (extract first numeric value)
      const deliveryA = parseInt(a.deliveryDate);
      const deliveryB = parseInt(b.deliveryDate);
  
      // Start with 0 (equal)
      let score = 0;
  
      // Combine sorting weights
      if (sortByReviews && sortByDelivery) {
        // Both toggles active → prioritize rating first, then delivery speed
        score = b.rating - a.rating || deliveryA - deliveryB;
      } else if (sortByReviews) {
        score = b.rating - a.rating;
      } else if (sortByDelivery) {
        score = deliveryA - deliveryB;
      }
  
      return score;
    });
  
    return filtered;
  };

  const selected = couriers.find(c => c.id === selectedCourier);

  return (
    <div className={styles.quoteForm__step2}>
      {/* Filter Controls */}
      <div className={styles.quoteForm__filterControls}>
        {/* Highest Reviews */}
        <div
          className={styles.quoteForm__filterToggle}
          onClick={() => onSetSortByReviews(!sortByReviews)}
        >
          <span className={styles.quoteForm__filterLabel}>Highest Reviews</span>
          <div
            className={`${styles.quoteForm__toggle} ${
              sortByReviews ? styles.quoteForm__toggleActive : ""
            }`}
          >
            <div className={styles.quoteForm__toggleSlider}></div>
          </div>
        </div>

        {/* Fastest Delivery */}
        <div
          className={styles.quoteForm__filterToggle}
          onClick={() => onSetSortByDelivery(!sortByDelivery)}
        >
          <span className={styles.quoteForm__filterLabel}>Fastest Delivery</span>
          <div
            className={`${styles.quoteForm__toggle} ${
              sortByDelivery ? styles.quoteForm__toggleActive : ""
            }`}
          >
            <div className={styles.quoteForm__toggleSlider}></div>
          </div>
        </div>

        {/* Delivery Type Dropdown */}
        <div className={styles.quoteForm__deliveryTypeDropdown}>
          <select
            id="deliveryType"
            className={styles.quoteForm__selectDropdown}
            value={deliveryType}
            onChange={(e) => onSetDeliveryType(e.target.value)}
          >
            <option value="All">Delivery Type</option>
            <option value="Door-to-Door">Door-to-Door</option>
            <option value="Pickup-Only">Pickup-Only</option>
            <option value="Drop-Off">Drop-Off</option>
          </select>
        </div>
      </div>

      {/* Selected Courier Summary */}
      {selected && (
        <div className={styles.quoteForm__selectedSummary}>
          <div className={styles.quoteForm__summaryIcon}>
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
              <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.quoteForm__summaryText}>
            Selected: {selected.name} — Door-to-door delivery to France at Total price €{selected.price}, departing {selected.deliveryDate}
          </div>
          <button 
            className={styles.quoteForm__editSelection} 
            onClick={() => {
              onEditSelection();
              // Optionally scroll to top of courier list for better UX
              setTimeout(() => {
                const courierList = document.querySelector(`.${styles.quoteForm__courierList}`);
                if (courierList) {
                  courierList.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
          >
            Edit Selection
          </button>
        </div>
      )}

      {/* Loading / Error / Empty */}
      {isLoading && (
        <div className={styles.quoteForm__courierList}>
          <div className={styles.quoteForm__loading}>Loading quotes…</div>
        </div>
      )}
      {!isLoading && errorMessage && (
        <div className={styles.quoteForm__courierList}>
          <div className={styles.quoteForm__error}>{errorMessage}</div>
        </div>
      )}

      {/* Courier List */}
      <div className={styles.quoteForm__courierList}>
        {!isLoading && !errorMessage && getFilteredCouriers().map((courier) => {
          const isSelected = courier.id === selectedCourier;
          return (
            <div
              key={courier.id}
              className={`${styles.quoteForm__courierCardContainer} ${
                isSelected ? styles.quoteForm__courierCardSelected : ''
              }`}
              onClick={() => onSelectCourier(courier.id)}
            >
              <div className={styles.quoteForm__courierCard}>
                <div className={styles.quoteForm__courierInfoGroup}>
                  <div className={styles.quoteForm__courierInfo}>
                    <div className={styles.quoteForm__courierAvatar}>
                      <Icon
                        src={`/images/quote/courier/${courier.avatar}`}
                        alt={`${courier.name} avatar`}
                        width={89}
                        height={89}
                      />
                    </div>
                    <div className={styles.quoteForm__courierDetails}>
                      <div className={styles.quoteForm__courierName}>
                        {courier.name}
                        <CourierStatusBadge courier={{ name: courier.name, status: courier.status as "verified" | "insured" }} />
                      </div>
                      <div className={styles.quoteForm__courierLocation}>
                        Pickup Cities: <span>{courier.pickupCities}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.quoteForm__courierRatingGroup}>
                    <div className={styles.quoteForm__courierRating}>
                      <span>Rating:</span>
                      <div className={styles.quoteForm__stars}>
                        <StarRating rating={courier.rating} />
                      </div>
                      <span className={styles.quoteForm__ratingText}>
                        {courier.rating} ({courier.reviewCount})
                      </span>
                    </div>
                    <div className={styles.quoteForm__courierStats}>
                      {courier.trips} trips, speaks {courier.languages}
                    </div>
                  </div>
                </div>

                <div className={styles.quoteForm__courierBooking}>
                  <div className={styles.quoteForm__courierPrice}>
                    Total price: € {courier.price}
                  </div>
                  <div className={styles.quoteForm__courierDelivery}>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className={styles.quoteForm__clockIcon}>
                      <circle cx="8" cy="8" r="7" stroke="#6C757D" strokeWidth="1.5" />
                      <path d="M8 4V8L10.5 10.5" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {courier.deliveryDate}
                  </div>
                  <button
                    className={styles.quoteForm__bookButton}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering card click
                      onBookCourier(courier.id);
                    }}
                  >
                    <Icon
                      src={`/images/quote/courier/book_icon.png`}
                      alt="book icon"
                      width={18}
                      height={18}
                    />
                    Book This Courier
                  </button>
                </div>
              </div>

              {courier.status === "verified" ? (
                <div className={styles.quoteForm__verifiedText}>Verified</div>
              ) : (
                <>
                  <div className={styles.quoteForm__separator}></div>
                  <div className={styles.quoteForm__insuredText}>Insured</div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuoteFormStep2;
