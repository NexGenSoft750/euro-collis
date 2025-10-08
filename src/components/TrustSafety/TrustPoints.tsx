const TrustPoints = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-14">
            {children}
        </div>
    );
}

export default TrustPoints;