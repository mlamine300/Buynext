# 🛒 Full-Stack E-Commerce Platform (Microservices)

A scalable full-stack e-commerce platform built with a **microservices architecture** inside a **Turborepo monorepo**. The project separates each business domain into independent services, allowing better scalability, maintainability, and fault tolerance while sharing common packages across applications.

## ✨ Features

<p align="center">
  <a href="https://github.com/mlamine300/Buynext">
    <img src="https://ik.imagekit.io/lamine300/buunext%20banner" alt="BuyNext Banner" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-3FA037?style=for-the-badge&logo=javascript&logoColor=white" />
  <img src="https://img.shields.io/badge/microservices-0304AE?style=for-the-badge&logo=distrobox&logoColor=white" />
  <img src="https://img.shields.io/badge/turbopack-black?style=for-the-badge&logo=turbo&logoColor=white" />
  <img src="https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Next.js-000013?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/-Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" />

</p>

### Customer Store
- Browse products by category
- Search and filter products
- Sort products by price or date
- Product details with multiple colors and sizes
- Shopping cart management
- Secure checkout flow
- Shipping information validation
- Payment processing
- Order history
- User authentication and authorization

### Admin Dashboard
- Analytics dashboard
- Sales overview
- Recent orders
- Product management
- Category management
- User management
- Order management
- Create, update and delete resources
- Image upload for products
- Pagination and table filtering

---

## 🏗️ Architecture

The application follows a **microservices architecture**, where each service is isolated and owns its own database.

Current services include:

- 📦 Product Service
- 📑 Order Service
- 💳 Payment Service
- 🔐 Authentication Service (Clerk)
- 🛍️ Client Application
- 🛠️ Admin Dashboard

Each service can evolve independently and communicate through an event-driven architecture.

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- React Hook Form

### Backend
- Express.js
- Fastify
- Hono
- Node.js
- TypeScript

### Authentication
- Clerk

### Database
- PostgreSQL
- Prisma ORM

### Monorepo
- Turborepo
- pnpm Workspaces

### Development Tools
- Docker
- ESLint
- TypeScript
- Prisma Studio

---

## 📂 Project Structure

```text
apps/
│
├── client
├── admin
├── product-service
├── order-service
└── payment-service

packages/
│
├── product-db
├── typescript-config
└── shared packages
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/mlamine300/Buynext.git
cd your-repository
```

### Install dependencies

```bash
pnpm install
```

### Configure environment variables

Create the required `.env` files for each application and service.

### Run the project

```bash
turbo dev
```

---

## 📌 Main Concepts

- Microservices Architecture
- Monorepo with Turborepo
- Independent backend services
- Shared packages
- Type-safe APIs
- Authentication with Clerk
- PostgreSQL + Prisma
- REST APIs
- Dockerized databases
- Scalable project structure

---

## 🔮 Future Improvements

- Kafka event streaming
- Redis caching
- Inventory Service
- Notification Service
- Recommendation Engine
- API Gateway
- CI/CD Pipeline
- Kubernetes deployment
- Monitoring & Logging

---

## 📸 Preview

> Screenshots and demo GIFs coming soon.

---

## 📄 License

This project is open-source and available under the MIT License.