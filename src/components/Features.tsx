import { CheckCircle, Code, FileText, GitBranch, Rocket, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "README Intelligent",
      description: "Génère automatiquement des README complets avec sections techniques, installation, utilisation et exemples basés sur l'analyse de votre code."
    },
    {
      icon: <Code className="h-10 w-10 text-accent" />,
      title: "Dockerfile & Compose",
      description: "Crée des configurations Docker optimisées selon votre stack technique avec multi-stage builds et bonnes pratiques de sécurité."
    },
    {
      icon: <GitBranch className="h-10 w-10 text-primary" />,
      title: "CI/CD Pipeline",
      description: "Configure des workflows GitHub Actions pour tests automatisés, builds, déploiements et releases avec les meilleures pratiques DevOps."
    },
    {
      icon: <Shield className="h-10 w-10 text-success" />,
      title: "Sécurité Intégrée",
      description: "Ajoute des configurations de sécurité, scans de vulnérabilités, et badges de qualité pour renforcer la crédibilité de vos projets."
    },
    {
      icon: <Rocket className="h-10 w-10 text-warning" />,
      title: "Déploiement Automatique",
      description: "Configure le déploiement automatique sur diverses plateformes (Vercel, Netlify, Heroku) avec les bons scripts et configurations."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-success" />,
      title: "Commits Professionnels",
      description: "Génère des messages de commit structurés suivant les conventions et met à jour l'historique avec vos propres crédits GitHub."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fonctionnalités Avancées
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Notre IA analyse en profondeur vos projets pour générer une documentation 
            professionnelle qui met en valeur votre expertise technique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-card">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;