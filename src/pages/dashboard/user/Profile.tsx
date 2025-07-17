import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowBackIcon } from "@/assets/icons/Icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import TextField from "@mui/material/TextField";

export default function Profile() {
  const [edit, setEdit] = useState<any>(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {edit === null ? (
          <>
            <Card className="bg-white shadow-none border-none">
              <CardHeader className="flex  flex-row items-center justify-between">
                <CardTitle className="text-lg font-[700]">
                  Basic Information
                </CardTitle>
                <Button
                  onClick={() => setEdit("basic")}
                  className="text-[#076476] border-none font-[700]"
                  variant="outline"
                  size="sm"
                >
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
                  <div className="flex  justify-between items-center">
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
                <CardTitle className="text-lg  font-[700]">
                  Contact Information
                </CardTitle>
                <Button
                  onClick={() => setEdit("contact")}
                  className="text-[#076476] border-none font-[700]"
                  variant="outline"
                  size="sm"
                >
                  Edit
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex  justify-between items-center">
                  <label className="text-sm font-medium text-gray-500">
                    Email
                  </label>
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
          </>
        ) : (
          <div className="bg-white p-5 rounded-2xl">
            <div className="">
              <Button variant="ghost" onClick={() => setEdit(null)}>
                <ArrowBackIcon />
              </Button>

              {edit === "basic" ? (
                <div className=" max-w-[500px] mt-6 m-auto">
                  <h1 className="mb-2 font-[700] text-[20px]">
                    Edit basic Information
                  </h1>

                  <p className="text-[16px] mb-6">
                    Make sure this information matches your travel ID, like your
                    passport or license.
                  </p>
                  <form className="space-y-4">
                    <div>
                      {/* <Label>First name *</Label>
                      <Input  defaultValue="Jane" /> */}

                      <TextField
                        id="filled-basic"
                        label="Filled"
                        variant="filled"
                        sx={{
                          width:"100%",
                          // border:"1px solid red",
                          backgroundColor:"white"
                        }}
                      />
                    </div>
                    <div>
                      <Label>Last name *</Label>
                      <Input defaultValue="Doe" />
                    </div>
                    <div>
                      <Label>Date of birth *</Label>
                      <Input placeholder="MM/DD/YYYY" type="date" />
                    </div>
                    <div>
                      <Label>Gender</Label>
                      <RadioGroup defaultValue="none">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="none" id="none" />
                          <Label htmlFor="none">I prefer not to say</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        className="bg-[#076476] text-white rounded-full px-6"
                      >
                        Update Information
                      </Button>
                      {/* <Button variant="ghost" onClick={handleCancel}>
                        Cancel
                      </Button> */}
                    </div>
                  </form>
                </div>
              ) : (
                <div className=" max-w-[500px] mt-6 m-auto">
                  <form className="space-y-4">
                    <h1 className="mb-2 font-[700] text-[20px]">
                      Edit contact Information
                    </h1>

                    <p className="text-[16px] mb-6">
                      Make sure this information matches your travel ID, like
                      your passport or license.
                    </p>
                    <div>
                      <Label>Email *</Label>
                      <Input type="email" defaultValue="janedoe@gmail.com" />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-1/3">
                        <Label>Country code</Label>
                        <Input defaultValue="+234" />
                      </div>
                      <div className="w-2/3">
                        <Label>Phone number</Label>
                        <Input defaultValue="+234 8012345678" />
                      </div>
                    </div>
                    <div>
                      <Label>Country *</Label>
                      <Input defaultValue="Nigeria" />
                    </div>
                    <div>
                      <Label>Street name and house number</Label>
                      <Input />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-1/2">
                        <Label>City</Label>
                        <Input />
                      </div>
                      <div className="w-1/2">
                        <Label>State</Label>
                        <Input />
                      </div>
                    </div>
                    <div>
                      <Label>Zip code</Label>
                      <Input />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        className="bg-[#076476] text-white rounded-full px-6"
                      >
                        Update Information
                      </Button>
                      {/* <Button variant="ghost" onClick={handleCancel}>
                        Cancel
                      </Button> */}
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Basic Information */}
      </div>
    </div>
  );
}
