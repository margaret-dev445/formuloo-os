# Architecture Formuloo OS — arc42

## 1. Introduction et Objectifs

### 1.1 Description
Formuloo OS est une application ERP basée sur une
architecture microservices destinée aux PME.
Elle centralise la gestion RH, CRM, Stock,
Comptabilité, Projets et Reporting.

### 1.2 Objectifs qualité

| Priorité | Objectif | Valeur cible |
|----------|----------|-------------|
| 1 | Disponibilité | 99.9% uptime |
| 2 | Performance | P95 < 500ms |
| 3 | Sécurité | JWT + Helmet + HTTPS |
| 4 | Maintenabilité | Coverage > 70% |
| 5 | Scalabilité | Auto-scaling AWS |

---

## 2. Contraintes

### 2.1 Techniques
- Node.js 20 LTS obligatoire
- TypeScript strict
- Docker pour tous les services
- PostgreSQL pour services transactionnels
- MongoDB pour Reporting

### 2.2 Organisationnelles
- Conventional Commits obligatoires
- Pull Request avant merge sur master
- Pipeline CI vert obligatoire

---

## 3. Contexte et Portée

### 3.1 Acteurs
- Administrateur : gestion complète
- Employé : accès aux modules métier
- Système : APIs internes

### 3.2 Systèmes externes
- AWS EC2 : hébergement production
- GitHub Actions : CI/CD automatisé
- Docker Hub : registry images

---

## 4. Solution Architecture

### 4.1 Vue des conteneurs

```text
                        ┌────────────────────┐
                        │     Utilisateur    │
                        └─────────┬──────────┘
                                  │ HTTPS/JWT
                                  ▼
                     ┌─────────────────────────┐
                     │      API Gateway        │
                     └─────────┬──────────────┘
                               │
 ┌─────────────────────────────────────────────────────────────┐
 │                    Microservices Formuloo OS               │
 └─────────────────────────────────────────────────────────────┘

   ┌──────────────┐
   │ Auth Service │── PostgreSQL
   └──────────────┘

   ┌──────────────┐
   │ HR Service   │── PostgreSQL
   └──────────────┘

   ┌──────────────┐
   │ CRM Service  │── PostgreSQL
   └──────────────┘

   ┌──────────────┐
   │ Stock Service│── PostgreSQL
   └──────────────┘

   ┌──────────────┐
   │ Compta Serv. │── PostgreSQL
   └──────────────┘

   ┌──────────────┐
   │ Projet Serv. │── PostgreSQL
   └──────────────┘

   ┌──────────────┐
   │ Reporting    │── MongoDB
   └──────────────┘

### 4.2 Bases de données

| Service | Base | Port |
|---------|------|------|
| auth-service | postgres-auth | 5437 |
| hr-service | postgres-hr | 5432 |
| crm-service | postgres-crm | 5434 |
| stock-service | postgres-stock | 5435 |
| compta-service | postgres-compta | 5433 |
| projet-service | postgres-projet | 5436 |
| reporting-service | mongodb-reporting | 27017 |

---

## 5. Vues de Construction

### 5.1 Structure d'un microservice

```text
src/
├── main.ts                ← Point d'entrée
├── app.module.ts          ← Module principal
├── health.controller.ts   ← Endpoint /health
├── [module].controller.ts ← Endpoints CRUD
├── [module].service.ts    ← Logique métier
├── entities/              ← Tables TypeORM
├── dto/                   ← Contrats données
├── strategies/            ← JWT Strategy
└── guards/                ← JWT Guard

5.2 Technologies par couche

| Couche     | Technologie          |
| ---------- | -------------------- |
| API        | NestJS 10 + Swagger  |
| Auth       | JWT + Passport       |
| ORM        | TypeORM / Mongoose   |
| DB SQL     | PostgreSQL 16        |
| DB NoSQL   | MongoDB 7            |
| Monitoring | Prometheus + Grafana |
| Gateway    | Kong 3.4             |
| CI/CD      | GitHub Actions       |

6. Concepts Transversaux

6.1 Sécurité
-Helmet : headers HTTP sécurisés
-JWT : authentification stateless
-bcryptjs : hashage des mots de passe
-Trivy : scan vulnérabilités Docker
.env : secrets jamais dans le code

6.2 Observabilité
-Prometheus : métriques /metrics toutes les 15s
-Grafana : dashboards temps réel
-Alertes : ServiceDown, HighMemory, HighCPU

6.3 Qualité
-Jest : tests unitaires + intégration
-ESLint + Prettier : qualité de code
-Coverage minimum : 70%
-Conventional Commits