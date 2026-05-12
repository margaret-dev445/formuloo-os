# Documentation RGPD — Formuloo OS

## 1. Responsable du traitement
Application : Formuloo OS
Type : Application ERP pour PME

## 2. Données collectées

### Service RH
- Nom et prénom de l'employé
- Email professionnel
- Poste occupé
- Salaire
- Date de début de contrat

### Service CRM
- Nom de l'entreprise cliente
- Email du contact
- Numéro de téléphone
- Secteur d'activité

### Service Comptabilité
- Données de facturation
- Montants des transactions
- Dates des opérations

## 3. Finalité du traitement
Les données sont collectées uniquement pour :
- La gestion interne de l'entreprise
- La facturation clients
- Le suivi des ressources humaines

## 4. Durée de conservation
- Données RH : durée du contrat + 5 ans
- Données CRM : durée de la relation client + 3 ans
- Données comptables : 10 ans (obligation légale)

## 5. Droits des utilisateurs
Chaque utilisateur dispose des droits suivants :
- Droit d'accès : GET /employees/:id
- Droit de rectification : PUT /employees/:id
- Droit à l'effacement : DELETE /employees/:id
- Droit à la portabilité : export des données

## 6. Mesures de sécurité appliquées
- Headers HTTP sécurisés (Helmet)
- Variables d'environnement protégées (.env)
- Aucun mot de passe en clair dans le code
- Images Docker scannées (Trivy)
- Pipeline CI/CD avec vérifications automatiques

## 7. Transfert de données
- Les données restent sur les serveurs AWS EC2
- Pas de transfert vers des pays tiers
- Chiffrement en transit (HTTPS via Kong)