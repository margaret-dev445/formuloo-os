import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuration du test
export const options = {
  stages: [
    { duration: '30s', target: 10 },  // 10 utilisateurs pendant 30s
    { duration: '1m', target: 50 },   // 50 utilisateurs pendant 1min
    { duration: '30s', target: 0 },   // retour à 0
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% des requêtes < 500ms
    http_req_failed: ['rate<0.1'],    // moins de 10% d'erreurs
  },
};

export default function () {

  // Test hr-service
  const hr = http.get('http://localhost:3001/health');
  check(hr, {
    'hr-service status 200': (r) => r.status === 200,
    'hr-service répond vite': (r) => r.timings.duration < 500,
  });

  // Test crm-service
  const crm = http.get('http://localhost:3002/health');
  check(crm, {
    'crm-service status 200': (r) => r.status === 200,
    'crm-service répond vite': (r) => r.timings.duration < 500,
  });

  // Test stock-service
  const stock = http.get('http://localhost:3003/health');
  check(stock, {
    'stock-service status 200': (r) => r.status === 200,
    'stock-service répond vite': (r) => r.timings.duration < 500,
  });

  // Test compta-service
  const compta = http.get('http://localhost:3004/health');
  check(compta, {
    'compta-service status 200': (r) => r.status === 200,
    'compta-service répond vite': (r) => r.timings.duration < 500,
  });

  // Test projet-service
  const projet = http.get('http://localhost:3005/health');
  check(projet, {
    'projet-service status 200': (r) => r.status === 200,
    'projet-service répond vite': (r) => r.timings.duration < 500,
  });

  // Test reporting-service
  const reporting = http.get('http://localhost:3006/health');
  check(reporting, {
    'reporting-service status 200': (r) => r.status === 200,
    'reporting-service répond vite': (r) => r.timings.duration < 500,
  });

  sleep(1); // attendre 1 seconde entre chaque requêtes
}