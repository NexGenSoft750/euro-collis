'use client';

import React, { useState, useRef, useEffect, useImperativeHandle } from "react";
import styles from "./ItemsDetail.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Icon } from "../ui";

interface ItemsDetailProps {
  // Add any props if needed in the future
}

interface ItemsDetailRef {
  validateItems: () => boolean;
  getSelectedItems: () => { name: string | undefined; quantity: number; }[];
  formData: { items: { carpet: number; fridge: number; suitcase: number; box: number; largeCarpet: number; }; estimatedWeight: number; };
}

const ItemsDetail = React.forwardRef<ItemsDetailRef, ItemsDetailProps>((props, ref) => {
  const [formData, setFormData] = useState({
    items: {
      carpet: 0,
      fridge: 0,
      suitcase: 0,
      box: 0,
      largeCarpet: 0,
    },
    estimatedWeight: 0,
  });

  const [showItemsError, setShowItemsError] = useState(false);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const itemTypes = [
    { id: "carpet", name: "Carpet", unit: "per meter", priceRange: "€20-30", icon: "carpet.png", weight: 5, size: 100 },
    { id: "fridge", name: "Fridge", unit: "per item", priceRange: "€60-70", icon: "fridge.png", weight: 50, size: 70 },
    { id: "suitcase", name: "Suitcase", unit: "per item", priceRange: "€10-20", icon: "suitcase.png", weight: 15, size: 100 },
    { id: "largeCarpet", name: "Large Carpet", unit: "per meter", priceRange: "€20-30", icon: "carpet.png", weight: 15, size: 100 },
    { id: "box", name: "Box", unit: "per item", priceRange: "€30-40", icon: "box.png", weight: 10, size: 100 },
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const timer = setTimeout(checkScroll, 100);
    return () => clearTimeout(timer);
  }, []);

const scroll = (direction: "left" | "right") => {
  if (scrollRef.current) {
    const item = scrollRef.current.querySelector(`.${styles.quoteForm__itemCard}`) as HTMLElement;
    if (!item) return;

    const itemWidth = item.offsetWidth; // actual width
    const gap = parseInt(getComputedStyle(scrollRef.current).gap || "0"); // gap between cards
    const scrollAmount = itemWidth + gap; // exact per-item scroll distance

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 300);
  }
};


  const handleItemChange = (itemId: string, change: number) => {
    setFormData((prev) => {
      const updatedQuantity = Math.max(0, prev.items[itemId as keyof typeof prev.items] + change);

      const item = itemTypes.find((i) => i.id === itemId);
      const weightPerItem = item ? item.weight : 0;

      const newWeight = prev.estimatedWeight + weightPerItem * change;

      // Clear error if items are being added
      if (change > 0) {
        setShowItemsError(false);
      }

      return {
        ...prev,
        items: {
          ...prev.items,
          [itemId]: updatedQuantity,
        },
        estimatedWeight: Math.max(0, newWeight),
      };
    });
  };

  const getSelectedItems = () => {
    return Object.entries(formData.items)
      .filter(([, quantity]) => quantity > 0)
      .map(([itemId, quantity]) => {
        const item = itemTypes.find((i) => i.id === itemId);
        return { name: item?.name, quantity };
      });
  };

  // Expose validation method to parent
  useImperativeHandle(ref, () => ({
    validateItems: () => {
      const selectedItems = getSelectedItems();
      const hasItems = selectedItems.length > 0;
      setShowItemsError(!hasItems);
      return hasItems;
    },
    getSelectedItems: getSelectedItems,
    formData: formData
  }));

  return (
    <div className={styles.quoteForm__section}>

      <div className={styles.quoteForm__carouselWrapper}>
        <div className={styles.quoteForm__carouselBtnGroup}>
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={styles.quoteForm__scrollButton}
            aria-label="Scroll left"
          >
            <ChevronLeft size={34} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={styles.quoteForm__scrollButton}
            aria-label="Scroll right"
          >
            <ChevronRight size={34} />
          </button>
        </div>

        <div
          ref={scrollRef}
          className={styles.quoteForm__itemsCarousel}
          onScroll={checkScroll}
        >
          {itemTypes.map((item) => (
            <div key={item.id} className={styles.quoteForm__itemCard}>              
              <div className={styles.quoteForm__itemIcon}>
                <Icon
                    src={`/images/quote/items/${item.icon}`}
                    alt={`test Icon`}
                    width={item.size}
                    height={item.size}
                />
              </div>
              <h4 className={styles.quoteForm__itemName}>{item.name}</h4>
              <p className={styles.quoteForm__itemUnit}>{item.unit}</p>
              <p className={styles.quoteForm__itemPrice}>{item.priceRange}</p>

               <div className={styles.quoteForm__quantitySelector}>
                <button
                  onClick={() => handleItemChange(item.id, -1)}
                  className={styles.quoteForm__BtnQuantityDecrease}
                  type="button"
                >
                  −
                </button>
                <span className={styles.quoteForm__quantity}>
                  {formData.items[item.id as keyof typeof formData.items]}
                </span>
                <button
                  onClick={() => handleItemChange(item.id, 1)}
                  className={styles.quoteForm__BtnQuantityIncrease}
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {getSelectedItems().length > 0 && (
        <div className={styles.quoteForm__selectedItems}>
          {getSelectedItems().map((item, index) => (
            <div key={index} style={{ marginBottom: index < getSelectedItems().length - 1 ? '8px' : '0' }}>
              <span style={{ float: 'left' }}>
                {item.name}:
              </span>
              <span style={{ float: 'right', color: '#9CA3AF' }}>
                {item.quantity} item{item.quantity > 1 ? "s" : ""}
              </span>
              <div style={{ clear: 'both' }}></div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.quoteForm__weightGroup}>
        <div className={styles.quoteForm__field}>
          <label className={styles.quoteForm__label}>Estimated Weight (kg)</label>
          <input
            type="number"
            value={formData.estimatedWeight}
            readOnly
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                estimatedWeight: parseInt(e.target.value) || 0,
              }))
            }
            className={styles.quoteForm__weightInput}
          />
        </div>
        <div style={{ textAlign: 'right', marginTop: '8px', color: '#9CA3AF', fontSize: '0.9rem' }}>
          Estimated Weight {formData.estimatedWeight} kg
        </div>
      </div>

      {showItemsError && (
        <div className={styles.quoteForm__error}>
          Please select at least one item to ship
        </div>
      )}
    </div>
  );
});

ItemsDetail.displayName = "ItemsDetail";

export default ItemsDetail;