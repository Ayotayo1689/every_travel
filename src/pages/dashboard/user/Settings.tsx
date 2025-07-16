import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-2xl">
        <h1 className="text-[20px] font-bold text-gray-900">Settings</h1>
      </div>

      <div className="space-y-6 bg-white rounded-2xl p-6 h-[100%]">
        <div className=" mb-16">
          <div className="text-lg mb-4" >Security Settings</div>

          <Button
            variant="outline"
            className="w-full max-w-[500px] justify-between p-4 h-auto"
          >
            <span>Change Password</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className=" mb-16">
          <div className="text-lg mb-4" >Account Management</div>

          <Button
            variant="outline"
            className="w-full max-w-[500px] justify-between p-4 h-auto"
          >
            <span className="text-[#86251E]">Delete Account</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Account Management */}
      </div>
    </div>
  );
}
