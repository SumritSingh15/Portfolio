/**
 * Loading skeleton shown while the /projects/[slug] page is being prepared.
 * Next.js App Router automatically renders this component during navigation.
 */
export default function ProjectLoading() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] animate-pulse">
            {/* Nav skeleton */}
            <div className="h-14 border-b border-white/[0.06] bg-[#0a0a0f]/80 flex items-center px-8">
                <div className="h-4 w-32 bg-white/10 rounded-full" />
                <div className="ml-auto flex items-center gap-2">
                    <div className="h-3 w-16 bg-white/10 rounded-full" />
                    <div className="h-3 w-3 bg-white/8 rounded-full" />
                    <div className="h-3 w-20 bg-white/10 rounded-full" />
                    <div className="h-3 w-3 bg-white/8 rounded-full" />
                    <div className="h-3 w-24 bg-emerald-500/20 rounded-full" />
                </div>
            </div>

            {/* Hero skeleton */}
            <div className="max-w-6xl mx-auto px-8 pt-16 pb-12 space-y-5">
                <div className="h-14 w-80 bg-white/10 rounded-2xl" />
                <div className="space-y-2">
                    <div className="h-4 w-full max-w-2xl bg-white/8 rounded-full" />
                    <div className="h-4 w-3/4 max-w-xl bg-white/8 rounded-full" />
                    <div className="h-4 w-2/3 max-w-lg bg-white/8 rounded-full" />
                </div>
                <div className="flex gap-2 pt-2">
                    {[80, 96, 72, 88].map((w, i) => (
                        <div key={i} className="h-7 bg-emerald-500/10 rounded-full" style={{ width: w }} />
                    ))}
                </div>
                <div className="flex gap-3 pt-1">
                    <div className="h-10 w-40 bg-white/10 rounded-xl" />
                </div>
            </div>

            {/* Gallery skeleton */}
            <div className="max-w-6xl mx-auto px-8 py-12">
                <div className="h-8 w-48 bg-white/10 rounded-xl mb-10" />
                <div className="grid md:grid-cols-2 gap-10">
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="space-y-4">
                            <div className="h-64 bg-gray-900/60 rounded-2xl border border-white/[0.06]" />
                            <div className="h-5 w-48 bg-white/10 rounded-full" />
                            <div className="space-y-1.5">
                                <div className="h-3.5 w-full bg-white/8 rounded-full" />
                                <div className="h-3.5 w-5/6 bg-white/8 rounded-full" />
                                <div className="h-3.5 w-4/6 bg-white/8 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
