# Checklist Code Review — Formuloo OS

## Avant de soumettre une Pull Request

### Code
- [ ] Le code compile sans erreurs TypeScript
- [ ] Les tests unitaires passent (npm run test)
- [ ] Le coverage est supérieur à 70%
- [ ] Pas de console.log laissés dans le code
- [ ] Pas de variables non utilisées
- [ ] DTOs utilisés pour toutes les entrées API

### Sécurité
- [ ] Pas de mots de passe dans le code
- [ ] Variables sensibles dans .env
- [ ] Helmet configuré dans main.ts
- [ ] Pas de données sensibles dans les logs

### Documentation
- [ ] Swagger documenté sur les endpoints
- [ ] README mis à jour si nécessaire
- [ ] Message de commit conventionnel

### Docker
- [ ] Dockerfile à jour
- [ ] docker-compose.yml valide
- [ ] Image scannée avec Trivy

## Pendant la revue de code

### Lisibilité
- [ ] Le code est facile à comprendre
- [ ] Les noms de variables sont explicites
- [ ] La logique est bien découpée

### Architecture
- [ ] Respect de la structure NestJS
- [ ] Séparation controller/service respectée
- [ ] Pas de logique métier dans le controller

### Tests
- [ ] Tests couvrent les cas nominaux
- [ ] Tests couvrent les cas d'erreur
- [ ] Tests du health controller présents

## Critères de validation du merge
- Pipeline CI/CD vert ✅
- Checklist complétée ✅
- Au moins 1 reviewer approuve ✅
- Pas de conflits avec master ✅