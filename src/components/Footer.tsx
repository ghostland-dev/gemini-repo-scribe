import { Github, Twitter, Linkedin, Mail, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Produit",
      links: [
        { name: "Fonctionnalités", href: "#features" },
        { name: "Tarifs", href: "#pricing" },
        { name: "Documentation", href: "#" },
        { name: "API", href: "#" }
      ]
    },
    {
      title: "Ressources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Templates", href: "#" },
        { name: "Exemples", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Centre d'aide", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Statut", href: "#" },
        { name: "Communauté", href: "#" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "#" },
        { name: "Carrières", href: "#" },
        { name: "Partenaires", href: "#" },
        { name: "Presse", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-github-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">
                GitDoc Pro
              </span>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Automatisez la documentation de vos projets GitHub avec l'intelligence artificielle. 
              Créez des portfolios professionnels en quelques clics.
            </p>

            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 text-white/70 hover:text-white hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-white/70 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-white/70 hover:text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-white/70 hover:text-white hover:bg-white/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 GitDoc Pro. Tous droits réservés.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;