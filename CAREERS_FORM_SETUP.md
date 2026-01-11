# Careers Form - Where to Send CV/Resume

## Current Status
The careers form is currently set to **simulation mode** (for testing). It does NOT actually send the CV anywhere yet.

## How to Configure Where to Send the CV

### Option 1: Backend API (Recommended)
1. Open `js/careers.js`
2. Find the configuration section (around line 360):
   ```javascript
   const API_ENDPOINT = '/api/careers/apply';
   const USE_BACKEND = false; // Change this to true
   ```
3. Set `USE_BACKEND = true`
4. Update `API_ENDPOINT` with your actual backend URL:
   ```javascript
   const API_ENDPOINT = 'https://yourdomain.com/api/careers/apply';
   ```

### Option 2: EmailJS (Send via Email)
1. Sign up at https://www.emailjs.com/ (free tier available)
2. Create an email service and template
3. Get your Service ID, Template ID, and Public Key
4. In `js/careers.js`, uncomment the EmailJS code section
5. Replace the placeholders:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

### Option 3: Form Submission Services
- **Formspree**: https://formspree.io/
- **Netlify Forms**: If hosting on Netlify
- **Google Forms**: Can be integrated via Apps Script

## Backend API Requirements

Your backend endpoint should:
- Accept POST requests
- Accept `multipart/form-data` (for file uploads)
- Handle the following fields:
  - `name` (text)
  - `email` (text)
  - `resume` (file - PDF, DOC, DOCX)
  - `interest` (text - area of interest)

Example backend response:
```json
{
  "success": true,
  "message": "Application received"
}
```

## Testing
Currently, the form shows a success message but doesn't actually send data. Check the browser console (F12) to see what data would be sent.

## Need Help?
- Check the console for error messages
- Ensure your backend CORS settings allow requests from your domain
- Verify file upload limits on your server

