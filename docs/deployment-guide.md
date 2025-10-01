# Local Development Guide - Patrick Udoh Portfolio

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- Git
- VS Code or preferred code editor

### Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/patrick-udoh/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   In one terminal, run:
   ```bash
   npm run dev
   ```
   This will watch for changes to your CSS files.

4. **View the Site**
   In another terminal, run:
   ```bash
   npm run serve
   ```
   This will start a local server at `http://localhost:3000`

## Building for Production

1. **Build Assets**
   ```bash
   npm run build
   ```
   This will create optimized CSS in `src/output.css`

2. **Test Locally**
   ```bash
   npm run serve
   ```
   Test the production build at `http://localhost:3000`

## Pre-Deployment Checklist

### Required Files
- [x] `index.html` - Main HTML file
- [x] `src/output.css` - Compiled CSS
- [x] `src/js/main.js` - JavaScript functionality
- [x] `.github/workflows/deploy.yml` - GitHub Actions
- [ ] Professional headshot image
- [ ] Project screenshots
- [ ] Favicon

### Content Updates Needed
- [ ] Replace placeholder contact email
- [ ] Add actual phone number
- [ ] Update LinkedIn/GitHub URLs
- [ ] Replace project demo/code links
- [ ] Add professional headshot image
- [ ] Update Formspree form endpoint

### Performance Optimization
- [x] CSS minification ready
- [x] Image lazy loading implemented
- [x] Responsive design completed
- [x] Accessibility features added
- [x] SEO meta tags included

## Form Setup (Formspree)

1. **Create Formspree Account**
   - Sign up at https://formspree.io
   - Create new form
   - Copy form endpoint URL

2. **Update JavaScript**
   - Replace `YOUR_FORM_ID` in `src/js/main.js`
   - Update fetch URL with your Formspree endpoint

3. **Test Form**
   - Submit test message
   - Verify email delivery
   - Check spam folder if needed

## Analytics Setup (Optional)

### PostHog Integration
1. Create PostHog account
2. Get project API key
3. Add tracking script to `index.html`
4. Configure event tracking

### Google Analytics Alternative
1. Create GA4 property
2. Add tracking code to `index.html`
3. Set up conversion goals

## Security Headers

Security headers are configured in the HTML `<head>` section:
- Content Security Policy
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy
- Cache-Control for static assets

These headers help protect against common web vulnerabilities.

## Performance Monitoring

### Lighthouse Scores Target
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >90

### Core Web Vitals
- First Contentful Paint: <1.8s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## Domain Configuration

### Custom Domain Setup
1. Purchase domain (recommended: patrick-udoh.com)
2. In your domain registrar's DNS settings, add these records:
   - A Record: @ -> 185.199.108.153
   - A Record: @ -> 185.199.109.153
   - A Record: @ -> 185.199.110.153
   - A Record: @ -> 185.199.111.153
3. In your GitHub repository, go to Settings > Pages
4. Under "Custom domain", enter your domain and follow verification steps
5. GitHub will automatically provision an SSL certificate

## Maintenance

### Regular Updates
- Review and update project portfolio quarterly
- Update CV/resume annually
- Monitor form submissions weekly
- Check analytics monthly

### Content Updates
- Add new projects as completed
- Update experience timeline
- Refresh testimonials/recommendations
- Update skills and certifications

## Troubleshooting

### Common Issues
1. **CSS not loading**: Check file paths and MIME types
2. **Forms not working**: Verify Formspree endpoint
3. **Images not displaying**: Check image paths and formats
4. **Mobile layout issues**: Test responsive breakpoints

### Debug Steps
1. Check browser console for errors
2. Validate HTML/CSS
3. Test on multiple devices
4. Use Lighthouse for performance audit

## Backup Strategy

### Version Control
- All code in Git repository
- Regular commits with descriptive messages
- Backup branches for major changes

### Content Backup
- Export form submissions monthly
- Backup analytics data quarterly
- Save local copies of all images

This deployment guide ensures a smooth launch of your professional portfolio website.
