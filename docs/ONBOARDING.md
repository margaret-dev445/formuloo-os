# Guide d'Onboarding — Formuloo OS

## Prérequis
- [ ] Node.js 20 LTS
- [ ] Docker Desktop
- [ ] Git + Git Bash
- [ ] Compte GitHub

---

## Étape 1 — Cloner le projet

Gitbash
git clone https://github.com/margaret-dev445/formuloo-os.git
cd formuloo-os

Étape 2 — Installer les dépendances
npm install

Étape 3 — Configurer les variables d’environnement

Créer les fichiers .env dans chaque service :
DB_HOST=postgres-auth
DB_USER=user
DB_PASSWORD=password
DB_NAME=auth_db
JWT_SECRET=formuloo-super-secret-jwt-key-2026
PORT=3000

Étape 4 — Démarrer l’infrastructure Docker
cd infrastructure
docker compose up -d

Étape 5 — Vérifier les conteneurs
docker ps

Étape 6 — Accéder aux APIs Swagger
| Service   | URL Swagger                                            |
| --------- | ------------------------------------------------------ |
| Auth      | [http://localhost:3007/api](http://localhost:3007/api) |
| HR        | [http://localhost:3001/api](http://localhost:3001/api) |
| CRM       | [http://localhost:3002/api](http://localhost:3002/api) |
| Stock     | [http://localhost:3003/api](http://localhost:3003/api) |
| Compta    | [http://localhost:3004/api](http://localhost:3004/api) |
| Projet    | [http://localhost:3005/api](http://localhost:3005/api) |
| Reporting | [http://localhost:3006/api](http://localhost:3006/api) |

Étape 7 — Lancer les tests
npm run test

Étape 8 — Vérifier le monitoring
| Outil      | URL                                            |
| ---------- | ---------------------------------------------- |
| Prometheus | [http://localhost:9090](http://localhost:9090) |
| Grafana    | [http://localhost:3000](http://localhost:3000) |

Étape 9 — Workflow Git

Créer une branche :
git checkout -b feature/nom-feature

Commit conventionnel :
git commit -m "feat: ajout nouvelle fonctionnalité"

Push :git push origin feature/nom-feature

Étape 10 — Pipeline CI/CD

Chaque push déclenche automatiquement :

Build Docker
Tests Jest
Analyse qualité
Pipeline GitHub Actions

Bonnes pratiques
Ne jamais commit les fichiers .env
Toujours lancer les tests avant push
Respecter Conventional Commits
Vérifier Swagger après modification API