import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowBackIcon, CameraPlusIcon } from "@/assets/icons/Icons";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  const [edit, setEdit] = useState<any>(null);
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className="space-y-6">
      <div className=" flex gap-4 p-4 rounded-xl bg-white ">
        <Avatar className="w-14 cursor-pointer h-14">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback className="bg-[#EFF0F0] text-white text-lg">
            <CameraPlusIcon />
          </AvatarFallback>
        </Avatar>
        <div className="text-[#1D1F1F]">
          <h3 className="font-bold text-xl">Jane Doe</h3>
          <p className=" text-base">janedoe@gmail.com</p>
        </div>
      </div>
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
                    <div className="mb-6">
                      <TextField
                        id="filled-basic"
                        label="First name"
                        variant="filled"
                        defaultValue={"Jane"}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        sx={{
                          width: "100%",
                          backgroundColor: "white",
                          border: "0.5px solid #032A3280",
                          borderRadius: "6px",
                          overflow: "clip",
                          "& .MuiFilledInput-root": {
                            backgroundColor: "white",
                            "&:hover": {
                              backgroundColor: "white", // no change on hover
                            },
                          },
                          "& label.Mui-focused": {
                            color: "#5D6465", // label color when focused
                          },
                        }}
                      />
                    </div>
                    <div className="mb-6">
                      <TextField
                        id="filled-basic"
                        label="Last name"
                        variant="filled"
                        defaultValue={"Doe"}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        sx={{
                          width: "100%",
                          backgroundColor: "white",
                          border: "0.5px solid #032A3280",
                          borderRadius: "6px",
                          overflow: "clip",
                          "& .MuiFilledInput-root": {
                            backgroundColor: "white",
                            "&:hover": {
                              backgroundColor: "white", // no change on hover
                            },
                          },
                          "& label.Mui-focused": {
                            color: "#5D6465", // label color when focused
                          },
                        }}
                      />
                    </div>
                    <div className="mb-6">
                      <TextField
                        id="filled-basic"
                        label="Date of birth"
                        variant="filled"
                        placeholder="MM/DD/YYYY"
                        type="date"
                        InputProps={{
                          disableUnderline: true,
                        }}
                        sx={{
                          width: "100%",
                          backgroundColor: "white",
                          border: "0.5px solid #032A3280",
                          borderRadius: "6px",
                          overflow: "clip",
                          "& .MuiFilledInput-root": {
                            backgroundColor: "white",
                            "&:hover": {
                              backgroundColor: "white", // no change on hover
                            },
                          },
                          "& label.Mui-focused": {
                            color: "#5D6465", // label color when focused
                          },
                        }}
                      />
                    </div>
                    <div className="mb-6">
                      <Label className="text-[16px] font-[700] mb-4">
                        Gender
                      </Label>
                      <RadioGroup
                        className="flex flex-col gap-6"
                        defaultValue="none"
                      >
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
                    <div className="flex mt-12 gap-2">
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
                    <div className="mb-6">
                      <TextField
                        id="filled-basic"
                        label="Email"
                        type="email"
                        variant="filled"
                        defaultValue="janedoe@gmail.com"
                        InputProps={{
                          disableUnderline: true,
                        }}
                        sx={{
                          width: "100%",
                          backgroundColor: "white",
                          border: "0.5px solid #032A3280",
                          borderRadius: "6px",
                          overflow: "clip",
                          "& .MuiFilledInput-root": {
                            backgroundColor: "white",
                            "&:hover": {
                              backgroundColor: "white", // no change on hover
                            },
                          },
                          "& label.Mui-focused": {
                            color: "#5D6465", // label color when focused
                          },
                        }}
                      />
                    </div>
                    <div className="flex mb-6 gap-2">
                      <div className="w-1/3 ">
                        <FormControl
                          variant="filled"
                          sx={{
                            minWidth: "100%",
                            backgroundColor: "white",
                            border: "1px solid #032A3280",
                            borderRadius: "6px",
                            overflow:"clip",
                            "& .MuiFilledInput-root": {
                              backgroundColor: "white",
                              disableUnderline: true,
                              "&:hover": {
                                backgroundColor: "white", // No change on hover
                              },
                              "&::before, &::after": {
                                borderBottom: "none !important", // Remove bottom border
                              },
                            },
                            "& label.Mui-focused": {
                              color: "#1D1F1F", // Focused label color
                            },
                          }}
                        >
                          <InputLabel id="demo-simple-select-filled-label">
                            Age
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={age}
                            onChange={handleChange}
                            disableUnderline
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="w-2/3">
                        <TextField
                          id="filled-basic"
                          label="Phone number"
                          variant="filled"
                          defaultValue="+234 8012345678"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          sx={{
                            width: "100%",
                            backgroundColor: "white",
                            border: "0.5px solid #032A3280",
                            borderRadius: "6px",
                            overflow: "clip",
                            "& .MuiFilledInput-root": {
                              backgroundColor: "white",
                              "&:hover": {
                                backgroundColor: "white", // no change on hover
                              },
                            },
                            "& label.Mui-focused": {
                              color: "#5D6465", // label color when focused
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <TextField
                        id="filled-basic"
                        label="Country"
                        variant="filled"
                        defaultValue={"Nigeria"}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        sx={{
                          width: "100%",
                          backgroundColor: "white",
                          border: "0.5px solid #032A3280",
                          borderRadius: "6px",
                          overflow: "clip",
                          "& .MuiFilledInput-root": {
                            backgroundColor: "white",
                            "&:hover": {
                              backgroundColor: "white", // no change on hover
                            },
                          },
                          "& label.Mui-focused": {
                            color: "#5D6465", // label color when focused
                          },
                        }}
                      />
                    </div>
                    <div className="mb-6">
                      <TextField
                        id="filled-basic"
                        label="Street name and house number"
                        variant="filled"
                        InputProps={{
                          disableUnderline: true,
                        }}
                        sx={{
                          width: "100%",
                          backgroundColor: "white",
                          border: "0.5px solid #032A3280",
                          borderRadius: "6px",
                          overflow: "clip",
                          "& .MuiFilledInput-root": {
                            backgroundColor: "white",
                            "&:hover": {
                              backgroundColor: "white", // no change on hover
                            },
                          },
                          "& label.Mui-focused": {
                            color: "#5D6465", // label color when focused
                          },
                        }}
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-1/2">
                        <TextField
                          id="filled-basic"
                          label="City"
                          variant="filled"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          sx={{
                            width: "100%",
                            backgroundColor: "white",
                            border: "0.5px solid #032A3280",
                            borderRadius: "6px",
                            overflow: "clip",
                            "& .MuiFilledInput-root": {
                              backgroundColor: "white",
                              "&:hover": {
                                backgroundColor: "white", // no change on hover
                              },
                            },
                            "& label.Mui-focused": {
                              color: "#5D6465", // label color when focused
                            },
                          }}
                        />
                      </div>
                      <div className="w-1/2 mb-2">
                        <TextField
                          id="filled-basic"
                          label="State"
                          variant="filled"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          sx={{
                            width: "100%",
                            backgroundColor: "white",
                            border: "0.5px solid #032A3280",
                            borderRadius: "6px",
                            overflow: "clip",
                            "& .MuiFilledInput-root": {
                              backgroundColor: "white",
                              "&:hover": {
                                backgroundColor: "white", // no change on hover
                              },
                            },
                            "& label.Mui-focused": {
                              color: "#5D6465", // label color when focused
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <TextField
                        id="filled-basic"
                        label="Zip code"
                        variant="filled"
                        InputProps={{
                          disableUnderline: true,
                        }}
                        sx={{
                          width: "100%",
                          backgroundColor: "white",
                          border: "0.5px solid #032A3280",
                          borderRadius: "6px",
                          overflow: "clip",
                          "& .MuiFilledInput-root": {
                            backgroundColor: "white",
                            "&:hover": {
                              backgroundColor: "white", // no change on hover
                            },
                          },
                          "& label.Mui-focused": {
                            color: "#5D6465", // label color when focused
                          },
                        }}
                      />
                    </div>
                    <div className="flex mt-12 gap-2">
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
