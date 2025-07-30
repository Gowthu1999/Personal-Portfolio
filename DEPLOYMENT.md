# Deployment Guide for Resume Portfolio

This guide explains how to deploy your React portfolio application with proper static file handling for the resume download feature.

## Resume Download Fix

The resume download feature has been fixed to work correctly in both development and production environments:

### What was changed:
- **File Path**: Changed from `'../../public/GowthamJenarthananResume.pdf'` to `'/GowthamJenarthananResume.pdf'`
- **Error Handling**: Added proper error handling with fallback to open PDF in new tab
- **File Validation**: Added check to verify file exists before download
- **Vite Configuration**: Updated to ensure proper static asset handling

### How it works:
1. Files in the `public` folder are served from the root URL (`/`) in both development and production
2. The download function now uses the correct absolute path `/GowthamJenarthananResume.pdf`
3. If download fails, it falls back to opening the PDF in a new browser tab

## Deployment Instructions

### 1. Build the Application
```bash
npm run build
```

This creates a `dist` folder with all the production files, including your PDF from the `public` folder.

### 2. Deployment Platforms

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy settings are automatically handled

#### Vercel
1. Connect your repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

#### Traditional Web Hosting
1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Ensure your web server serves static files correctly

### 3. Verify Deployment

After deployment, test the resume download feature:
1. Visit your deployed site
2. Click the "Resume" button in the header
3. Verify the PDF downloads correctly
4. If download doesn't work, it should open the PDF in a new tab as fallback

## File Structure

```
public/
├── GowthamJenarthananResume.pdf  ← Your resume file
└── other-static-files...

src/
├── components/
│   ├── Header.tsx               ← Contains download function
│   └── other-components...
└── other-source-files...
```

## Troubleshooting

### Resume not downloading in production:
1. Check that the PDF file exists in the `public` folder
2. Verify the file name matches exactly: `GowthamJenarthananResume.pdf`
3. Check browser console for any errors
4. Test the direct URL: `https://yoursite.com/GowthamJenarthananResume.pdf`

### File not found errors:
1. Ensure the build process includes the public folder contents
2. Check that your hosting platform serves static files from the root
3. Verify the file wasn't corrupted during upload

### MIME type issues:
Some servers might not serve PDF files correctly. Add this to your server configuration if needed:
- Apache: Add to `.htaccess`: `AddType application/pdf .pdf`
- Nginx: Ensure PDF MIME type is configured in nginx.conf

## Security Considerations

- The PDF file is publicly accessible at `/GowthamJenarthananResume.pdf`
- Consider if you want to add any access controls or analytics tracking
- Keep the PDF file size reasonable for faster downloads

## Updates

To update your resume:
1. Replace the PDF file in the `public` folder
2. Keep the same filename or update the path in `Header.tsx`
3. Rebuild and redeploy the application
