# Café Delicia - Evaluación Integral

**Alumno:** Oswaldo Jesús Robles Phoco
**Curso:** Programación Web II  
**Ciclo:** 2025-20

## Uso de Props (Requisito del examen)

**Componente PADRE:** `src/pages/Menu.jsx`  
**Componente HIJO:** `src/components/MenuItem.jsx`

El componente padre `Menu.jsx` pasa las siguientes props al componente hijo `MenuItem.jsx`:
- nombre
- precio
- descripcion
- imagen

## Tecnologías utilizadas

- React + Vite
- React Router DOM
- Bootstrap 5

## 📦 Instalación
```bash
npm install
npm run dev
```

## Deploy

Link del proyecto desplegado: 

## Estructura del proyecto
```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   └── MenuItem.jsx (recibe props)
├── pages/
│   ├── HomePage.jsx
│   ├── MenuPage.jsx (pasa props)
│   └── ContactoPage.jsx
└── App.jsx
```