import { useState } from "react";
import { motion } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface GetQuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GetQuoteModal = ({ open, onOpenChange }: GetQuoteModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    service: "",
    budget: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.business.trim() || !formData.service) {
      toast({
        title: "Please fill in required fields",
        description: "Name, business name, and service are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    onOpenChange(false);
    
    // Reset form
    setFormData({
      name: "",
      business: "",
      service: "",
      budget: "",
      notes: "",
    });

    toast({
      title: "Quote Request Sent! ✓",
      description: "We'll get back to you within 24 hours. Thank you for choosing Ovations!",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-gradient-gold">
            Get a Free Quote
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us about your project and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Your Name <span className="text-primary">*</span>
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background border-border focus:border-primary"
              maxLength={100}
            />
          </div>

          {/* Business Name */}
          <div className="space-y-2">
            <Label htmlFor="business" className="text-foreground">
              Business Name <span className="text-primary">*</span>
            </Label>
            <Input
              id="business"
              placeholder="Your Business Name"
              value={formData.business}
              onChange={(e) => setFormData({ ...formData, business: e.target.value })}
              className="bg-background border-border focus:border-primary"
              maxLength={100}
            />
          </div>

          {/* Service */}
          <div className="space-y-2">
            <Label htmlFor="service" className="text-foreground">
              Service Needed <span className="text-primary">*</span>
            </Label>
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
            >
              <SelectTrigger className="bg-background border-border focus:border-primary">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="signage">Business Signage</SelectItem>
                <SelectItem value="branding">Brand Identity</SelectItem>
                <SelectItem value="vehicle">Vehicle Branding</SelectItem>
                <SelectItem value="prints">Print Materials</SelectItem>
                <SelectItem value="other">Other / Multiple Services</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-foreground">
              Budget Range
            </Label>
            <Select
              value={formData.budget}
              onValueChange={(value) => setFormData({ ...formData, budget: value })}
            >
              <SelectTrigger className="bg-background border-border focus:border-primary">
                <SelectValue placeholder="Select your budget (optional)" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="under-5k">Under R5,000</SelectItem>
                <SelectItem value="5k-15k">R5,000 - R15,000</SelectItem>
                <SelectItem value="15k-30k">R15,000 - R30,000</SelectItem>
                <SelectItem value="30k-plus">R30,000+</SelectItem>
                <SelectItem value="not-sure">Not Sure Yet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-foreground">
              Project Details
            </Label>
            <Textarea
              id="notes"
              placeholder="Tell us more about what you need..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="bg-background border-border focus:border-primary min-h-[100px] resize-none"
              maxLength={1000}
            />
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Quote Request
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GetQuoteModal;
