# 🎮 Projet Fil Rouge : CritiqueJeux

> **Application Fullstack développée dans le cadre du module "Développement Front-End & Architecture".**
> Ce projet sert de socle technique pour l'intégration de services externes (Python) et la mise en place d'une pipeline CI/CD.

## Description du Projet

CritiqueJeux est une plateforme web permettant de rechercher, filtrer et comparer les meilleurs jeux vidéo du marché.

Le projet est divisé en deux parties :

1. **Frontend (React / Redux Toolkit) :** L'interface utilisateur interactive. La gestion d'état est centralisée via un store Redux unique.
2. **Backend (Proxy Node.js / Express) :** Une API intermédiaire sécurisée (CORS, Rate Limiting) chargée de masquer les clés secrètes et d'interroger l'API publique RAWG.

---

## Stack Technique

- **Frontend :** React.js, Redux Toolkit, React-Redux
- **Backend :** Node.js, Express.js
- **Qualité & Tests :** ESLint, Jest / React Testing Library
- **Déploiement :** Vercel pour le Front, Render pour le Back

---

## Installation & Lancement (Local)

### Prérequis

- Node.js (v16 ou supérieur)
- Extension navigateur **Redux DevTools** installée pour le débogage

### 1. Configuration du Backend (Proxy)

```bash
cd backend
npm install
```

Créez un fichier `.env` à la racine du dossier `backend` :

```env
PORT=5000
RAWG_API_KEY=votre_cle_api_secrete_ici
RAWG_API_URL=https://api.rawg.io/api
```

Lancez le serveur :

```bash
npm run dev
```

### 2. Configuration du Frontend

```bash
cd frontend
npm install
npm start
```

L'application sera accessible sur `http://localhost:3000`.

---

## Architecture du State Redux

```javascript
{
  games: {
    items: [],        // Liste des jeux récupérés depuis l'API
    loading: false,   // État de chargement
    error: null,      // Gestion des erreurs
    searchQuery: "",  // Recherche en cours
    ordering: "",     // Tri sélectionné
    genre: ""         // Genre sélectionné
  }
}
```

---

## API Reference (Pour l'équipe Python)

### `GET /api/games`

- **Description :** Récupère les jeux filtrés depuis l'API RAWG.
- **Paramètres :** `?search=xyz&ordering=-rating&genre=action`

### `GET /api/export`

- **Description :** Renvoie un résumé JSON des 10 meilleurs jeux.
- **Usage prévu :** Interrogée par un script Python pour générer un rapport PDF/Excel.
- **Exemple de réponse :**

## Liens de Production

- Frontend : https://critique-jeux-6htg-pink.vercel.app
- Backend : https://critique-jeux.onrender.com
- GitHub : https://github.com/boussoc89-jpg/critique-jeux

```json
{
  "exportDate": "2026-06-05T12:00:00Z",
  "totalItems": 899374,
  "topResults": [
    {
      "name": "The Witcher 3",
      "rating": 4.8,
      "genre": "RPG",
      "released": "2015-05-19"
    }
  ]
}
```
