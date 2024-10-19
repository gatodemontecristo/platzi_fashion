<br />
<div align="center">
  <a href="https://github.com/gatodemontecristo/platzi_fashion">
     <img src="https://github.com/gatodemontecristo/platzi_fashion/blob/main/public/platzi_icon.png" alt="Logo" width="180" height="80">
  </a>

<h3 align="center">Platzi Ecommerce - Y Donde estan las rubias?</h3>

  <p align="center">
    Ecommerce Platzi (inspirado en Zara), basado en el curso de React.js con Vite.js y Tailwind.css de PLatzi
    <br />
  </p>
</div>

### Realizado con

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* 	![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* 	![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* 	![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
* 	![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* 	![React](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

### Páginas/librerías usadas

Página de iconos -> https://heroicons.com/

Página de Mockups -> https://shots.so/

Generador de identificadores -> https://www.npmjs.com/package/uuid

Framework para la traducción -> https://www.i18next.com/

Zustand -> https://zustand-demo.pmnd.rs/

### Aplicación en escritorio

![image](https://github.com/user-attachments/assets/906a4b8b-cb86-4ef2-8491-0dc1f4edaf44)
![image](https://github.com/user-attachments/assets/63bea39a-0978-497a-8d13-f0b9035e337f)
![image](https://github.com/user-attachments/assets/4da0b0bc-d11b-4311-8362-2e8eadbec4ab)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
