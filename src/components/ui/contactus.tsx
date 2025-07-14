import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Import Textarea if available
import { ContactUs } from "@/services/apiservices";
import { useState } from "react";

interface ContactUsDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Contactus = ({ open, setOpen }: ContactUsDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    mobile_number: "",
    qualification: "",
    year_of_passedout: "",
    interest: "",
    state: "",
    city: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await ContactUs(formData);
      setSuccess("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        country: "",
        mobile_number: "",
        qualification: "",
        year_of_passedout: "",
        interest: "",
        state: "",
        city: "",
        description: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to send message.");
      } else {
        setError("Failed to send message.");
      }
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-sm text-muted-foreground">We'd love to hear from you!</p>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" placeholder="Select Country" value={formData.country} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile_number">Enter phone number</Label>
                <Input id="mobile_number" type="tel" placeholder="Phone Number" value={formData.mobile_number} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="qualification">Qualifications</Label>
                <Input id="qualification" placeholder="Select Education Status" value={formData.qualification} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year_of_passedout">Year (e.g., 2024)</Label>
                <Input id="year_of_passedout" placeholder="Year (e.g., 2024)" value={formData.year_of_passedout} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="interest">Interest</Label>
                <Input id="interest" placeholder="Your Interest" value={formData.interest} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="State" value={formData.state} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="City" value={formData.city} onChange={handleChange} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Your message here"
                className="w-full h-24 p-2 border rounded"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            {success && <div className="text-green-600 text-sm">{success}</div>}
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Contactus;