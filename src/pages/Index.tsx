import { MessageSquare, Globe, Paintbrush, GitFork, Sparkles } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          A superhuman full stack<br />product engineer.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
        <FeatureCard 
          icon={<MessageSquare size={24} />}
          title="Instant & intuitive"
          description="Live rendering, handles image input, has instant undo and lets you collaborate with branching. The AI fixes your bugs. One-click deploy when ready."
        />
        
        <FeatureCard 
          icon={<Paintbrush size={24} />}
          title="Beautiful design"
          description="We believe your product should look good. Lovable follows best practice UI & UX principles to make sure every idea you bring to life is beautifully designed."
        />
        
        <FeatureCard 
          icon={<Globe size={24} />}
          title="Support any backend"
          description="Lovable has support for databases, API integrations and back-end functionality. Connect your own or use our Supabase connector."
        />
        
        <FeatureCard 
          icon={<Sparkles size={24} />}
          title="Select & edit"
          description="The accuracy you need to make fine grained changes. With Select & Edit you click an element and describe what you want updated."
        />
        
        <FeatureCard 
          icon={<GitFork size={24} />}
          title="Github integration"
          description="Connect Lovable to your GitHub account to automatically sync the code to your repository. Perfect for project hand offs and more advanced workflows."
        />
      </div>
    </div>
  );
};

export default Index;