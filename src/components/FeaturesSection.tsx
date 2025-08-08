import React from 'react';
import { Star, Award, Package, Headphones } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "High Quality",
      description: "crafted from top materials"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Warranty Protection",
      description: "Over 2 years"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Free Shipping",
      description: "Order over 150 $"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24 / 7 Support",
      description: "Dedicated support"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-shrink-0 text-gray-700">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;