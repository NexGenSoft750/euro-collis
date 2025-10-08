const WhyEuroCollisCards = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-3">
            {children}
        </div>
    );
}

export default WhyEuroCollisCards;