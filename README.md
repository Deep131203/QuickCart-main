# 🛒 QuickCart - Full Stack eCommerce Web App

Live Site 👉 [quick-cart-main.vercel.app](https://quick-cart-main-lyart.vercel.app/)

## 📦 Overview

**QuickCart** is a modern, full-featured eCommerce web application built with a powerful tech stack including **Next.js**, **MongoDB**, **Tailwind CSS**, **Clerk Authentication**, and **Inngest** for background jobs. It offers a seamless online shopping experience, from browsing products to placing orders and managing user accounts.

---

## 🚀 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (App Router)
- **Backend**: API Routes with MongoDB
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Authentication**: [Clerk](https://clerk.dev/)
- **UI Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Serverless Functions & Jobs**: [Inngest](https://www.inngest.com/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## ✨ Features

- 🔐 User authentication with Clerk (sign in, sign up, manage account)
- 🛍️ Product listing with dynamic categories
- 📦 Cart functionality with quantity management
- 🧾 Checkout and order placement
- 🧠 Background processing with Inngest
- 🎨 Responsive and modern UI using Tailwind CSS
- 🔍 Search & filter products
- 🧑 User dashboard for order tracking
- 🌐 SEO optimized and blazing fast

---

## 📸 Screenshots

| Home Page | Product Page | Cart | Auth |
|-----------|--------------|------|------|
| ![Home](https://via.placeholder.com/300x180?text=Home) | ![Product](https://via.placeholder.com/300x180?text=Product) | ![Cart](https://via.placeholder.com/300x180?text=Cart) | ![Auth](https://via.placeholder.com/300x180?text=Login/Register) |

*Replace these placeholder images with your actual screenshots.*

---

## ⚙️ Getting Started Locally

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/quick-cart.git
cd quick-cart
2. Install dependencies

npm install

3. Configure environment variables
Create a .env.local file in the root and add your variables:

MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_FRONTEND_API=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
INGGEST_EVENT_KEY=your_inngest_event_key
4. Run the development server

npm run dev
Open http://localhost:3000 with your browser.

📂 Folder Structure

/app            → App router pages
/components     → Reusable UI components
/models         → Mongoose models
/api            → Serverless API routes
/utils          → Helper functions
/context        → Global state context
/config         → Database & Clerk config
🧠 What I Learned
Integrating full authentication systems using Clerk

Structuring scalable full-stack projects with Next.js App Router

Creating API routes and background jobs with Inngest

Using MongoDB with Mongoose for flexible schemas

Styling complex UIs with Tailwind CSS

🌐 Deployment
Deployed on Vercel — CI/CD with GitHub integration, and easy environment variable management.

🛠️ Future Improvements
Admin dashboard to manage products

Product reviews & ratings

Payment gateway integration (Stripe, Razorpay)

Wishlist and favorite products

Email notifications using Resend or Postmark

🙋‍♂️ Author
Swapnadeep Mishra

LinkedIn: https://www.linkedin.com/in/swapnadeep-mishra-523912260/

GitHub: github.com/Deep131203

⭐️ Show Your Support
If you like this project, feel free to ⭐️ the repo and share it with others!

Let me know if you want me to personalize the GitHub link (`yourusername`) or if you'd like to add shields/badges or a project license section.

