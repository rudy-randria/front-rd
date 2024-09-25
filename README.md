This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


src/
└── app/
    ├── layout.tsx  # Layout global de l'application
    ├── page.tsx    # Page d'accueil (par défaut)
    ├── api/        # Endpoints API (comme dans le dossier `pages/api`)
    └── [route]/    # Sous-dossiers pour chaque route dynamique

layout.tsx : Fichier où vous définissez la mise en page globale de l'application (navigation, pied de page, etc.). Ce layout est partagé entre toutes les pages.
page.tsx : Correspond à une page de route. Chaque sous-dossier peut avoir son propre fichier page.tsx, définissant le contenu de cette route.
api/ : Comme auparavant avec pages/api, vous pouvez gérer vos endpoints API ici.

useState :

    useState est un hook qui permet de déclarer une variable d'état dans un composant fonctionnel. Il retourne un tableau avec deux éléments :
        La valeur actuelle de l'état.
        Une fonction pour mettre à jour cette valeur.
        
Chakra UI est une bibliothèque de composants d'interface utilisateur (UI) pour React qui permet de créer des interfaces utilisateur accessibles, modulaires et réactives avec une personnalisation minimale. Conçue pour offrir une expérience de développement fluide, Chakra UI inclut une gamme de composants prêts à l'emploi comme des boutons, des formulaires, des boîtes modales, des grilles, etc., et propose une approche simple pour le stylisme.        