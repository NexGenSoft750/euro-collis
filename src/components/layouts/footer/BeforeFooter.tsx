const BeforeFooter: React.FC = () => {
    return (
        <div aria-hidden="true" className="flex">
            <div className="flex-1 h-3 bg-yellow"></div>
            <div className="flex-1 h-3 bg-primary"></div>
            <div className="flex-1 h-3 bg-red"></div>
            <div className="flex-1 h-3 bg-green"></div>
        </div>
    );
};

export default BeforeFooter;
