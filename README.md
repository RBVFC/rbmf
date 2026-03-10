# Riviera Beach Music Fest — Website

Built with Jekyll, hosted on GitHub Pages at [www.rbmfmd.com](https://www.rbmfmd.com).

---

## Folder Structure

```
rbmf/
├── _config.yml           ← Site-wide settings, festival date, contact emails
├── _data/
│   ├── schedule.yml      ← Set times, artist names, stages
│   ├── tickets.yml       ← Ticket tiers, prices, perks
│   ├── vendors.yml       ← All vendor listings
│   └── sponsors.yml      ← Sponsor names by tier (presenting/gold/community)
├── _artists/             ← One .md file per artist
│   └── artist-name.md
├── _layouts/
│   ├── default.html      ← Base layout (nav + footer wrapper)
│   ├── page.html         ← Standard page with hero banner
│   └── artist.html       ← Individual artist detail page
├── _includes/
│   ├── head.html         ← <head> tag, meta, CSS link
│   ├── nav.html          ← Site navigation
│   ├── archive-bar.html  ← 2025 archive links bar
│   └── footer.html       ← Footer + JS link
├── _pages/
│   ├── artists.html      ← /artists/
│   ├── vendors.html      ← /vendors/
│   ├── sponsors.html     ← /sponsors/
│   ├── our-cause.html    ← /our-cause/
│   └── info.html         ← /info/
├── assets/
│   ├── css/main.css      ← All styles and design tokens
│   ├── js/main.js        ← Nav, countdown, interactions
│   └── images/
│       ├── artists/      ← Artist photos (jpg/webp recommended)
│       └── sponsors/     ← Sponsor logos (png with transparency)
├── index.html            ← Homepage
└── CNAME                 ← Custom domain (do not edit)
```

---

## How to Update Content

### Change festival date, location, or contact info
Edit `_config.yml` — the `festival:` block at the top. This flows through to every page automatically.

### Add or update an artist
1. Create a new file in `_artists/` named `firstname-lastname.md` or `band-name.md`
2. Copy the front matter from an existing artist file
3. Fill in the YAML fields at the top, write the bio in Markdown below the `---`
4. Add a photo to `assets/images/artists/` and reference it in the `photo:` field

**Artist front matter fields:**
```yaml
---
title: "Band Name"         # Display name
genre: "Rock / Country"    # Shows on card and detail page
headliner: true            # true = featured card + headliner badge
set_time: "7:00 PM"        # Shows on detail page
stage: "Main Stage"
hometown: "Baltimore, MD"
photo: "/assets/images/artists/band-name.jpg"
audio: ""                  # Optional: /assets/images/artists/band-name.mp3
spotify: "https://..."
instagram: "https://..."
facebook: "https://..."
youtube: "https://..."
website: "https://..."
bio_short: "One sentence teaser shown on the grid card."
---

Full bio in Markdown goes here...
```

### Update the schedule
Edit `_data/schedule.yml` — add, remove, or reorder rows. Set `headliner: true` for the row you want highlighted in red.

### Add vendors
Edit `_data/vendors.yml` — copy an existing entry block and fill in the fields.

### Add sponsors
Edit `_data/sponsors.yml` — add entries under `presenting:`, `gold:`, or `community:`. If you have a logo image, drop it in `assets/images/sponsors/` and set the `logo:` path.

### Update ticket prices or perks
Edit `_data/tickets.yml`.

---

## How to Deploy Updates

1. Go to your GitHub repo
2. Navigate to the file you want to change
3. Click the pencil ✏️ icon to edit
4. Make your changes
5. Click **Commit changes** — GitHub Pages rebuilds automatically (usually under 30 seconds)

For uploading images, go to the correct folder in your repo, click **Add file → Upload files**.

---

## Local Preview (optional)

If you want to preview changes before pushing:
```bash
gem install bundler jekyll
bundle exec jekyll serve
# Open http://localhost:4000
```
