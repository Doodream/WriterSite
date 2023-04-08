/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || 'AIzaSyAGcC8IGW31oCmucWp7yTXWmRUm-bexlK4',
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || 'writersite-588b5.firebaseapp.com',
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || 'writersite-588b5',
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET || 'writersite-588b5.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID || '41227792802',
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID || '1:41227792802:web:953bbc7769cad3b32b42fb'
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'newsimg.hankookilbo.com', 'image.utoimage.com', 'firebasestorage.googleapis.com']
  },
  webpack(config) {
    // svg를 컴포넌트로 가져와서 사용가능
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}
