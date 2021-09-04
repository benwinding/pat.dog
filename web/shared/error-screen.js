export function ErrorScreen({label}) {
    return <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                    Error
                </h1>
                <h1 className="mb-5 text-2xl font-bold">
                    {label}
                </h1>
            </div>
        </div>
    </div>
}