# Deploying to Vercel

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (sign up at [vercel.com](https://vercel.com))

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

3. **Import your project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect it's a Vite project

4. **Configure the project:**
   - **Root Directory:** Set to `app` (since your project is in the app folder)
   - **Framework Preset:** Vite (auto-detected)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

5. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to your app folder:**
   ```bash
   cd app
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Login to Vercel
   - Link to existing project or create new
   - Confirm settings

5. **For production deployment:**
   ```bash
   vercel --prod
   ```

## Important Notes

- **Root Directory:** Make sure to set the root directory to `app` in Vercel settings if your project structure has the app folder
- **Environment Variables:** If you add any environment variables later, add them in Vercel dashboard under Project Settings → Environment Variables
- **Custom Domain:** You can add a custom domain in Vercel dashboard under Project Settings → Domains

## Troubleshooting

### Routes not working (404 errors)
- The `vercel.json` file is already configured to handle React Router routes
- Make sure the rewrites configuration is in place

### Build fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible (Vercel uses Node 18+ by default)

### Assets not loading
- Make sure all assets are in the `public` folder
- Check that paths use relative URLs (starting with `/`)

## After Deployment

Your portfolio will be live at: `https://your-project-name.vercel.app`

You can:
- Share this URL
- Add a custom domain
- Set up automatic deployments on every git push
