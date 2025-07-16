import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="space-y-6">
        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Security Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" className="w-full justify-between p-4 h-auto">
              <span>Change Password</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Account Management */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Account Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              variant="ghost"
              className="w-full justify-between p-4 h-auto text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <div className="text-left">
                <div className="font-medium">Delete Account</div>
                <div className="text-sm text-gray-500">This will permanently close your account</div>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
