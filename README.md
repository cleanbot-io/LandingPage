# Cleanbot
#### On-demand housekeeping service

## Getting Started

First, install packages:
```bash
yarn
```

Secondly, run the development server:
```bash
yarn dev
```


## Style Guide
When using an Image or img
```code 
import Image from "next/image";
```
Use Next's Image tag <Image> inplace of <img> or <image>
while they work, it is not optimal for Next and Vercel throws errors upon compilation.
- Make sure to assign a alt tag so it's  < Image alt='bedroom image' width='1000' height='100' >
also assign each image: width and height props

When using apostrophe
Use HTML entities for typography
so no hard coding ' instead use a code &lsquo; &prime; or &ldquo;
This way we are not getting errors on Vercel and it keeps NextJS happy

## Misc Info
Package to use:
https://keen-slider.io/examples#examples

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Photo Credits:
https://www.behance.net/gallery/60644969/Bathroom-wood-stone
by artist - Nataliya Yahela

https://www.behance.net/gallery/173629859/Living-Room-Interior-Design
by artist - Giorgi Mamaladze

https://unsplash.com/photos/white-and-gray-optical-illusion
by artist - JJ Ying

## Old landing page
https://lucid-tesla-2d8d82.netlify.app

## Analytics Setup Guide

This guide explains how to set up Sentry error tracking and Hotjar analytics in your Next.js 14 application.

## Project Structure

```
├── app/
│   ├── layout.js           # Root layout with AnalyticsProvider
│   └── global-error.js     # Global error handler for Sentry
├── components/
│   ├── AnalyticsProvider.jsx    # Analytics initialization component
│   └── CookieConsent/          # Cookie consent management
├── hooks/
│   └── useAnalytics.js    # Hook for managing analytics consent
├── utils/
│   ├── hotjar.js          # Hotjar initialization and cleanup
│   └── sentry.js          # Sentry utility functions
├── app/
│   └── instrumentation.ts  # Server-side Sentry initialization
├── instrumentation-client.ts # Client-side Sentry initialization (replaces sentry.client.config.js)
└── next.config.js         # Next.js configuration with Sentry
```

## Sentry Integration Guide

### Prerequisites
- Node.js installed
- Next.js project set up
- A Sentry account (create one at [sentry.io](https://sentry.io) if you don't have one)

### Setting Up Sentry with Wizard

1. Run the Sentry wizard in your project directory:
```bash
npx @sentry/wizard -i nextjs
```

2. Follow the interactive prompts:
   - Select your Sentry organization
   - Choose or create a project
   - The wizard will automatically:
     - Install required dependencies
     - Create necessary Sentry configuration files
     - Add required code to your Next.js configuration
     - Set up source maps
     - Configure error monitoring

3. The wizard will create/modify these files:
   - `sentry.client.config.js`
   - `sentry.server.config.js`
   - `sentry.edge.config.js`
   - `next.config.js` (with Sentry configuration)

### Environment Variables

After the wizard completes, make sure these environment variables are set in your `.env.local`:

```env
NEXT_PUBLIC_SENTRY_DSN=your-dsn-here
SENTRY_AUTH_TOKEN=your-auth-token
```

### Verifying the Installation

To verify Sentry is working:

1. Start your development server:
```bash
npm run dev
```

2. Test error monitoring by adding this test button to any page:
```jsx
<button
  type="button"
  onClick={() => {
    throw new Error("Sentry Frontend Test Error");
  }}
>
  Test Sentry Error
</button>
```

3. Check your Sentry dashboard to see if the error was captured.

### Features Included
- ✅ Error Monitoring
- ✅ Performance Monitoring
- ✅ Session Replay
- ✅ Source Maps Integration
- ✅ Environment-based Configuration

### Additional Resources
- [Sentry Next.js Documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Sentry Dashboard](https://sentry.io)
- [Next.js Documentation](https://nextjs.org/docs)

## Setting Up Hotjar

1. Create a Hotjar account at [https://www.hotjar.com](https://www.hotjar.com)

2. Create a new site in Hotjar and get your Site ID

3. Update `utils/hotjar.js` with your Hotjar ID:
   ```javascript
   const HOTJAR_ID = your-site-id;
   ```

## Privacy and Consent Management

The application includes a built-in cookie consent system that manages analytics activation:

- Analytics only initialize after user consent
- Users can manage their preferences through the cookie consent modal
- Consent settings are stored in localStorage
- Analytics are automatically cleaned up if consent is revoked

### Cookie Consent Options

The cookie banner allows users to manage:
- Necessary cookies (always enabled)
- Analytics cookies (Sentry & Hotjar)
- Marketing cookies (if implemented)

## How Analytics Work

1. When a user visits the site, they see the cookie consent banner
2. If they accept analytics:
   - Hotjar begins tracking user behavior
   - Sentry starts monitoring for errors
3. If they reject analytics:
   - No tracking scripts are loaded
   - Any existing tracking is cleaned up

## Development vs Production

- Sentry is only enabled in production by default
- Error tracking sample rate is set to 100% in development
- Adjust the following in production:
  ```javascript
  // in sentry.client.config.js
  tracesSampleRate: 1.0, // Adjust to lower value in production
  replaysSessionSampleRate: 0.1, // 10% of sessions
  replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors
  ```

## Security Considerations

- API keys and DSNs are exposed client-side but are designed to be public
- User consent is stored in localStorage
- All analytics respect user privacy settings
- Hotjar text masking and media blocking are enabled by default

## Troubleshooting

1. Check browser console for errors
2. Verify consent is properly stored in localStorage
3. Confirm Site IDs and DSNs are correctly set
4. Ensure all required dependencies are installed

### Common Issues:

1. If you see warnings about `sentry.server.config.js`:
   - Move the configuration to `app/instrumentation.ts`
   - Delete the old config file

2. If you see warnings about `sentry.client.config.js`:
   - Move the configuration to `instrumentation-client.ts`
   - Delete the old config file

3. If you see "BrowserTracing is not exported":
   - Make sure you're using the latest version of @sentry/nextjs
   - Check that your imports in instrumentation-client.ts are correct

4. For Turbopack compatibility:
   - Use the new instrumentation file structure
   - Avoid using the old .config.js files

5. "BrowserTracing is not a constructor" error:
   - Make sure you've installed @sentry/browser:
     ```bash
     npm install @sentry/browser
     ```
   - Import BrowserTracing and Replay from @sentry/browser:
     ```typescript
     import { BrowserTracing, Replay } from '@sentry/browser'
     ```
   - Use the imported classes directly, not through Sentry object

## Additional Resources

- [Sentry Next.js Documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Next.js Instrumentation Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation)
- [Hotjar Documentation](https://help.hotjar.com/hc/en-us)
- [Next.js Documentation](https://nextjs.org/docs)
