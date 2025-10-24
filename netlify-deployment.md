# Netlify Deployment Configuration

## Build Settings
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18

## Environment Variables
No environment variables required for this project.

## Redirects
All routes are redirected to `index.html` for SPA routing support.

## Headers
- Security headers enabled
- Cache optimization for static assets
- Performance optimization

## Deployment Steps
1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the build settings
3. Your site will be deployed automatically on every push to main branch
