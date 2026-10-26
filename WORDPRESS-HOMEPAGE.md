# Swap only the WordPress homepage

Keep WordPress on [dbdcreativeagency.com](https://dbdcreativeagency.com/). Do **not** point the whole domain at Vercel. This app is the front door; the mindmap and nav send people to the live WordPress pages (`/my-journey/`, `/contact/`, shop, and the rest). Pointing the domain at Vercel would send those links back to the same host and loop.

After this repo’s `main` branch is deployed, the mindmap lives at the Vercel production URL (currently [dbd-jade-nine.vercel.app](https://dbd-jade-nine.vercel.app)). Check that URL first. Then replace only `/` on WordPress.

## 1. Confirm Vercel is the new homepage

Open the Vercel production URL. Play or skip the intro. Click a mindmap node and a nav item. You should land on the matching WordPress page (or [Story Driven](https://www.thestorydrivengame.com/)).

## 2. Make a blank WordPress page

1. In WordPress go to **Pages → Add New**.
2. Title it something like `Home` (the title can stay hidden).
3. If the theme has a **blank canvas**, **landing**, or **no header/footer** template, choose that. You do not want two nav bars.
4. Publish the page.

## 3. Put the Vercel homepage in that page

Add a Custom HTML block (or the theme’s HTML widget) with:

```html
<iframe
  src="https://dbd-jade-nine.vercel.app/"
  style="position:fixed;inset:0;width:100%;height:100%;border:0"
  title="Driven by Design"
></iframe>
```

If the Vercel production URL changes, update `src` to match.

## 4. Make that page the site homepage

1. Go to **Settings → Reading**.
2. Under **Your homepage displays**, choose **A static page**.
3. Set **Homepage** to the page you just created.
4. Save.

Visitors to `https://dbdcreativeagency.com/` now see this mindmap. Clicks still open the real WordPress URLs in the same tab. They do not have to see `vercel.app`.

## 5. Hide leftover theme chrome

On that one page only, hide the WordPress header, footer, and cookie banner overlap if they sit on top of the iframe. How you do that depends on the theme (a blank template, a “hide header” option, or a page-specific CSS rule).

## Later, if you want it cleaner

Upload this app’s `dist` folder into the theme or `wp-content` and use a `front-page.php` that loads that `index.html`. Same result, no iframe.

## Do not do this

Do not add `dbdcreativeagency.com` as a Vercel custom domain, and do not change DNS at Sucuri or the registrar for this step. That replaces the whole site, not just the homepage.

GitHub Pages (`zay2006.github.io/DBD2.0/`) is a worse public homepage: it needs Pages enabled and lives under `/DBD2.0/`.
