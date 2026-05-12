# Guide des Standards DevOps — Formuloo OS

## 1. Conventions Git

### Branches
- master     → code de production (protégé)
- develop    → intégration continue
- feature/   → nouvelle fonctionnalité
- fix/       → correction de bug
- chore/     → tâche technique

### Commits (Conventional Commits)
- feat:     → nouvelle fonctionnalité
- fix:      → correction de bug
- docs:     → documentation
- chore:    → tâche technique
- ci:       → pipeline CI/CD
- perf:     → amélioration performance
- security: → correctif sécurité

### Exemples
feat: ajout endpoint POST /employees
fix: correction health controller reporting-service
docs: ajout documentation RGPD
security: ajout Helmet headers securite

## 2. Standards de Code NestJS

### Structure d'un service
src/
├── main.ts
├── app.module.ts
├── app.controller.ts
├── app.service.ts
├── health.controller.ts
├── [module].controller.ts
├── [module].service.ts
└── dto/
    └── create-[module].dto.ts

### Règles de nommage
- Fichiers     : kebab-case (employee.service.ts)
- Classes      : PascalCase (EmployeeService)
- Variables    : camelCase (employeeList)
- Constantes   : SCREAMING_SNAKE_CASE (MAX_RETRY)
- Endpoints    : kebab-case (/employees/:id)

### Règles de code
- Typage strict TypeScript obligatoire
- Pas de "any" sauf cas exceptionnel justifié
- DTOs obligatoires pour toutes les entrées API
- Tests unitaires obligatoires (coverage > 70%)
- Swagger documenté sur tous les endpoints

## 3. Standards Docker

### Dockerfile
- Image de base : node:20-alpine
- RUN apk update && apk upgrade (sécurité)
- COPY node_modules avant COPY . .
- EXPOSE le bon port
- CMD ["node", "dist/main"]

### Docker Compose
- Un service = une base de données dédiée
- Volumes nommés pour la persistance
- Variables d'environnement via .env
- Health checks configurés

## 4. Standards CI/CD

### Pipeline obligatoire
1. Checkout code
2. Setup Node.js 20
3. Vérification structure projet
4. Validation docker-compose
5. Tests unitaires tous services
6. Build réussi

### Règles de merge
- Pipeline CI vert obligatoire
- Pull Request obligatoire
- Pas de push direct sur master
- Message de commit conventionnel

## 5. Standards de Sécurité

### Obligatoire dans chaque service
- Helmet configuré (headers HTTP)
- Variables sensibles dans .env
- .env jamais commité sur GitHub
- Scan Trivy avant déploiement

### Obligatoire dans le projet
- .gitignore à la racine
- .env.example documenté
- Secrets dans GitHub Secrets (CI/CD)