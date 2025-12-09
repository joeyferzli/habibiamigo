import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display text-display-xl text-foreground mb-6">404</h1>
            <h2 className="font-display text-display-sm text-foreground mb-6">
              PAGE NOT FOUND
            </h2>
            <p className="text-muted-foreground mb-12">
              Looks like this page got lost somewhere between Lebanon and Spain.
            </p>
            <Button variant="premium" size="lg" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
