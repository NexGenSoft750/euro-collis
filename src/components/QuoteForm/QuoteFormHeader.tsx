import React from 'react';

interface QuoteFormHeaderProps {
  title?: string;
  subtitle?: string;
}

const QuoteFormHeader: React.FC<QuoteFormHeaderProps> = ({
  title = "Get Your Shipping Quote",
  subtitle = "Compare couriers and find the best deal for your shipment"
}) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};

export default QuoteFormHeader;
