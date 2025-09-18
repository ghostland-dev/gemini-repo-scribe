import { useState } from "react";
import { Github, Plus, Search, Filter, MoreVertical, Star, GitBranch, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data pour les repositories
  const repositories = [
    {
      id: 1,
      name: "awesome-react-app",
      description: "Une application React moderne avec TypeScript",
      language: "TypeScript",
      stars: 42,
      lastUpdate: "2 jours",
      status: "documented",
      private: false
    },
    {
      id: 2,
      name: "api-nodejs-express",
      description: "API REST avec Node.js et Express",
      language: "JavaScript", 
      stars: 28,
      lastUpdate: "1 semaine",
      status: "pending",
      private: false
    },
    {
      id: 3,
      name: "python-data-analysis",
      description: "Scripts d'analyse de données avec Pandas",
      language: "Python",
      stars: 15,
      lastUpdate: "3 jours",
      status: "not_documented",
      private: true
    },
    {
      id: 4,
      name: "mobile-app-flutter",
      description: "Application mobile cross-platform",
      language: "Dart",
      stars: 67,
      lastUpdate: "5 heures",
      status: "documented",
      private: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'documented': return 'bg-success/20 text-success border-success/20';
      case 'pending': return 'bg-warning/20 text-warning border-warning/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'documented': return 'Documenté';
      case 'pending': return 'En cours';
      default: return 'Non documenté';
    }
  };

  const filteredRepos = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Github className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold">Mes Repositories</h1>
              </div>
              <Badge variant="secondary" className="gap-1">
                <span className="w-2 h-2 bg-success rounded-full"></span>
                Connecté à GitHub
              </Badge>
            </div>

            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nouveau projet
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Rechercher dans vos repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtres
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Repositories</CardDescription>
              <CardTitle className="text-2xl">24</CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Documentés</CardDescription>
              <CardTitle className="text-2xl text-success">18</CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>En attente</CardDescription>
              <CardTitle className="text-2xl text-warning">4</CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Non documentés</CardDescription>
              <CardTitle className="text-2xl text-muted-foreground">2</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Repository Grid */}
        <div className="grid gap-6">
          {filteredRepos.map((repo) => (
            <Card key={repo.id} className="hover:shadow-card transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-lg hover:text-primary cursor-pointer transition-colors">
                        {repo.name}
                      </CardTitle>
                      <Badge 
                        variant="secondary" 
                        className={getStatusColor(repo.status)}
                      >
                        {getStatusText(repo.status)}
                      </Badge>
                      {repo.private && (
                        <Badge variant="outline" className="text-xs">
                          Privé
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="mb-3">
                      {repo.description}
                    </CardDescription>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-primary"></span>
                        {repo.language}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {repo.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Modifié il y a {repo.lastUpdate}
                      </div>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Documenter maintenant</DropdownMenuItem>
                      <DropdownMenuItem>Voir sur GitHub</DropdownMenuItem>
                      <DropdownMenuItem>Paramètres</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">U</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">
                      Votre Repository
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    {repo.status === 'not_documented' && (
                      <Button 
                        size="sm" 
                        className="gap-2"
                        onClick={() => window.location.href = '/generator'}
                      >
                        <GitBranch className="h-4 w-4" />
                        Documenter
                      </Button>
                    )}
                    {repo.status === 'documented' && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="gap-2"
                        onClick={() => window.location.href = '/generator'}
                      >
                        Voir la documentation
                      </Button>
                    )}
                    {repo.status === 'pending' && (
                      <Button size="sm" variant="outline" disabled>
                        Génération en cours...
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-12">
            <Github className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Aucun repository trouvé</h3>
            <p className="text-muted-foreground mb-4">
              Essayez de modifier votre recherche ou connectez plus de repositories.
            </p>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Ajouter un repository
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;