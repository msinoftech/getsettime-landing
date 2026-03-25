export default function HelpCenter() {
    return (
        <>
        {/* Hero Section */}
        <section className="relative pt-16 pb-12 ">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Help Center</h1>
                    <p className="text-lg text-neutral-600 leading-relaxed">Get help with your GetSetTime account and scheduling system.</p>
                </div>
            </div>
        </section>
        </>
    )
}