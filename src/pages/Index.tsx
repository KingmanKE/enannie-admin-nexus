
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-ennanie-50 to-blue-100">
      <div className="max-w-3xl text-center space-y-6 px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-ennanie-800">
            Welcome to ENNANIE
          </h1>
          <p className="text-xl text-gray-600">
            Connecting parents with qualified caregivers
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/admin">
            <Button size="lg" className="gap-2">
              <Shield size={18} />
              Access Admin Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
