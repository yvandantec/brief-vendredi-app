# Brief du vendredi : app

Application web installable (PWA) qui affiche le Brief du vendredi et enregistre les avis.

- Adresse : https://yvandantec.github.io/brief-vendredi-app/
- Données : dépôt privé `brief-vendredi-data`, lu et écrit via l'API GitHub avec un jeton « fine-grained » saisi dans les réglages de l'app (stocké uniquement sur l'appareil).
- Aucune donnée personnelle dans ce dépôt public.

| Fichier | Rôle |
|---|---|
| `index.html` | L'app : top 3, onglets Streaming, Cinéma (avec vue « Par salle »), Sorties, Sport, Catalogue par genre, À voir, Mes avis ; envoi des avis ; réglages |
| `manifest.webmanifest`, `icons/` | Installation sur l'écran d'accueil |
| `sw.js` | Fonctionnement hors ligne (cache de l'app) |
