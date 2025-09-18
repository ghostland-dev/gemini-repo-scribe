import { Check, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const plans = [
    {
      name: "Gratuit",
      price: "0€",
      period: "/mois",
      description: "Parfait pour commencer",
      icon: <Zap className="h-6 w-6 text-primary" />,
      features: [
        "5 repositories par mois",
        "README automatique",
        "Badges de base",
        "Support communautaire",
        "Commits avec votre signature"
      ],
      buttonText: "Commencer gratuitement",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "19€",
      period: "/mois",
      description: "Pour les développeurs actifs",
      icon: <Crown className="h-6 w-6 text-accent" />,
      features: [
        "50 repositories par mois",
        "Documentation complète",
        "Dockerfile + Docker Compose",
        "CI/CD GitHub Actions",
        "Templates personnalisés",
        "Intégrations avancées",
        "Support prioritaire"
      ],
      buttonText: "Passer à Pro",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Entreprise",
      price: "99€",
      period: "/mois",
      description: "Pour les équipes et organisations",
      icon: <Rocket className="h-6 w-6 text-success" />,
      features: [
        "Repositories illimités",
        "API dédiée",
        "Branding personnalisé",
        "Workflows sur mesure",
        "Formation équipe",
        "SLA garantie",
        "Support dédié 24/7",
        "Intégration SSO"
      ],
      buttonText: "Contacter l'équipe",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tarifs Transparents
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choisissez le plan qui correspond à vos besoins. 
            Upgrade ou downgrade à tout moment, sans engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative shadow-card hover:shadow-elegant transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-glow' : 'border-border'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Plus populaire
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-card w-fit">
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full ${plan.popular ? 'shadow-glow' : ''}`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Toutes les fonctionnalités incluent une période d'essai de 14 jours
          </p>
          <p className="text-xs text-muted-foreground">
            Paiement sécurisé • Annulation à tout moment • Support client inclus
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;