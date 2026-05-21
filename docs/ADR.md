# Architecture Decision Records — Formuloo OS

## ADR-001 : Architecture Microservices

**Date :** Mai 2026  
**Statut :** Accepté  

### Décision
Chaque domaine métier est implémenté sous forme de microservice indépendant.

### Contexte
L’application ERP doit permettre des évolutions indépendantes par domaine métier tout en facilitant la scalabilité et le déploiement continu.

### Conséquences
#### Avantages
- Scalabilité indépendante par service
- Déploiement autonome
- Isolation des pannes
- Maintenance simplifiée

#### Inconvénients
- Complexité DevOps plus élevée
- Communication inter-services nécessaire
- Monitoring distribué obligatoire

---

## ADR-002 : Database per Service

**Date :** Mai 2026  
**Statut :** Accepté  

### Décision
Chaque microservice possède sa propre base de données.

### Contexte
Les services doivent rester découplés afin de préserver leur autonomie métier.

### Conséquences
#### Avantages
- Isolation complète des données
- Liberté technologique
- Sécurité renforcée
- Maintenance indépendante

#### Inconvénients
- Pas de jointures SQL cross-services
- Duplication potentielle de données
- Synchronisation plus complexe

---

## ADR-003 : Kong API Gateway

**Date :** Mai 2026  
**Statut :** Accepté  

### Décision
Utilisation de Kong comme API Gateway principale.

### Contexte
Le système nécessite un point d’entrée unique pour sécuriser et router les requêtes.

### Conséquences
#### Avantages
- Sécurité centralisée
- Rate limiting
- Routage intelligent
- Centralisation des accès

#### Inconvénients
- Point de défaillance potentiel
- Complexité configuration initiale

---

## ADR-004 : NestJS Backend

**Date :** Mai 2026  
**Statut :** Accepté  

### Décision
Tous les microservices utilisent NestJS.

### Contexte
Le projet nécessite une architecture standardisée et fortement maintenable.

### Conséquences
#### Avantages
- Architecture modulaire
- TypeScript natif
- Dependency Injection
- Écosystème mature

#### Inconvénients
- Overhead d’abstraction
- Courbe d’apprentissage NestJS

---

## ADR-005 : TypeORM + Mongoose

**Date :** Mai 2026  
**Statut :** Accepté  

### Décision
- TypeORM pour PostgreSQL
- Mongoose pour MongoDB

### Contexte
Les services transactionnels utilisent SQL tandis que le reporting nécessite une base documentaire.

### Conséquences
#### Avantages
- Intégration native avec NestJS
- Productivité élevée
- Schémas bien structurés

#### Inconvénients
- `synchronize:true` dangereux en production
- Deux ORM différents à maintenir

---

## ADR-006 : Authentification JWT

**Date :** Mai 2026  
**Statut :** Accepté  

### Décision
Authentification centralisée via JWT et auth-service dédié.

### Contexte
Les microservices doivent partager un mécanisme d’authentification commun tout en restant indépendants.

### Conséquences
#### Avantages
- Architecture stateless
- Scalabilité élevée
- Standard industrie
- Vérification distribuée des tokens

#### Inconvénients
- Révocation token complexe
- Gestion refresh token nécessaire à long terme

---

## ADR-007 : Observabilité Prometheus/Grafana

**Date :** Mai 2026  
**Statut :** Accepté  

### Décision
Utilisation de Prometheus + Grafana pour le monitoring et Loki pour les logs.

### Contexte
Le système doit être observable afin de détecter rapidement les incidents.

### Conséquences
#### Avantages
- Monitoring temps réel
- Dashboards centralisés
- Alerting configurable
- Stack open-source standard DevOps

#### Inconvénients
- Configuration initiale complexe
- Consommation ressources monitoring