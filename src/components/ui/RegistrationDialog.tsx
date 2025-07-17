import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";
import SignInDialog from "./SignInDialog";
import { registerGuest } from "@/services/apiservices";

interface RegistrationDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const technicalSkills = [
  "Java", "Python", "React", "Node.js", "SQL", "HTML/CSS","Cloud+Devops","UI/UX"
];
const nonTechnicalSkills = [
  "Communication", "Management", "Marketing", "Sales", "Design"
];

const RegistrationDialog = ({ open, setOpen }: RegistrationDialogProps) => {
  const [category, setCategory] = useState("");
  const [skill, setSkill] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    educational_status: "",
    qualification: "",
    passedout_year: "",
    state: "",
    city: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!category || !skill) {
      setError("Please select category and skill");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        country: form.country,
        educational_status: form.educational_status,
        qualification: form.qualification,
        passedout_year: form.passedout_year,
        interest: skill, // send only the selected skill
        state: form.state,
        city: form.city,
        password: form.password
      };
      await registerGuest(payload);
      setSuccess("Registration successful!");
      setTimeout(() => setOpen(false), 1500);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <h2 className="text-2xl font-bold">Student Registration</h2>
          <p className="text-sm text-muted-foreground">Join LauraTek and start your learning journey today</p>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required/>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" placeholder="Country" value={form.country} onChange={handleChange}  required/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Enter phone number</Label>
                <Input id="phone" type="tel" placeholder="+91XXXXXXXXXX" value={form.phone} onChange={handleChange} required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="qualifications">Qualifications</Label>
                <Input id="qualification" placeholder="Qualification" value={form.qualification} onChange={handleChange} required/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year (e.g., 2024)</Label>
                <Input id="passedout_year" placeholder="Year (e.g., 2024)" value={form.passedout_year} onChange={handleChange} required/>
              </div>
            </div>
            {/* Category and Skill Selects */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={v => { setCategory(v); setSkill(""); }}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="nonTechnical">Non-Technical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="skill">{category === "technical" ? "Technical Skill" : category === "nonTechnical" ? "Non-Technical Skill" : "Skill"}</Label>
                <Select value={skill} onValueChange={setSkill} disabled={!category}>
                  <SelectTrigger id="skill">
                    <SelectValue placeholder={category === "technical" ? "Select Technical Skill" : category === "nonTechnical" ? "Select Non-Technical Skill" : "Select Skill"} />
                  </SelectTrigger>
                  <SelectContent>
                    {category === "technical" && technicalSkills.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                    {category === "nonTechnical" && nonTechnicalSkills.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="State" value={form.state} onChange={handleChange} required/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="City" value={form.city} onChange={handleChange} required/>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
              </div>
            </div>
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            {success && <div className="text-green-600 text-sm text-center">{success}</div>}
            <Button className="w-full" type="submit" disabled={loading}>{loading ? "Registering..." : "Register Now"}</Button>
          </div>
          <div className="text-sm text-muted-foreground text-right">
            Already Registered? <a href="#" className="text-primary underline"><SignInDialog/></a> 
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;