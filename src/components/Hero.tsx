import { ArrowRight, Github, FileText, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with hero image */}
      <div 
        className="absolute inset-0 bg-gradient-hero opacity-90"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="relative container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-white/90 mb-6">
              <Zap className="h-4 w-4 text-accent" />
              Propulsé par l'IA Gemini
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Documentez vos projets{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                automatiquement
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transformez vos repositories GitHub en portfolios professionnels avec des README, 
              Dockerfile, CI/CD et plus encore, générés intelligemment par l'IA.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="gap-2 bg-primary hover:bg-primary/90 text-white shadow-glow hover:shadow-glow/80 transition-all duration-300 text-lg px-8 py-4"
              onClick={() => window.location.href = '/dashboard'}
            >
              <Github className="h-5 w-5" />
              Commencer gratuitement
              <ArrowRight className="h-4 w-4" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4"
            >
              Voir la démo
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <FileText className="h-8 w-8 text-primary" />,
                title: "README Professionnel",
                description: "Génère des README détaillés et attractifs"
              },
              {
                icon: <Settings className="h-8 w-8 text-accent" />,
                title: "Docker & CI/CD",
                description: "Configure automatiquement Docker et les pipelines"
              },
              {
                icon: <Zap className="h-8 w-8 text-warning" />,
                title: "IA Avancée",
                description: "Analyse votre code avec Gemini AI"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card/10 backdrop-blur-sm border-white/10 p-6 text-center hover:bg-card/20 transition-all duration-300">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;