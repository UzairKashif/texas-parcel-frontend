import React from 'react'
import { Brain, Image, Database } from 'lucide-react'

export const AIFeatures = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-900 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI-Powered Property Insights
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge artificial intelligence to provide you with
            deeper property insights and visualization tools
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Image size={24} className="text-green-700 dark:text-green-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Generative Property Visualization
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our proprietary Generative Adversarial Network (GAN) helps you
              visualize potential development opportunities on your property.
              See different architectural styles and landscaping options before
              making any investments.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-700 dark:bg-green-500 rounded-full mr-2"></div>
                3D property visualization
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-700 dark:bg-green-500 rounded-full mr-2"></div>
                Multiple development scenarios
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-700 dark:bg-green-500 rounded-full mr-2"></div>
                Seasonal variations preview
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Database size={24} className="text-green-700 dark:text-green-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Data Analytics & Insights
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Make informed decisions with our comprehensive data analytics
              platform that aggregates and analyzes information from multiple
              sources to provide you with actionable insights.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-700 dark:bg-green-500 rounded-full mr-2"></div>
                Property value trends
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-700 dark:bg-green-500 rounded-full mr-2"></div>
                Environmental analysis
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-700 dark:bg-green-500 rounded-full mr-2"></div>
                Development potential scoring
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#002f45] hover:bg-[#002f45]/90 transition-colors duration-300">
            <Brain size={20} className="mr-2" />
            Try Our AI Features
          </button>
        </div>
      </div>
    </section>
  )
}