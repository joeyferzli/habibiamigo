import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import contactBg from "@/assets/contact-bg.png";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent",
      description: "We'll get back to you soon."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  return <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${contactBg})`
    }}>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-display text-display-xl text-foreground mb-8 opacity-0 animate-fade-up">
              GET IN TOUCH
            </h1>
            
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Contact Info */}
            <div className="opacity-0 animate-fade-up delay-100">
              <div className="space-y-12">
                <div>
                  <h3 className="font-display text-xl text-foreground tracking-wider mb-3">
                    EMAIL
                  </h3>
                  <p className="text-muted-foreground">[Your contact email placeholder]</p>
                </div>

                <div>
                  <h3 className="font-display text-xl text-foreground tracking-wider mb-3">
                    INSTAGRAM
                  </h3>
                  <a 
                    href="https://www.instagram.com/habibixamigo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    @habibixamigo
                  </a>
                </div>

                <div>
                  
                  
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="opacity-0 animate-fade-up delay-200">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Label htmlFor="name" className="text-foreground font-display text-sm tracking-wider uppercase">
                    Name
                  </Label>
                  <Input id="name" type="text" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} required className="mt-3 bg-card border-border focus:border-foreground rounded-sm h-12" placeholder="Your name" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-display text-sm tracking-wider uppercase">
                    Email
                  </Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} required className="mt-3 bg-card border-border focus:border-foreground rounded-sm h-12" placeholder="your@email.com" />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-display text-sm tracking-wider uppercase">
                    Message
                  </Label>
                  <Textarea id="message" value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} required className="mt-3 bg-card border-border focus:border-foreground min-h-[180px] rounded-sm" placeholder="What's on your mind..." />
                </div>

                <Button type="submit" variant="premium" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;