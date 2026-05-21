Module 1 : Introduction au DevOps
Qu'est-ce que le DevOps ?

Le DevOps est une culture qui unit les équipes
de développement (Dev) et d'exploitation (Ops)
pour livrer des logiciels plus rapidement et
de façon plus fiable.

Les 4 principes DevOps
Collaboration : Dev + Ops travaillent ensemble
Automatisation : CI/CD, tests automatiques
Mesure : métriques, monitoring, alertes
Partage : documentation, knowledge sharing

Module 2 : Architecture Microservices

Pourquoi les microservices ?

Chaque service est indépendant
Déploiement sans interruption de service
Scalabilité par service
Technologies adaptées par besoin

Formuloo OS en pratique

7 microservices indépendants :

auth-service : authentification JWT
hr-service : gestion RH
crm-service : gestion clients
stock-service : gestion stocks
compta-service : comptabilité
projet-service : gestion projets
reporting-service : analytics

Module 3 : Docker et Conteneurisation

Pourquoi Docker ?

Environnement reproductible
Isolation des services
Déploiement simplifié

Commandes essentielles

# Lancer tous les services
docker compose up -d

# Voir les services
docker compose ps

# Logs d'un service
docker compose logs -f hr-service

# Arrêter
docker compose down


Module 4 : CI/CD avec GitHub Actions

Pipeline Formuloo OS

Push du code sur GitHub
GitHub Actions déclenche le pipeline
Tests unitaires + intégration
Build Docker images
Déploiement (staging/production)

Règles d'or

Ne jamais pusher directement sur master
Toujours créer une Pull Request
Pipeline doit être vert avant merge


Module 5 : Monitoring avec Prometheus/Grafana
Stack d'observabilité
Prometheus : collecte les métriques
Grafana : visualise les données
Alertes : notifie en cas de problème

URLs importantes

Prometheus : http://localhost:9090
Grafana : http://localhost:3100
Targets : http://localhost:9090/targets
Alertes : http://localhost:9090/alerts

Module 6 : Sécurité DevOps
Bonnes pratiques appliquées
Variables sensibles dans .env
Jamais de secrets dans le code
Helmet : headers HTTP sécurisés
JWT : authentification des APIs
Trivy : scan des vulnérabilités

Quiz de validation

Questions Module 1

Que signifie DevOps ?
Citez 2 principes du DevOps

Questions Module 2
Avantage principal des microservices ?
Combien de services dans Formuloo OS ?

Questions Module 3
Commande pour lancer les services ?
Comment voir les logs d'un service ?

Questions Module 4
Qu'est-ce qu'un pipeline CI/CD ?
Que faut-il vérifier avant de merger ?

Questions Module 5
Quel outil collecte les métriques ?
Quel outil visualise les données ?