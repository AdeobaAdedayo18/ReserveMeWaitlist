"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl p-8 ${
            plan.popular
              ? "bg-rose-500 text-white shadow-xl scale-105"
              : "bg-white shadow-lg"
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-rose-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
          )}

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span
                className={plan.popular ? "text-rose-100" : "text-gray-500"}
              >
                /month
              </span>
            </div>
            <p
              className={`mb-6 ${
                plan.popular ? "text-rose-100" : "text-gray-600"
              }`}
            >
              {plan.description}
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check
                  className={`h-5 w-5 mr-3 ${
                    plan.popular ? "text-rose-100" : "text-rose-500"
                  }`}
                />
                <span
                  className={plan.popular ? "text-rose-100" : "text-gray-600"}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <Button
            className={`w-full ${
              plan.popular
                ? "bg-white text-rose-500 hover:bg-rose-50"
                : "bg-rose-500 text-white hover:bg-rose-600"
            }`}
          >
            Get Started
          </Button>
        </div>
      ))}
    </div>
  );
}

const plans = [
  {
    name: "Basic",
    price: 0,
    description: "Perfect for getting started",
    features: [
      "Up to 5 venue listings",
      "Basic analytics",
      "Email support",
      "Basic venue details",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: 49,
    description: "Best for growing businesses",
    features: [
      "Up to 20 venue listings",
      "Advanced analytics",
      "Priority support",
      "Virtual tours",
      "Custom branding",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For large organizations",
    features: [
      "Unlimited venue listings",
      "Custom analytics",
      "24/7 phone support",
      "API access",
      "White-label solution",
    ],
    popular: false,
  },
];
