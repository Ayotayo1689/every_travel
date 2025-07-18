import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HotelIcon } from "@/assets/icons/Icons"

const offers = [
  {
    id: 1,
    icon: HotelIcon,
    title: "15% off next hotel in Lagos",
    description: "Use Code: LAGOS15",
    buttonText: "Book Hotel",
    buttonVariant: "outline" as const,
  },
  {
    id: 2,
    icon: HotelIcon,
    title: "₦3,000 off return airport ride",
    description: "Auto-applied on next ride",
    buttonText: "Book Ride",
    buttonVariant: "outline" as const,
  },
]

export default function Offers() {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-2xl">
        <h1 className="text-[20px] font-bold text-gray-900">Offers for You</h1>
      </div>

      <div className="flex  gap-6">
        {offers.map((offer) => (
          <Card className="p-4 rounded-sm border shadow-none flex-1 max-w-[320px]" key={offer.id}>
            <CardContent className="p-0" >
              <div className="space-y-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#E6F0F1] rounded-full">
                  <offer.icon/>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-[20px]">{offer.title}</h3>
                  <p className="text-gray-600 my-4">{offer.description}</p>
                </div>

                <Button variant={offer.buttonVariant} className="w-full mt-4 text-[#076476] font-[600] p-6 border-[#076476] bg-[#E6F0F1]">
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
