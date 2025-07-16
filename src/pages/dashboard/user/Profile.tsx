import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Profile() {
  const [edit, setEdit] = useState(null)
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {/* Basic Information */}
        <Card className="bg-white shadow-none border-none">
          <CardHeader className="flex  flex-row items-center justify-between">
            <CardTitle className="text-lg font-[700]">Basic Information</CardTitle>
            <Button className="text-[#076476] border-none font-[700]" variant="outline" size="sm">
              Edit
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex  justify-between items-center">
                <label className="text-sm font-medium text-gray-500">
                  First name
                </label>
                <p className="mt-1">Jane</p>
              </div>
              <div  className="flex  justify-between items-center">
                <label className="text-sm font-medium text-gray-500">
                  Last name
                </label>
                <p className="mt-1">Doe</p>
              </div>
            </div>
            <div className="flex  justify-between items-center">
              <label className="text-sm font-medium text-gray-500">
                Date of birth
              </label>
              <p className="mt-1 text-gray-500">Not provided</p>
            </div>
            <div className="flex  justify-between items-center">
              <label className="text-sm font-medium text-gray-500">
                Gender
              </label>
              <p className="mt-1 text-gray-500">Not Provided</p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-white shadow-none border-none">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg  font-[700]">Contact Information</CardTitle>
            <Button className="text-[#076476] border-none font-[700]" variant="outline" size="sm">
              Edit
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex  justify-between items-center">
              <label className="text-sm font-medium text-gray-500">Email</label>
              <p className="mt-1">janedoe@gmail.com</p>
            </div>
            <div className="flex  justify-between items-center">
              <label className="text-sm font-medium text-gray-500">
                Phone number
              </label>
              <p className="mt-1">+234 8012345678</p>
            </div>
            <div className="flex  justify-between items-center">
              <label className="text-sm font-medium text-gray-500">
                Country
              </label>
              <p className="mt-1">Nigeria</p>
            </div>
            <div className="flex  justify-between items-center">
              <label className="text-sm font-medium text-gray-500">
                Address
              </label>
              <p className="mt-1 text-gray-500">Not Provided</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
