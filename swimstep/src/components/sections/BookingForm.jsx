import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle, Phone, Loader2 } from 'lucide-react';
import { bookingsAPI } from '@/lib/api';

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    time: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.age || !formData.contact) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await bookingsAPI.create(formData);
      
      if (response.success) {
        toast({
          title: "Booking Request Sent!",
          description: "We've received your request and will contact you shortly.",
          action: <CheckCircle className="text-green-500" />,
        });
        setFormData({ name: '', age: '', location: '', time: '', contact: '' });
      } else {
        throw new Error(response.error || 'Failed to submit booking');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "There was an error submitting your booking. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-2xl border-2 border-slate-100">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-gray-800">
                  <span role="img" aria-label="memo">📝</span> Book Your Free Trial or Consultation!
                </CardTitle>
                <CardDescription className="pt-2 text-lg">
                  Fill out the form below and we'll get in touch to arrange your session.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="e.g. Alex Tan" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age (or Child's Age)</Label>
                      <Input 
                        id="age" 
                        placeholder="e.g. 7" 
                        value={formData.age} 
                        onChange={handleChange} 
                        required 
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location (Condo Name / Area)</Label>
                    <Input 
                      id="location" 
                      placeholder="e.g. Mont Kiara" 
                      value={formData.location} 
                      onChange={handleChange} 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Input 
                      id="time" 
                      placeholder="e.g. Weekday Afternoons" 
                      value={formData.time} 
                      onChange={handleChange} 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Info (WhatsApp / Email)</Label>
                    <Input 
                      id="contact" 
                      placeholder="Your contact details" 
                      value={formData.contact} 
                      onChange={handleChange} 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Book My Free Trial'
                    )}
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 mb-2">Or contact us directly:</p>
                  <Button variant="outline" asChild>
                    <a href="https://wa.me/60102325333" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Message on WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
