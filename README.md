# DBD 2.0

The homepage for [Driven by Design Creative Agency](https://dbdcreativeagency.com/) — Michael L. Clay’s multimedia visual storytelling studio.

This app is the new front door: a mindmap plus the studio intro. Every other link opens the live WordPress site (or [Story Driven](https://www.thestorydrivengame.com/)).

## Routes

- `/` Mindmap homepage with the DBD intro
- Known leftover paths (`/my-journey`, `/contact`, `/shop`, …) redirect to the matching live page
- Unknown paths stay here as a 404 with a way home

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

Photographs and product images are Michael’s, drawn from the live studio archive.
