# NCIM - National Center for Inspection and Monitoring

Website for the National Center for Inspection and Monitoring (المركز الوطني للتفتيش والرقابة), a Saudi government agency providing services for government entities and inspection companies.

## Overview

This is a single-page Arabic (RTL) website that showcases the services offered by NCIM to government regulatory entities and inspection companies. The page features an interactive expandable card interface and includes embedded prototypes for e-services.

> **⚠️ Disclaimer**: This project is for **non-commercial use only** and is intended for **educational purposes** as a **side project**. It is not affiliated with, endorsed by, or associated with the National Center for Inspection and Monitoring (NCIM) or any government entity. This is a personal learning project created for portfolio and educational demonstration purposes.

## Features

- **Arabic RTL Layout**: Fully localized for Arabic language with right-to-left text direction
- **Interactive Expandable Cards**: 5 service cards with staggered heights and expand/collapse functionality
- **Scroll Animations**: Intersection Observer API for smooth fade-in animations on scroll
- **Responsive Design**: Bootstrap-based responsive layout that works on all device sizes
- **Service Showcase**: Displays five main service categories:
  1. تكامل الجهود الرقابية (Regulatory Efforts Integration)
  2. رفع كفاءة الأداء المؤسسي (Enhancing Institutional Performance)
  3. منصة رقمية موحدة (Unified Digital Platform)
  4. ترخيص وتأهيل شركات التفتيش (Licensing and Qualification of Inspection Companies)
  5. بناء القدرات والمهارات (Building Capacities and Skills)

## Project Structure

```text
ncim/
├── index.html          # Main HTML page
├── styles.css          # Compiled CSS stylesheet (2.4MB)
├── LICENSE             # MIT License
├── README.md           # Project documentation
└── images/             # Image assets
    ├── bgs/
    │   └── glow-bg.png
    ├── icons/
    │   ├── academic.png
    │   ├── certificate.png
    │   ├── efficacy.png
    │   ├── online-lesson.png
    │   ├── saudi-pattern.svg
    │   └── shakehand-outline.svg
    └── logo/
        └── ncim.png
```

## Setup

### Local Development

1. Clone or download this repository
2. Open `index.html` in a web browser
3. For best results, use a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Technical Details

- **Framework/Platform**: Exported from Drupal 11
- **CSS Framework**: Bootstrap (custom theme)
- **Language**: HTML5 with Arabic (RTL) support
- **External Dependencies**:
  - Drupal core scripts from `ncim.gov.sa`
  - Bootstrap JavaScript
  - jQuery
  - Figma embed (e-services prototype)

## Known Issues & Notes

⚠️ **External Dependencies**: The page references several JavaScript files hosted on `ncim.gov.sa`. These may not work in a local environment:

- Drupal core scripts
- Theme-specific JavaScript (`expand-view.js`, `main.js`, `index.js`, etc.)
- Some functionality may be limited without these scripts

💡 **CSS File Size**: The `styles.css` file is 2.4MB, which is quite large. Consider:

- Minifying the CSS
- Removing unused styles
- Splitting into multiple files if needed for production

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- RTL (Right-to-Left) language support required
- JavaScript enabled for full functionality

## License

MIT License - Copyright (c) 2025 Danish Saleem

See [LICENSE](LICENSE) file for details.

## Contact

For questions or issues related to this project, please contact me at [danish_s@outlook.com](mailto:danish_s@outlook.com).
