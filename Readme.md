# Cookie Testing JS

This project demonstrates basic authentication and session management in Node.js using Express. It includes two versions:

- **app.js**: Uses `express-session` for server-side session management.
- **appv1.js**: Uses cookies and a simple in-memory object for session-like behavior.

## Features

- User login with username
- Session or cookie-based authentication
- Protected product page (accessible only when logged in)
- Logout (in `app.js`)

## How to Run

1. **Install dependencies:**
   ```bash
   npm install express cookie-parser express-session
   ```

2. **Start the server:**
   ```bash
   node app.js
   ```
   or
   ```bash
   node appv1.js
   ```

3. **Test the endpoints:**

   - **Login:**
     ```
     POST /login
     Content-Type: application/json
     Body: { "username": "yourname" }
     ```

   - **Access product page:**
     ```
     GET /product
     (Send the session cookie or the 'name' cookie received from login)
     ```

   - **Logout (only in app.js):**
     ```
     POST /logout
     ```

## Notes

- `app.js` uses server-side sessions (`express-session`).
- `appv1.js` uses cookies and a simple object (`sessionStorage`) for demonstration only (not for production).
- For real applications, use a persistent session store and never store sensitive data in cookies or in-memory objects.

## License

MIT