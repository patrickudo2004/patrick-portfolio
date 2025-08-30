# Personal Portfolio Website - UI/UX Wireframes

## Design Principles

### Visual Hierarchy
- **Primary**: Hero section with professional introduction
- **Secondary**: Experience timeline and projects portfolio
- **Tertiary**: Skills, about, and contact sections
- **Supporting**: Navigation, footer, and interactive elements

### Color Strategy
- **Light Mode**: Clean, professional with #007BFF accents
- **Dark Mode**: Modern, comfortable with #0D6EFD accents
- **Accessibility**: 4.5:1 contrast ratio minimum
- **Consistency**: Systematic color application across components

## Homepage Wireframe

### Desktop Layout (1024px+)
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]              [HOME] [EXPERIENCE] [PROJECTS] [ABOUT] [CONTACT] [🌙] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────┐    ┌─────────────────────────────────┐ │
│  │                 │    │  Hi, I'm Patrick Udoh          │ │
│  │   Professional  │    │  Data Science MSc Student      │ │
│  │   Headshot      │    │  & IT Management Professional  │ │
│  │   (300x400px)   │    │                                │ │
│  │                 │    │  [VIEW PROJECTS] [DOWNLOAD CV]  │ │
│  └─────────────────┘    └─────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                    EXPERIENCE TIMELINE                      │
│                                                             │
│  2024 ┌─────────────────────────────────────────────────┐   │
│   │   │ MSc Data Science - University of Salford       │   │
│   │   │ • Advanced Analytics & Machine Learning        │   │
│   └───┴─────────────────────────────────────────────────┘   │
│                                                             │
│  2023 ┌─────────────────────────────────────────────────┐   │
│   │   │ General Manager - EO Essentials                │   │
│   │   │ • Boosted sales by 20% through strategic init. │   │
│   └───┴─────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                    FEATURED PROJECTS                        │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ E-commerce  │  │ CRM System  │  │ Data Viz    │         │
│  │ Platform    │  │ AWS/Azure   │  │ Dashboard   │         │
│  │             │  │             │  │             │         │
│  │ 20% Sales ↗ │  │ Cloud Sync  │  │ Analytics   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Mobile Layout (320px-768px)
```
┌─────────────────────────────┐
│ [LOGO]              [☰] [🌙] │
├─────────────────────────────┤
│                             │
│    ┌─────────────────┐      │
│    │   Professional  │      │
│    │   Headshot      │      │
│    │   (200x250px)   │      │
│    └─────────────────┘      │
│                             │
│    Hi, I'm Patrick Udoh     │
│    Data Science MSc Student │
│    & IT Professional       │
│                             │
│    [VIEW PROJECTS]          │
│    [DOWNLOAD CV]            │
│                             │
├─────────────────────────────┤
│       EXPERIENCE            │
│                             │
│ 2024 ┌─────────────────┐    │
│  │   │ MSc Data Science│    │
│  │   │ University of   │    │
│  │   │ Salford        │    │
│  └───┴─────────────────┘    │
│                             │
│ 2023 ┌─────────────────┐    │
│  │   │ General Manager │    │
│  │   │ EO Essentials   │    │
│  │   │ 20% Sales ↗    │    │
│  └───┴─────────────────┘    │
│                             │
├─────────────────────────────┤
│        PROJECTS             │
│                             │
│  ┌─────────────────────┐    │
│  │ E-commerce Platform │    │
│  │ 20% Sales Increase  │    │
│  └─────────────────────┘    │
│                             │
│  ┌─────────────────────┐    │
│  │ CRM System          │    │
│  │ AWS/Azure Cloud     │    │
│  └─────────────────────┘    │
│                             │
└─────────────────────────────┘
```

## Experience Timeline Wireframe

### Interactive Timeline Component
```
EXPERIENCE TIMELINE
════════════════════════════════════════════════════════════

2024  ┌─────────────────────────────────────────────────────┐
  │   │ 🎓 MSc Data Science - University of Salford        │
  │   │ ─────────────────────────────────────────────────── │
  │   │ • Advanced Analytics & Machine Learning            │
  │   │ • Statistical Modeling & Data Visualization        │
  │   │ • Python, R, SQL, Tableau                         │
  │   │ • Expected Graduation: 2025                        │
  └───┴─────────────────────────────────────────────────────┘

2023  ┌─────────────────────────────────────────────────────┐
  │   │ 💼 General Manager - EO Essentials                 │
  │   │ ─────────────────────────────────────────────────── │
  │   │ • Boosted sales by 20% through strategic planning  │
  │   │ • Led cross-functional team of 8 professionals     │
  │   │ • Implemented data-driven decision making          │
  │   │ • Technologies: CRM systems, Analytics tools       │
  └───┴─────────────────────────────────────────────────────┘

2022  ┌─────────────────────────────────────────────────────┐
  │   │ 🌐 Web Developer - YourTableAds                    │
  │   │ ─────────────────────────────────────────────────── │
  │   │ • Developed responsive e-commerce platform         │
  │   │ • Improved site performance by 40%                 │
  │   │ • HTML, CSS, JavaScript, PHP, MySQL               │
  │   │ • Client satisfaction rate: 95%                    │
  └───┴─────────────────────────────────────────────────────┘

2021  ┌─────────────────────────────────────────────────────┐
  │   │ 📦 Stock Controller - Euro Foods Group             │
  │   │ ─────────────────────────────────────────────────── │
  │   │ • Managed inventory for 500+ product lines         │
  │   │ • Reduced stock discrepancies by 30%               │
  │   │ • Implemented automated tracking systems           │
  │   │ • Excel, SAP, Inventory Management Software        │
  └───┴─────────────────────────────────────────────────────┘
```

