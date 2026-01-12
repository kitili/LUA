# API Integration Guide

## ✅ API Endpoints Created

I've created 3 API endpoints for your forms:

1. **Contact Form**: `/api/contact` (POST)
2. **Quote Request**: `/api/quote` (POST)  
3. **Career Application**: `/api/careers/apply` (POST)

## 📝 Update JavaScript Files

You need to update the JavaScript files to actually call these APIs. Here's what to change:

### 1. Update `js/contact.js` (around line 223)

**Replace this:**
```javascript
// Simulate form submission (replace with actual API call)
setTimeout(() => {
    // Success
    showFormMessage('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
    form.reset();
    
    // Reset button
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
}, 2000);
```

**With this:**
```javascript
// Send to API
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        showFormMessage(data.message || 'Thank you! Your message has been sent successfully.', 'success');
        form.reset();
    } else {
        showFormMessage(data.error || 'Sorry, there was an error. Please try again.', 'error');
    }
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
})
.catch(error => {
    console.error('Error:', error);
    showFormMessage('Sorry, there was an error. Please try again.', 'error');
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
});
```

### 2. Update `js/quote.js` (around line 241)

**Replace this:**
```javascript
// Simulate form submission
setTimeout(() => {
    // Success
    showQuoteMessage('Thank you! Your quote request has been submitted successfully. We will contact you within 24 hours.', 'success');
    form.reset();
    
    // Reset button
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
}, 2000);
```

**With this:**
```javascript
// Send to API
fetch('/api/quote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        showQuoteMessage(data.message || 'Thank you! Your quote request has been submitted successfully.', 'success');
        form.reset();
    } else {
        showQuoteMessage(data.error || 'Sorry, there was an error. Please try again.', 'error');
    }
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
})
.catch(error => {
    console.error('Error:', error);
    showQuoteMessage('Sorry, there was an error. Please try again.', 'error');
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
});
```

### 3. Update `js/careers.js` (around line 365)

**Change this line:**
```javascript
const USE_BACKEND = false; // Set to true when you have a backend ready
```

**To:**
```javascript
const USE_BACKEND = true; // Backend is ready!
```

The careers.js file already has the API call code, you just need to enable it!

## 🔄 After Updating

After updating the JavaScript files, copy them to the public folder:

```bash
cp js/*.js public/js/
```

Or they'll be automatically used if you're running the dev server.

## 🧪 Testing the APIs

You can test the APIs using curl or Postman:

**Contact Form:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "subject": "Test",
    "message": "This is a test message"
  }'
```

**Quote Request:**
```bash
curl -X POST http://localhost:3000/api/quote \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@example.com",
    "phone": "+1234567890",
    "address": "123 Main St",
    "projectType": "residential",
    "location": "Nairobi"
  }'
```

## ⚠️ Next Steps

1. Update the JavaScript files as shown above
2. Set up your database (see PROJECT_SETUP.md)
3. Uncomment and configure the database code in the API routes
4. Set up email service for notifications
5. Configure file storage for resume uploads

