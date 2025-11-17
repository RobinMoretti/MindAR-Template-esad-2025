# MindAR Template ESAD 2025

Une application de Réalité Augmentée web utilisant MindAR, A-Frame et Vite pour le suivi d'images et la visualisation de modèles 3D.

## Prérequis

- [Node.js](https://nodejs.org/)
- npm (fourni avec Node.js)

## Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/RobinMoretti/MindAR-Template-esad-2025.git
cd MindAR-Template-esad-2025
```

2. Installer les dépendances :

```bash
npm install
```

## Développement

Démarrer le serveur de développement :

```bash
npm run dev
```

L'application sera disponible à l'adresse `https://localhost:5173` (HTTPS est requis pour l'accès à la caméra) et le `:5173` peut varier.

**Important:** Vous devez accéder à l'application via HTTPS pour utiliser la caméra. Le projet utilise `vite-plugin-mkcert` pour générer automatiquement un certificat SSL local.

## Utilisation

1. Ouvrir l'application dans un navigateur mobile ou sur ordinateur avec une webcam
2. Autoriser les permissions de la caméra lorsque demandé
3. Pointer votre caméra vers l'une des images cibles
4. Le modèle 3D apparaîtra sur la cible détectée

## Créer vos propres images cibles

Pour créer votre propre fichier `targets.mind` avec vos images personnalisées :

1. Rendez-vous sur le [compilateur MindAR](https://hiukim.github.io/mind-ar-js-doc/tools/compile)
2. Uploadez vos images cibles (des images avec des détails riches fonctionnent mieux)
3. Téléchargez le fichier `.mind` généré
4. Remplacez le fichier `src/targets.mind` par votre nouveau fichier
5. Mettez à jour l'attribut `targetIndex` dans votre HTML selon l'ordre de vos images

**Conseils pour de bonnes images cibles :**

- Utilisez des images avec beaucoup de détails et de contraste
- Évitez les images trop uniformes ou répétitives
- La taille recommandée est d'au moins 480x480 pixels

## Structure du projet

```text
├── index.html          # Fichier HTML principal avec la scène A-Frame
├── package.json        # Dépendances et scripts
├── vite.config.js      # Configuration Vite avec HTTPS
├── public/             # Assets statiques
└── src/
    ├── main.js         # Point d'entrée JavaScript
    ├── style.css       # Styles
    └── targets.mind    # Images cibles compilées MindAR
```

## Technologies utilisées

- [MindAR](https://hiukim.github.io/mind-ar-js-doc/) - Bibliothèque AR pour le suivi d'images
- [A-Frame](https://aframe.io/) - Framework WebVR
- [Vite](https://vitejs.dev/) - Outil de build et serveur de développement

## Licence

MIT
