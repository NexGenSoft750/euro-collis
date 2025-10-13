const ProcessSteps = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
            {children}
        </div>
    )
}

export default ProcessSteps;