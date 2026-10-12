# Portfolio CHRICE — Linaharison Chrice

Portfolio personnel minimaliste et moderne de **Linaharison Chrice** (Tech Builder, Cybersécurité et Intelligence Artificielle). Conçu selon une identité visuelle **Cobalt & Orange** et optimisé selon les standards du design suisse, d'accessibilité **WCAG 2.2 AA** et de performance web.

Hébergement cible validé : **GitHub Pages**.

---

## 📁 Architecture du projet

```text
CHRICE/
├── index.html                  # Point d'entrée principal (page unique optimisée)
├── .nojekyll                   # Désactive le moteur Jekyll sur GitHub Pages (fichiers bruts)
├── .gitignore                  # Exclusion des fichiers système, secrets et notes internes
├── README.md                   # Guide d'utilisation et procédure de déploiement GitHub Pages
├── rapport.md                  # Rapports d'étapes et audits des missions (interne)
├── AI_HANDOVER.md              # Document de continuité et règles d'ingénierie (interne)
└── assets/
    ├── css/
    │   ├── design-tokens.css   # Tokens sémantiques (palette Cobalt & Orange)
    │   ├── typography.css      # Règles typographiques (Space Grotesk, Inter, IBM Plex Mono)
    │   ├── base.css            # Reset CSS moderne et scroll-padding
    │   └── components.css      # Styles des composants et règles responsive
    ├── js/
    │   └── app.js              # Gestion accessible du menu mobile (ARIA, Escape, clic extérieur)
    ├── images/
    │   ├── favicon.svg         # Favicon vectoriel avec monogramme de marque //
    │   └── portrait.jpg        # Emplacement réservé pour la photo portrait (à fournir)
    └── documents/
        └── cv.pdf              # Emplacement réservé pour le CV téléchargeable (à fournir)
```

---

## 🔒 Fichiers publics vs Fichiers internes

Lors de la publication sur un dépôt GitHub :

| Catégorie | Fichiers concernés | Rôle & Traitement |
|---|---|---|
| **Fichiers publics (déploiement web)** | `index.html`, `.nojekyll`, `README.md`, `assets/**` | L'application web et ses ressources servies aux visiteurs. |
| **Fichiers internes (non déployés / privés)** | `AI_HANDOVER.md`, `rapport.md`, `.gitignore` | Documentation d'ingénierie interne et historiques de mission (ignorés par `.gitignore`). |

---

## 🎨 Sections de la page d'accueil

1. **Navigation** : En-tête fixe avec logo textuel `// CHRICE`, menu responsive (≤ 900px), fermeture par Escape/clic extérieur et CTA direct.
2. **Hero Personnel** : Identité (`Linaharison Chrice`), statut (`Étudiant`), 3 domaines clés, cadre portrait format 3/4 réservé et bouton de téléchargement du CV.
3. **Projets (`#projets`)** : 4 réalisations confirmées (Site du cybercafé, Bot d'hébergement, Bot Netflix, Audit VPS/RDP).
4. **Certifications & formations (`#certifications`)** : Certification *Google AI Fundamentals* (Coursera, 8 octobre 2026) avec lien de vérification direct.
5. **À propos (`#a-propos`)** : Présentation du profil, carte méthode *Ma démarche* et 3 piliers d'intérêt technique.
6. **Contact (`#contact`)** : 4 boutons interactifs directs (WhatsApp, Facebook, TikTok, E-mail).

---

## 🚀 Lancement en local

Le projet est un site statique pur (HTML5 / CSS3 / Vanilla JavaScript). Aucun bundler ni dépendance Node.js n'est requis.

### Avec Python (recommandé) :
```bash
# À la racine du dossier CHRICE :
python -m http.server 3000 --bind 127.0.0.1
```
Puis ouvrez votre navigateur sur [http://127.0.0.1:3000](http://127.0.0.1:3000).

### Avec Node.js :
```bash
npx serve .
```

---

## 🌐 Procédure de déploiement sur GitHub Pages

Le portfolio est optimisé pour GitHub Pages avec des chemins 100% relatifs (`./assets/...`), garantissant un fonctionnement parfait quel que soit le nom du dépôt ou l'URL finale.

### Étape 1 : Initialisation du dépôt Git local
Dans le terminal, à la racine du dossier `CHRICE` :
```bash
git init
git add index.html .nojekyll .gitignore README.md assets/
git commit -m "feat: portfolio Linaharison Chrice prêt pour GitHub Pages"
```

### Étape 2 : Création du dépôt sur GitHub
1. Rendez-vous sur [GitHub](https://github.com/new).
2. Deux choix s'offrent à vous :
   - **Option A (Dépôt racine utilisateur — Recommandée) :** Nommez le dépôt `<votre-pseudo>.github.io` (ex. `chrice.github.io`). L'URL de votre site sera directement `https://<votre-pseudo>.github.io/`.
   - **Option B (Dépôt de projet) :** Nommez le dépôt selon votre choix (ex. `portfolio` ou `chrice-portfolio`). L'URL sera `https://<votre-pseudo>.github.io/<nom-du-depot>/`. Grâce aux chemins relatifs testés et validés, toutes les ressources fonctionneront sans aucune modification.
3. Laissez le dépôt Public (requis pour GitHub Pages gratuit).

### Étape 3 : Liaison et envoi du code
```bash
git branch -M main
git remote add origin https://github.com/<votre-pseudo>/<nom-du-depot>.git
git push -u origin main
```

### Étape 4 : Activation de GitHub Pages
1. Sur GitHub, ouvrez votre dépôt et allez dans **Settings > Pages**.
2. Dans la section **Build and deployment** :
   - **Source** : `Deploy from a branch`
   - **Branch** : `main`
   - **Folder** : `/ (root)`
3. Cliquez sur **Save**.
4. GitHub Pages déploie le site en 1 à 2 minutes avec HTTPS actif par défaut.

---

## 📋 Actions finales pour l'utilisateur

1. **Ajouter le CV :** Déposez votre fichier PDF sous `assets/documents/cv.pdf`.
2. **Ajouter la photo portrait :** Déposez votre photo sous `assets/images/portrait.jpg` (ou `.png`) et mettez à jour le cadre portrait dans `index.html`.
3. **Mettre à jour les métadonnées de partage (optionnel) :** Une fois votre URL GitHub Pages active, décommentez et renseignez `og:url` et `og:image` dans le `<head>` de `index.html`.
