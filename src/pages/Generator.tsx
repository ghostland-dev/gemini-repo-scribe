import { useState } from "react";
import { ArrowLeft, Github, Sparkles, FileText, Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Generator = () => {
  const [generationStep, setGenerationStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const { toast } = useToast();

  const mockRepo = {
    name: "awesome-react-app",
    description: "Une application React moderne avec TypeScript",
    language: "TypeScript",
    stars: 42
  };

  const generationSteps = [
    "Analyse du repository...",
    "Scan des dépendances...",
    "Génération IA en cours...",
    "Finalisation des documents...",
    "Terminé !"
  ];

  const mockGeneratedContent = {
    readme: `# Awesome React App

Une application React moderne construite avec TypeScript, offrant une expérience utilisateur exceptionnelle.

## 🚀 Fonctionnalités

- ⚡ Interface utilisateur rapide et responsive
- 🎨 Design moderne avec Tailwind CSS
- 📱 Compatible mobile et desktop
- 🔒 Authentification sécurisée
- 📊 Tableaux de bord interactifs

## 🛠️ Technologies

- **React 18** - Bibliothèque UI moderne
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Vite** - Build tool rapide
- **ESLint** - Linter de code

## 📦 Installation

\`\`\`bash
# Cloner le repository
git clone https://github.com/username/awesome-react-app.git

# Naviguer dans le dossier
cd awesome-react-app

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
\`\`\`

## 🚀 Utilisation

L'application sera accessible sur \`http://localhost:5173\`

### Commandes disponibles

- \`npm run dev\` - Lance le serveur de développement
- \`npm run build\` - Build pour la production
- \`npm run preview\` - Prévisualise le build de production
- \`npm run lint\` - Vérifie la qualité du code

## 📁 Structure du projet

\`\`\`
src/
├── components/     # Composants réutilisables
├── pages/         # Pages de l'application
├── hooks/         # Hooks personnalisés
├── lib/           # Utilitaires
└── assets/        # Ressources statiques
\`\`\`

## 🤝 Contribution

Les contributions sont les bienvenues ! Veuillez lire notre guide de contribution.

## 📄 Licence

Ce projet est sous licence MIT.`,

    dockerfile: `# Dockerfile pour Awesome React App
FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./
RUN npm ci --only=production

# Copier le code source
COPY . .

# Build l'application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copier les fichiers buildés
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier la configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]`,

    compose: `version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    
  # Base de données (optionnel)
  # postgres:
  #   image: postgres:15
  #   environment:
  #     POSTGRES_DB: awesome_app
  #     POSTGRES_USER: app_user
  #     POSTGRES_PASSWORD: secure_password
  #   volumes:
  #     - postgres_data:/var/lib/postgresql/data
  #   ports:
  #     - "5432:5432"

# volumes:
#   postgres_data:`,

    cicd: `name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm run test
      
    - name: Run linter
      run: npm run lint
      
    - name: Build project
      run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to production
      run: |
        echo "Déploiement vers la production"
        # Ajouter ici vos commandes de déploiement`
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGenerationStep(0);

    for (let i = 0; i < generationSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setGenerationStep(i + 1);
    }

    setIsGenerating(false);
    toast({
      title: "Documentation générée !",
      description: "Votre documentation professionnelle est prête.",
    });
  };

  const copyToClipboard = async (content: string, tab: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedTab(tab);
      setTimeout(() => setCopiedTab(null), 2000);
      toast({
        title: "Copié !",
        description: "Le contenu a été copié dans le presse-papiers.",
      });
    } catch (err) {
      toast({
        title: "Erreur",
        description: "Impossible de copier le contenu.",
        variant: "destructive",
      });
    }
  };

  const progress = isGenerating ? (generationStep / generationSteps.length) * 100 : 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.history.back()}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour
              </Button>
              <div className="flex items-center gap-2">
                <Github className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold">{mockRepo.name}</h1>
                <Badge variant="secondary">{mockRepo.language}</Badge>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Télécharger tout
              </Button>
              <Button className="gap-2">
                <Github className="h-4 w-4" />
                Commit automatique
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Generation Status */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary animate-bounce-gentle" />
                Génération de la documentation
              </CardTitle>
              <CardDescription>
                IA Gemini analyse votre code et génère une documentation professionnelle
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={progress} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {isGenerating ? generationSteps[generationStep - 1] || "Initialisation..." : "Documentation prête !"}
                  </span>
                  <span className="font-medium">{Math.round(progress)}%</span>
                </div>
                
                {!isGenerating && generationStep === 0 && (
                  <Button onClick={handleGenerate} className="gap-2">
                    <Sparkles className="h-4 w-4" />
                    Générer la documentation
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Generated Content */}
          {(generationStep === generationSteps.length || !isGenerating) && generationStep > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-success" />
                  Documentation générée
                </CardTitle>
                <CardDescription>
                  Votre documentation professionnelle est prête. Vous pouvez la prévisualiser et la modifier si nécessaire.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="readme" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="readme">README.md</TabsTrigger>
                    <TabsTrigger value="dockerfile">Dockerfile</TabsTrigger>
                    <TabsTrigger value="compose">Docker Compose</TabsTrigger>
                    <TabsTrigger value="cicd">GitHub Actions</TabsTrigger>
                  </TabsList>

                  {Object.entries(mockGeneratedContent).map(([key, content]) => (
                    <TabsContent key={key} value={key} className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold capitalize">
                          {key === 'readme' ? 'README.md' : 
                           key === 'dockerfile' ? 'Dockerfile' :
                           key === 'compose' ? 'docker-compose.yml' :
                           '.github/workflows/ci.yml'}
                        </h3>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(content, key)}
                          className="gap-2"
                        >
                          {copiedTab === key ? (
                            <>
                              <Check className="h-4 w-4" />
                              Copié
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4" />
                              Copier
                            </>
                          )}
                        </Button>
                      </div>
                      
                      <Textarea
                        value={content}
                        readOnly
                        className="min-h-[500px] font-mono text-sm"
                      />
                    </TabsContent>
                  ))}
                </Tabs>

                <Separator className="my-6" />

                <div className="flex justify-end gap-4">
                  <Button variant="outline">
                    Régénérer
                  </Button>
                  <Button className="gap-2">
                    <Github className="h-4 w-4" />
                    Committer les changements
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Generator;