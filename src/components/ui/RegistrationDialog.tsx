import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const RegistrationDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="auth" size="sm">
          Sign Up
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Student Registration</h2>
          <p className="text-sm text-muted-foreground">Join LauraTek and start your learning journey today</p>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Full Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Email Address" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" placeholder="Select Country" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Enter phone number</Label>
                <Input id="phone" type="tel" placeholder="+1 (US)" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="qualifications">Qualifications</Label>
                <Input id="qualifications" placeholder="Select Education Status" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year (e.g., 2024)</Label>
                <Input id="year" placeholder="Year (e.g., 2024)" disabled />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="codingInterests">Coding/Technical Interests (Select up to 3)</Label>
              <Input id="codingInterests" placeholder="Select Coding Interests" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nonCodingInterests">Non-Coding Interests (Select up to 3)</Label>
              <Input id="nonCodingInterests" placeholder="Select Non-Coding Interests" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="State" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="City" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm Password" />
              </div>
            </div>
            <Button className="w-full">Register Now</Button>
          </div>
          <div className="text-sm text-muted-foreground text-right">
            Already Registered? <a href="#" className="text-primary underline">Sign in</a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;