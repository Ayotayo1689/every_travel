"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, CreditCard, Copy } from "lucide-react"

const transactions = [
  {
    id: 1,
    type: "Hotel Booking",
    date: "20 Apr 2025",
    amount: -57000,
  },
  {
    id: 2,
    type: "Airport Ride - Lagos",
    date: "16 Apr 2025",
    amount: -35000,
  },
  {
    id: 3,
    type: "Wallet Funded",
    date: "16 Apr 2025",
    amount: 355000,
  },
  {
    id: 4,
    type: "Car Hire - Abuja",
    date: "16 Apr 2025",
    amount: -15000,
  },
]

export default function Wallet() {
  const [balance] = useState(165000)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Wallet</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Wallet Balance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Wallet balance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">₦{balance.toLocaleString()}</span>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Fund Wallet
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Manage Cards */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Manage Cards</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <CreditCard className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-medium">Visa</p>
                  <p className="text-sm text-gray-500">•••• 6789</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              <Plus className="w-4 h-4 mr-2" />
              Add debit card
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Transactions</CardTitle>
          <p className="text-sm text-gray-500">April 2025</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
                <div>
                  <p className="font-medium">{transaction.type}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <span className={`font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                  {transaction.amount > 0 ? "+" : "-"} ₦{Math.abs(transaction.amount).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
