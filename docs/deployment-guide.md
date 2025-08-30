# Deployment Guide - Patrick Udoh Portfolio

## Quick Start Deployment

### Option 1: Netlify (Recommended)

1. **Connect Repository**
   - Push code to GitHub repository
   - Connect GitHub repo to Netlify
   - Netlify will auto-detect settings from `netlify.toml`

2. **Build Settings**
   - Build command: `npm run build` (or manual CSS build)
   - Publish directory: `./`
   - Node version: 18

3. **Environment Variables**
   - No environment variables required for basic deployment
   - Optional: Set up form handling with Netlify Forms

4. **Custom Domain**
   - Add custom domain in Netlify dashboard
   - SSL certificate automatically provisioned

### Option 2: GitHub Pages

1. **Repository Setup**
   - Push code to GitHub repository
   - Enable GitHub Pages in repository settings
   - Set source to main branch

2. **Build Process**
   - GitHub Actions workflow in `.github/workflows/deploy.yml`
   - Automatically builds and deploys on push to main

### Option 3: Manual Deployment

1. **Build Assets**
   - CSS is already built in `src/output.css`
   - No additional build step required

2. **Upload Files**
   - Upload all files to web server
   - Ensure `index.html` is in root directory
   - Set up proper MIME types for CSS/JS files

## Pre-Deployment Checklist

### Required Files
- [x] `index.html` - Main HTML file
- [x] `src/output.css` - Compiled CSS
- [x] `src/js/main.js` - JavaScript functionality
- [x] `netlify.toml` - Netlify configuration
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

Headers are configured in `netlify.toml`:
- Content Security Policy
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer Policy

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
2. Update DNS records to point to Netlify
3. Enable HTTPS (automatic with Netlify)
4. Set up email forwarding if needed

### DNS Records
```
A Record: @ -> 75.2.60.5
CNAME: www -> patrick-udoh.netlify.app
```

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
