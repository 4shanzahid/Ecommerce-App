import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-center">
          Subscribe Our Newsletter
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Get the latest information and promo offers directly
        </p>
        <div className="flex  items-center space-x-2 rounded-none pt-10">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
