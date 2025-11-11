'use client';

import React, { useState, useImperativeHandle } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./RouteInfoForm.module.scss";
import clsx from "clsx";

import { countriesWithFlags } from '@/lib/countries';

const countries = countriesWithFlags;

const validationSchema = Yup.object({
  pickupCity: Yup.string().required("Pickup city is required"),
  deliveryCity: Yup.string().required("Delivery city is required"),
  pickupDate: Yup.string().required("Pickup date is required"),
});

interface RouteInfoFormProps {
  currentSubStep: number;
  setCurrentSubStep: (step: number) => void;
  initialPickupCountry?: string;
  initialDeliveryCountry?: string;
}

interface RouteInfoFormRef {
  validateForm: () => Promise<boolean>;
  values: {
    pickupCountry: string;
    deliveryCountry: string;
    pickupCity: string;
    deliveryCity: string;
    pickupDate: string;
    flexibility: string;
  };
}

const RouteInfoForm = React.forwardRef<RouteInfoFormRef, RouteInfoFormProps>(({ 
  currentSubStep, 
  setCurrentSubStep,
  initialPickupCountry,
  initialDeliveryCountry
}, ref) => {
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [showDeliveryDropdown, setShowDeliveryDropdown] = useState(false);

  const formik = useFormik({
    initialValues: {
      pickupCountry: initialPickupCountry || "Morocco",
      deliveryCountry: initialDeliveryCountry || "France",
      pickupCity: "",
      deliveryCity: "",
      pickupDate: "",
      flexibility: "exact",
    },
    validationSchema,
    onSubmit: () => {},
  });

  // ✅ Expose form validation to parent if needed
  useImperativeHandle(ref, () => ({
    validateForm: async () => {
      const errors = await formik.validateForm();
      formik.setTouched({
        pickupCity: true,
        deliveryCity: true,
        pickupDate: true,
      });
      return Object.keys(errors).length === 0;
    },
    values: formik.values,
  }));

  // ✅ Fix: Add missing function for flexibility
  const handleFlexibilityChange = (value: string) => {
    formik.setFieldValue("flexibility", value);
  };

  // ✅ Country select handler
  const handleCountrySelect = (
    type: "pickup" | "delivery",
    countryName: string
  ) => {
    if (type === "pickup") {
      formik.setFieldValue("pickupCountry", countryName);
      setShowPickupDropdown(false);
    } else {
      formik.setFieldValue("deliveryCountry", countryName);
      setShowDeliveryDropdown(false);
    }
  };

  return (
    <div className={styles.routeForm} onClick={() => setCurrentSubStep(1)}>
      <div className={styles.routeForm__header}>
        <div className={clsx(
          styles.routeForm__indicator,
          {[styles.routeForm__indicatorInactive]: currentSubStep < 1}
        )}></div>
        <h2 className={styles.routeForm__title}>Route Info</h2>
      </div>

      <div className={styles.routeForm__content}>
        {/* Pickup Section */}
        <div className={styles.routeForm__row}>
          {/* Pickup Country */}
          <div className={styles.routeForm__group}>
            <div className={styles.routeForm__field}>
              <label className={styles.routeForm__label}>Pickup Country</label>
              <div
                className={styles.routeForm__select}
                onClick={() => setShowPickupDropdown((prev) => !prev)}
              >
                <span className={styles.routeForm__flag}>
                  {
                    countries.find(
                      (c) => c.name === formik.values.pickupCountry
                    )?.code
                  }
                </span>
                <span className={styles.routeForm__text}>
                  {formik.values.pickupCountry}
                </span>
                <span className={styles.routeForm__arrow}>▼</span>
              </div>

              {showPickupDropdown && (
                <ul className={styles.routeForm__dropdown}>
                  {countries.map((c) => (
                    <li
                      key={c.name}
                      onClick={() => handleCountrySelect("pickup", c.name)}
                      className={styles.routeForm__dropdownItem}
                    >
                      <span>{c.code}</span> {c.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Pickup City */}
          <div className={styles.routeForm__group}>
            <div className={styles.routeForm__field}>
              <label className={styles.routeForm__label}>Pickup City</label>
              <input
                type="text"
                name="pickupCity"
                value={formik.values.pickupCity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={styles.routeForm__input}
              />
            </div>
            {formik.touched.pickupCity && formik.errors.pickupCity && (
              <div className={styles.routeForm__error}>
                {formik.errors.pickupCity}
              </div>
            )}
          </div>
        </div>

        {/* Delivery Section */}
        <div className={styles.routeForm__row}>
          {/* Delivery Country */}
          <div className={styles.routeForm__group}>
            <div className={styles.routeForm__field}>
              <label className={styles.routeForm__label}>Delivery Country</label>
              <div
                className={styles.routeForm__select}
                onClick={() => setShowDeliveryDropdown((prev) => !prev)}
              >
                <span className={styles.routeForm__flag}>
                  {
                    countries.find(
                      (c) => c.name === formik.values.deliveryCountry
                    )?.code
                  }
                </span>
                <span className={styles.routeForm__text}>
                  {formik.values.deliveryCountry}
                </span>
                <span className={styles.routeForm__arrow}>▼</span>
              </div>

              {showDeliveryDropdown && (
                <ul className={styles.routeForm__dropdown}>
                  {countries.map((c) => (
                    <li
                      key={c.name}
                      onClick={() => handleCountrySelect("delivery", c.name)}
                      className={styles.routeForm__dropdownItem}
                    >
                      <span>{c.code}</span> {c.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Delivery City */}
          <div className={styles.routeForm__group}>
            <div className={styles.routeForm__field}>
              <label className={styles.routeForm__label}>Delivery City</label>
              <input
                type="text"
                name="deliveryCity"
                value={formik.values.deliveryCity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={styles.routeForm__input}
              />
            </div>
            {formik.touched.deliveryCity && formik.errors.deliveryCity && (
              <div className={styles.routeForm__error}>
                {formik.errors.deliveryCity}
              </div>
            )}
          </div>
        </div>

        {/* Pickup Date */}
        <div className={styles.routeForm__group}>
          <div
            onClick={() => {
              const dateInput = document.getElementById("pickupDateInput") as HTMLInputElement;
              if (dateInput && 'showPicker' in dateInput) {
                (dateInput as HTMLInputElement & { showPicker: () => void }).showPicker();
              }
            }}
          >
            <div className={styles.routeForm__dateWrapper}>
              {/* Hidden native date input */}
              <input
                id="pickupDateInput"
                type="date"
                name="pickupDate"
                value={formik.values.pickupDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={styles.routeForm__hiddenDateInput}
              />

              <span className={styles.routeForm__placeholder}>
                {formik.values.pickupDate
                  ? new Date(formik.values.pickupDate).toLocaleDateString()
                  : "Preferred Pickup Date"}
              </span>

              {/* SVG Calendar Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.routeForm__calendarIcon}
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
          </div>

          {formik.touched.pickupDate && formik.errors.pickupDate && (
            <div className={styles.routeForm__error}>
              {formik.errors.pickupDate}
            </div>
          )}
        </div>


        {/* ✅ Pickup Flexibility — Now Functional */}
        <div className={styles.routeForm__fullWidth}>
          <label className={styles.routeForm__label}>Pickup Flexibility</label>
          <div className={styles.routeForm__buttonGroup}>
            {["exact", "3days", "5days", "10days"].map((val) => (
              <button
                key={val}
                type="button"
                className={`${styles.routeForm__button} ${
                  formik.values.flexibility === val
                    ? styles.routeForm__buttonActive
                    : ""
                }`}
                onClick={() => handleFlexibilityChange(val)}
              >
                {val === "exact" ? "Exact date" : val.replace("days", " days")}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

RouteInfoForm.displayName = "RouteInfoForm";

export default RouteInfoForm;
