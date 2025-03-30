import React from 'react'

const HomeSection5 = () => {
  return (
    <div id='plans'>
        <div className="container max-w-screen-xl mx-auto px-12 md:px-24 relative mt-16">
    <h2 className="text-[40px] font-bold mb-4 text-white text-left">
        A Plan to Suit Your Needs
    </h2>

    <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16">
            {[
                { name: "Basic", quality: "720p", price: "EGP 100/mo", gradient: "from-blue-700 to-black" },
                { name: "Standard", quality: "1080p", price: "EGP 170/mo", gradient: "from-purple-700 to-black" },
                { name: "Premium", quality: "4K + HDR", price: "EGP 240/mo", gradient: "from-red-700 to-black" },
            ].map((plan, index) => (
                <div
                    key={index}
                    className={`relative bg-gradient-to-br ${plan.gradient} text-white p-8 rounded-lg shadow-md border border-gray-700 flex flex-col justify-between items-start text-left transition-all duration-300 hover:scale-105`}
                >
                    <div className="mt-4 space-y-2">
                        <h2 className="text-3xl font-bold">{plan.name}</h2>
                        <p className="text-xl font-semibold text-gray-300">{plan.quality}</p>
                        <p className="text-sm text-gray-500">✅ Best Video Quality</p>
                        <p className="text-sm text-gray-500">✅ For your phone, tablet, laptop, and TV</p>
                        <h1 className="text-xl font-bold mt-2">{plan.price}</h1>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
</div>
  )
}

export default HomeSection5