import { Check, X } from "lucide-react";

export function FeatureComparison() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4">Feature</th>
            <th className="p-4">Basic</th>
            <th className="p-4 bg-rose-50">Pro</th>
            <th className="p-4">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={feature.name}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="p-4 font-medium">{feature.name}</td>
              <td className="p-4 text-center">
                {feature.basic ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                )}
              </td>
              <td className="p-4 text-center bg-rose-50">
                {feature.pro ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                )}
              </td>
              <td className="p-4 text-center">
                {feature.enterprise ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const features = [
  {
    name: "Venue Listings",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Virtual Tours",
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Analytics Dashboard",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Custom Branding",
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "API Access",
    basic: false,
    pro: false,
    enterprise: true,
  },
  {
    name: "24/7 Support",
    basic: false,
    pro: false,
    enterprise: true,
  },
  {
    name: "Booking Management",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Payment Processing",
    basic: true,
    pro: true,
    enterprise: true,
  },
];
