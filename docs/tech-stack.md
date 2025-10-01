# Personal Portfolio Website - Tech Stack

## Frontend Technologies

### Core Technologies
- **HTML5**: Semantic markup, accessibility features, modern form elements
- **CSS3**: Custom properties, Grid, Flexbox, animations, media queries
- **Tailwind CSS**: Utility-first CSS framework for rapid responsive design
- **Vanilla JavaScript**: DOM manipulation, form handling, theme switching

### Development Tools
- **VS Code/Windsurf**: Primary IDE with extensions
- **Tailwind CLI**: CSS processing and purging
- **Live Server**: Development server with hot reload
- **Git**: Version control and collaboration

### Build Process
```bash
# Install Tailwind CSS
npm install -D tailwindcss
npx tailwindcss init

# Build CSS (development)
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

# Build CSS (production)
npx tailwindcss -i ./src/input.css -o ./src/output.css --minify
```

## Development Setup

### Local Development
- **Development Server**: Live reload with `npm run serve`
- **Build Command**: `npx tailwindcss -i ./src/input.css -o ./src/output.css --minify`
- **Watch Mode**: `npm run dev` for automatic CSS rebuilding
- **Testing**: Manual testing in multiple browsers
- **Form Handling**: Formspree integration for form processing

## External Services

### Form Handling
- **Formspree**: Contact form backend (100 submissions/month free)
- **Local Testing**: Test forms in development environment

### Analytics
- **PostHog**: Privacy-focused analytics (1M events/month free)
- **Alternative**: Google Analytics 4

### Performance Monitoring
- **Lighthouse CI**: Automated performance testing
- **Web Vitals**: Core performance metrics tracking

## Development Environment Setup

### VS Code Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-json",
    "ritwickdey.liveserver",
    "formulahendry.auto-rename-tag"
  ]
}
```

### Package.json Configuration
```json
{
  "name": "patrick-portfolio",
  "version": "1.0.0",
  "description": "Personal portfolio website for Patrick Udoh",
  "scripts": {
    "dev": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch",
    "build": "npx tailwindcss -i ./src/input.css -o ./src/output.css --minify",
    "serve": "live-server --port=3000"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0"
  }
}
```

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F8F9FA',
        'text-primary': '#212529',
        'text-secondary': '#6C757D',
        'accent-primary': '#007BFF',
        'accent-secondary': '#20C997',
        // Dark mode
        'dark-bg-primary': '#212529',
        'dark-bg-secondary': '#343A40',
        'dark-text-primary': '#E9ECEF',
        'dark-text-secondary': '#ADB5BD',
        'dark-accent-primary': '#0D6EFD',
        'dark-accent-secondary': '#3DDC84'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
```

## Alternative Approaches

### Option 1: Bootstrap + Custom CSS
**Pros:**
- Faster initial setup with pre-built components
- Extensive documentation and community
- Grid system and responsive utilities

**Cons:**
- Larger CSS bundle (150KB vs 10KB with Tailwind)
- Less design flexibility
- Generic Bootstrap appearance

### Option 2: CSS Frameworks Comparison
| Framework | Bundle Size | Learning Curve | Customization | Performance |
|-----------|-------------|----------------|---------------|-------------|
| Tailwind  | ~10KB       | Medium         | High          | Excellent   |
| Bootstrap | ~150KB      | Low            | Medium        | Good        |
| Bulma     | ~200KB      | Low            | Medium        | Good        |
| Foundation| ~120KB      | High           | High          | Good        |

### Option 3: CSS-in-JS Solutions
**Not Recommended for this project:**
- Styled Components: Requires React
- Emotion: Adds JavaScript overhead
- CSS Modules: Overkill for static site

## Justification for Chosen Stack

### HTML5 + CSS3 + Vanilla JS
- **Universal Compatibility**: Works in all modern browsers
- **Performance**: No framework overhead, faster loading
- **Maintainability**: Simple, readable code structure
- **Accessibility**: Full control over semantic markup
- **SEO**: Server-side rendering not needed for static content

### Tailwind CSS
- **Rapid Development**: Utility classes speed up styling
- **Consistency**: Design system built into the framework
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Bundle Size**: Only includes used classes in production
- **Customization**: Easy to extend with custom colors and spacing

### Static Hosting
- **Cost Effective**: Free tier sufficient for portfolio needs
- **Performance**: CDN delivery, optimized for static content
- **Security**: No server-side vulnerabilities
- **Scalability**: Handles traffic spikes automatically
- **Simplicity**: No server maintenance required

## Development Workflow

### Local Development
1. Clone repository
2. Install dependencies: `npm install`
3. Start Tailwind watch: `npm run dev`
4. Start live server: `npm run serve`
5. Open browser to `http://localhost:3000`

### Production Build
1. Build optimized CSS: `npm run build`
2. Test locally with `npm run serve`
3. Commit changes to Git
4. Push to repository for version control

### Quality Assurance
- **Code Validation**: HTML5 validator, CSS validator
- **Performance**: Lighthouse audit (score > 90)
- **Accessibility**: axe-core testing (WCAG 2.1 AA)
- **Cross-browser**: Testing on Chrome, Firefox, Safari, Edge
- **Mobile**: Testing on iOS and Android devices
