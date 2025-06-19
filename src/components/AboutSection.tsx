import React from 'react'
import { CheckCircle } from 'lucide-react'

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-950 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Texas Parcels
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Founded in 2010, Texas Parcels has grown to become a leader in land
              sales and investment opportunities across the United States. Our
              mission is to connect buyers with their perfect piece of land
              while providing exceptional service and expertise throughout the
              process.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              With a team of experienced land specialists and a comprehensive
              database of properties, we offer unmatched knowledge of local
              markets and land values. Whether you're looking for agricultural
              land, a development opportunity, or a scenic retreat, we have the
              expertise to help you find exactly what you need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-green-700 dark:text-green-500 mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-gray-700 dark:text-gray-300">Over 10,000 acres sold</span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-green-700 dark:text-green-500 mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  Nationwide property network
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-green-700 dark:text-green-500 mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-gray-700 dark:text-gray-300">Expert land valuation</span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  size={20}
                  className="text-green-700 dark:text-green-500 mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-gray-700 dark:text-gray-300">Personalized service</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
              alt="Land specialists at work"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-8 -left-8 bg-green-700 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <div className="text-4xl font-bold mb-1">13+</div>
              <div className="text-sm uppercase tracking-wider">
                Years of Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}