import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Car } from "lucide-react"

const offers = [
  {
    id: 1,
    icon: Building2,
    title: "15% off next hotel in Lagos",
    description: "Use Code: LAGOS15",
    buttonText: "Book Hotel",
    buttonVariant: "outline" as const,
  },
  {
    id: 2,
    icon: Car,
    title: "₦3,000 off return airport ride",
    description: "Auto-applied on next ride",
    buttonText: "Book Ride",
    buttonVariant: "outline" as const,
  },
]

export default function Offers() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Offers for You</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <Card key={offer.id}>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg">
                  <offer.icon className="w-6 h-6 text-teal-600" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{offer.title}</h3>
                  <p className="text-gray-600">{offer.description}</p>
                </div>

                <Button variant={offer.buttonVariant} className="w-full">
                  {offer.buttonText}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
