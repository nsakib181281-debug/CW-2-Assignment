# Anime Universe 🌸

A static web application that showcases popular anime series with detailed plot descriptions and an interactive fan submission form.

**Group 7** — Chowdhury Minhaj Ruquib (B01043363) · Sakib Md Nazmus (B01040292) · Waiba Pasang (B01045542)

---

## Project Overview

Anime Universe is a fan-facing website that serves as an informational hub for anime enthusiasts. It presents a curated collection of well-known anime titles, complete with cover art, brief summaries, and in-depth plot descriptions. Users can also submit their favourite anime character through a dedicated form, with submitted entries displayed dynamically on the page.

---

## Features

- **Universe Overview** — An introductory section welcoming visitors to the world of anime.
- **Anime Gallery** — A responsive card grid displaying six popular anime series, each with cover art and a short synopsis.
- **Plot Descriptions** — Detailed narrative summaries for each featured anime, accessible via in-page anchor links.
- **Character Submission Form** — An interactive form (powered by jQuery) where fans can submit their favourite character along with personal details. Entries are validated and displayed on the page without a page reload.
- **Navigation Bar** — Smooth anchor-based navigation linking to all major sections and the submission form page.

---

## Anime Titles Featured

| Title | Genre |
|---|---|
| One Piece | Adventure / Fantasy |
| Bleach | Action / Supernatural |
| Naruto | Action / Adventure |
| Death Note | Thriller / Psychological |
| Classroom of the Elite | Drama / Psychological |
| Vinland Saga | Historical / Action |

---

## Project Structure

```
project/
├── index.html       # Main page (overview, anime grid, plot descriptions)
├── form.html        # Fan character submission page
├── style.css        # Shared stylesheet for all pages
├── script.js        # jQuery logic for form validation and dynamic rendering
└── images/
    ├── favicon.png
    ├── One Piece.png
    ├── Bleach.png
    ├── Naruto.png
    ├── Death Note.png
    ├── Classroom of the Elite.png
    └── Vinland Saga.png
```

---

## Technologies Used

- **HTML5** — Page structure and semantic markup
- **CSS3** — Styling, responsive grid layout, hover animations
- **JavaScript (jQuery 3.6.0)** — Form handling, client-side validation, and dynamic DOM updates

---

## How to Run

No build tools or server setup is required. Simply open the project in a browser:

1. Download or unzip the project folder.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
3. Navigate using the top navigation bar.
4. To submit a favourite character, click **Submit Favourite Character** in the nav — this opens `form.html`.

> **Note:** Because the project uses local image paths, all files must remain in the same folder structure. Do not move individual files out of the project directory.

---

## Form Validation

The character submission form (`form.html`) requires all of the following fields before a submission is accepted:

- First Name
- Last Name
- Email
- Contact Number
- Favourite Character
- Description

If any field is left empty, an alert will prompt the user to complete the form. On successful submission, the entry is appended to the page under **Fan Submitted Characters** and the form is cleared automatically.

---

## License

This project was created for academic purposes as part of a group assignment. All anime imagery belongs to their respective copyright holders and is used here for educational and non-commercial purposes only.
