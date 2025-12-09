import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground mb-8">
              Oops! Looks like this page got lost somewhere between Lebanon and Spain.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
