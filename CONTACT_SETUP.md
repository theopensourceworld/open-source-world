# Contact Form Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   - Copy `env.example` to `.env`
   - Update the `.env` file with your Gmail credentials:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

3. **Gmail App Password Setup**
   - Go to Google Account Settings:
      - Visit myaccount.google.com
      - Click on "Security" in the left sidebar
   - Find App Passwords:
      - Look for "App passwords" section
      - If you don't see it immediately, scroll down or look under "Signing in to Google"
   - Generate App Password:
      - Click "App passwords"
      - Select "Mail" as the app
      - Select "Other (custom name)" as the device
      - Enter "Open Source World Contact Form" as the name
      - Click "Generate"
   - Copy the Generated Password:
      - Google will show you a 16-character password like abcd efgh ijkl mnop
      - Copy this password (remove spaces) and put it in the .env copied file

