# CORS Configuration for Laravel Cloud

## Issue
The frontend application running on `http://localhost:5173` cannot access the backend API at `https://training-courses-backend-6jkbrp.laravel.cloud` due to CORS policy restrictions with credentials.

## Solution

### 1. Backend Code Changes (Already Applied)
✅ Updated `config/cors.php` to set `supports_credentials` to `true`

### 2. Environment Variables Required on Laravel Cloud

You need to set the following environment variables on your Laravel Cloud deployment:

```env
SESSION_SAME_SITE=none
SESSION_SECURE_COOKIE=true
SESSION_DOMAIN=null
```

### How to Set Environment Variables on Laravel Cloud:

1. Go to your Laravel Cloud dashboard
2. Navigate to your project: **training-courses-backend-6jkbrp**
3. Go to **Settings** or **Environment** tab
4. Add/Update the following environment variables:
   - `SESSION_SAME_SITE` = `none`
   - `SESSION_SECURE_COOKIE` = `true`
   - `SESSION_DOMAIN` = `null` (or leave empty)
   
4. **Redeploy** your application for changes to take effect

### Why These Settings?

- **`supports_credentials: true`** in CORS config allows the browser to send cookies and auth headers
- **`SESSION_SAME_SITE=none`** allows cookies to be sent in cross-origin requests
- **`SESSION_SECURE_COOKIE=true`** is required when using `SameSite=none` (only works over HTTPS)

### Alternative: Disable Credentials (Not Recommended)

If you don't need to send cookies/auth headers, you can modify the frontend configuration:

In `frontend/src/api/http.js`, change:
```javascript
const http = axios.create({
  baseURL: 'https://training-courses-backend-6jkbrp.laravel.cloud/api',
  withCredentials: false, // Change to false
  // ... rest of config
});
```

However, this is **not recommended** if you plan to use authentication/sessions.

## Testing

After applying the changes and redeploying:

1. Clear browser cache and cookies
2. Restart your frontend dev server: `npm run dev`
3. Test the API requests again

## Verification

The CORS preflight response should include:
```
Access-Control-Allow-Origin: http://localhost:5173
Access-Control-Allow-Credentials: true
```

You can verify this in your browser's DevTools > Network tab > Check the OPTIONS request headers. 