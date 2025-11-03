import React from 'react';
import BookingDetails from './BookingDetails';

interface Courier {
  id: number;
  name: string;
  avatar: string;
  price: number;
  deliveryDate: string;
  deliveryType: string;
}

interface QuoteFormStep3Props {
  selectedCourier: Courier | null;
  onEditSelection: () => void;
  onConfirmBooking: (contactData?: any, routeData?: any, itemsData?: any[]) => Promise<{ id: string } | null>;
}

const QuoteFormStep3: React.FC<QuoteFormStep3Props> = ({
  selectedCourier,
  onEditSelection,
  onConfirmBooking
}) => {
  return (
    <BookingDetails
      selectedCourier={selectedCourier}
      onEditSelection={onEditSelection}
      onConfirmBooking={onConfirmBooking}
    />
  );
};

export default QuoteFormStep3;
