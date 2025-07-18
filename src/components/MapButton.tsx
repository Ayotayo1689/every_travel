"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {  MapPin } from "lucide-react"
import IframeMap from "./IframeMap"

interface MapButtonProps {
  address: string
  buttonText?: string
  modalTitle?: string
}

export default function MapButton({
  address,
  buttonText = "Show in Map",
  modalTitle = "Location Map",
}: MapButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {/* <Button className="gap-2 bg-white">
          <MapPin size={18} />
         
        </Button> */}

<Button variant="link" className="text-[#076476] p-6 rounded-none   w-full">
                  <MapPin className="h-8 w-8 text-[#076476]" />
                  {buttonText}
                </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] md:max-w-[700px] lg:max-w-[70vw]">
        <DialogHeader>
          <DialogTitle>{modalTitle}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <IframeMap address={address} height="80vw" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