## Projects Portfolio Wireframe

### Grid Layout with Filtering
```
FEATURED PROJECTS
═══════════════════════════════════════════════════════════════

[ALL] [WEB DEV] [DATA SCIENCE] [IT MANAGEMENT]

┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│ E-commerce Platform │  │ CRM System          │  │ Data Visualization  │
│ ─────────────────── │  │ ─────────────────── │  │ ─────────────────── │
│ [Project Image]     │  │ [Project Image]     │  │ [Project Image]     │
│                     │  │                     │  │                     │
│ Responsive online   │  │ Cloud-based CRM     │  │ Interactive         │
│ store with payment  │  │ with AWS/Azure      │  │ dashboard for       │
│ integration         │  │ integration         │  │ business analytics  │
│                     │  │                     │  │                     │
│ 📈 20% Sales ↗      │  │ ☁️ Cloud Sync       │  │ 📊 Real-time Data   │
│ 🛒 E-commerce       │  │ 🔄 Process Auto     │  │ 📈 Growth Insights  │
│                     │  │                     │  │                     │
│ HTML | CSS | JS     │  │ AWS | Azure | SQL   │  │ Python | Tableau    │
│ PHP | MySQL         │  │ REST APIs           │  │ D3.js | React       │
│                     │  │                     │  │                     │
│ [VIEW DEMO] [CODE]  │  │ [VIEW DEMO] [CODE]  │  │ [VIEW DEMO] [CODE]  │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘

┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│ Inventory System    │  │ Portfolio Website   │  │ Machine Learning    │
│ ─────────────────── │  │ ─────────────────── │  │ ─────────────────── │
│ [Project Image]     │  │ [Project Image]     │  │ [Project Image]     │
│                     │  │                     │  │                     │
│ Automated tracking  │  │ Responsive personal │  │ Predictive model    │
│ and reporting       │  │ portfolio site      │  │ for sales forecast  │
│ system              │  │                     │  │                     │
│                     │  │                     │  │                     │
│ 📦 30% Efficiency ↗ │  │ 🎨 Modern Design    │  │ 🤖 95% Accuracy     │
│ 📊 Real-time Data   │  │ ⚡ Fast Loading     │  │ 📈 Revenue Predict  │
│                     │  │                     │  │                     │
│ Excel | SAP | VBA   │  │ HTML | Tailwind     │  │ Python | Sklearn    │
│ Database Design     │  │ JavaScript          │  │ Pandas | NumPy      │
│                     │  │                     │  │                     │
│ [VIEW DEMO] [CODE]  │  │ [VIEW DEMO] [CODE]  │  │ [VIEW DEMO] [CODE]  │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘
```

## Contact Section Wireframe

### Contact Form with Validation
```
GET IN TOUCH
══════════════════════════════════════════════════════════════

Let's discuss your next project or collaboration opportunity.

┌─────────────────────────────────────────────────────────────┐
│                    CONTACT FORM                             │
│                                                             │
│  Name *                                                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [Your full name]                                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Email *                                                    │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [your.email@example.com]                           │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Subject                                                    │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [Project inquiry, collaboration, etc.]              │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Message *                                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [Tell me about your project or inquiry...]          │   │
│  │                                                     │   │
│  │                                                     │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│                                        [SEND MESSAGE]      │
└─────────────────────────────────────────────────────────────┘

DIRECT CONTACT
──────────────────────────────────────────────────────────────

📧 Email: patrick.udoh@example.com
📱 Phone: +44 XXX XXX XXXX
📍 Location: Manchester, UK
💼 LinkedIn: /in/patrick-udoh
🐙 GitHub: /patrick-udoh

RESPONSE TIME
──────────────────────────────────────────────────────────────
I typically respond within 24 hours during business days.
For urgent inquiries, please use the phone number above.
```

## Responsive Breakpoints

### Mobile First Approach
- **Mobile**: 320px - 768px
  - Single column layout
  - Stacked navigation menu
  - Full-width components
  - Touch-optimized interactions

- **Tablet**: 768px - 1024px
  - Two-column layout for projects
  - Horizontal navigation
  - Optimized touch targets
  - Balanced content spacing

- **Desktop**: 1024px - 1440px
  - Multi-column layouts
  - Side-by-side hero section
  - Hover interactions
  - Optimal reading widths

- **Large Desktop**: 1440px+
  - Centered max-width container
  - Enhanced spacing
  - Larger typography scale
  - Premium visual hierarchy

## Accessibility Features

### Visual Design
- **High Contrast**: 4.5:1 minimum ratio
- **Focus Indicators**: Clear, visible focus states
- **Color Independence**: Information not conveyed by color alone
- **Scalable Text**: Supports 200% zoom without horizontal scrolling

### Interactive Elements
- **Touch Targets**: Minimum 44px × 44px
- **Keyboard Navigation**: Logical tab order
- **Skip Links**: Jump to main content
- **Error Messages**: Clear, descriptive feedback

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Descriptive image alternatives
- **ARIA Labels**: Enhanced accessibility information
- **Live Regions**: Dynamic content announcements

This wireframe structure ensures a professional, accessible, and user-friendly portfolio website that effectively showcases Patrick's skills and experience while maintaining excellent usability across all devices.
