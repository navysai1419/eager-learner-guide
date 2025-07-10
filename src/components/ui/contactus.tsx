import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ContactUsDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Contactus = ({ open, setOpen }: ContactUsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-sm text-muted-foreground">We'd love to hear from you!</p>
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
                <Input id="year" placeholder="Year (e.g., 2024)" />
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
            <div className="space-y-2">
              <Label htmlFor="message">Description</Label>
              <textarea
                id="message"
                placeholder="Your message here"
                className="w-full h-24 p-2 border rounded"
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Contactus;