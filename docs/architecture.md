# Architecture Formuloo OS

## 1. C’est quoi ce projet ?

Formuloo OS est une application qui aide une entreprise à gérer :

- les employés
- les clients
- le stock
- les projets
- la comptabilité
- les rapports

Tout est dans une seule plateforme.

---

## 2. Comment le système est organisé ?

Le système est divisé en petites parties appelées "services".

Chaque service fait un travail précis.

---

## 3. Les services du projet

- HR Service : gérer les employés
- Comptabilité Service : gérer l’argent et les factures
- CRM Service : gérer les clients
- Stock Service : gérer les produits
- Projet Service : gérer les tâches et projets
- Reporting Service : faire des statistiques

---

## 4. Comment ça marche ?

Le système fonctionne simplement :

L’utilisateur utilise l’application (Frontend)
↓
Une entrée centrale reçoit les demandes (API Gateway)
↓
Chaque service fait son travail
↓
Les données sont enregistrées dans une base de données

---

## 5. Schéma simple

Frontend
  ↓
API Gateway
  ↓
Services (HR, CRM, Stock, etc.)
  ↓
Base de données

---

## 6. Résumé

Ce système permet de séparer les fonctions de l’entreprise pour mieux organiser le travail et éviter les erreurs.