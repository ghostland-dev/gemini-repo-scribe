import { ArrowRight, Github, Sparkles, FileCheck, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Github className="h-12 w-12 text-primary" />,
      title: "Connectez GitHub",
      description: "Authentifiez-vous avec votre compte GitHub et sélectionnez les repositories à documenter automatiquement.",
      step: "01"
    },
    {
      icon: <Sparkles className="h-12 w-12 text-accent" />,
      title: "IA Analyse",
      description: "Notre IA Gemini analyse votre code, structure, dépendances et technologies utilisées en profondeur.",
      step: "02"
    },
    {
      icon: <FileCheck className="h-12 w-12 text-success" />,
      title: "Génération Smart",
      description: "Génération automatique de README, Dockerfile, CI/CD, badges et toute la documentation professionnelle.",
      step: "03"
    },
    {
      icon: <Rocket className="h-12 w-12 text-primary" />,
      title: "Déploiement",
      description: "Commits automatiques avec votre signature GitHub et mise en ligne de votre portfolio amélioré.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comment ça fonctionne
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            En quelques clics, transformez vos projets GitHub en portfolios 
            professionnels qui impressionnent les recruteurs et collaborateurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines between steps */}
          <div className="hidden lg:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-accent to-success opacity-50"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-card/10 backdrop-blur-sm border-white/10 text-center hover:bg-card/20 transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="relative mx-auto mb-4">
                    <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.step}
                    </div>
                    <div className="bg-gradient-card p-4 rounded-full w-fit mx-auto">
                      {step.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
              
              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center lg:hidden mt-6 mb-6">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;