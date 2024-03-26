# Learning Space Modules - Monkey Everyday <!-- omit in toc -->

# Table of Contents <!-- omit in toc -->

- [Design Resources](#design-resources)
- [Planning Tools](#planning-tools)
  - [Coda](#coda)
  - [Basecamp](#basecamp)
- [Contributing](#contributing)
  - [Pre-requisites](#pre-requisites)
  - [Getting Started](#getting-started)
- [Deployments](#deployments)
  - [Learning Space - Web](#learning-space---web)
  - [Learning Space - Tutor](#learning-space---tutor)
  - [Learning Space - API](#learning-space---api)
- [Technologies](#technologies)
  - [Web-based Frontend](#web-based-frontend)
  - [Backend](#backend)
  - [Communication](#communication)
  - [Repository Management Tool](#repository-management-tool)
- [Repository Structure](#repository-structure)

# Design Resources

- [Figma Prototype](https://www.figma.com/file/RbaiUYZqW5oLR575tDAt7r/Monkey-Marketplace---Prototype) - design เว็บทั้งหมดของ Learning Space ประกอบด้วยเว็บของนักเรียนและเว็บของติวเตอร์
- [Figma Design System](https://www.figma.com/file/ESZHZfn36ElrzUz9puLZsC/LS-Platform---Design-System) - component ที่ใช้ในเว็บ และอาจจะมีบางหน้าของเว็บที่ยังไม่พร้อมสำหรับการ prototype

# Planning Tools

## [Coda](https://coda.io/d/Luminate_dfapp3Is4CQ/Phase-2_suaWH#_lu3IL)

1. Requirements ทั้งหมดของ Learning Space ทั้ง functional และ non-functional ของเว็บนักเรียนและเว็บติวเตอร์
2. Account สำหรับทดสอบ ทั้งบน staging และ production
3. Migration Plan ต่าง ๆ สำหรับการทำให้ระบบใหม่ compatible กับระบบเก่า

โดยทีม developers จะฟัง breif จาก PM จากนั้นจะมาเขียน backlog ลงใน `Backlog For Dev > Sprint X` กัน จากนั้นจะทำการ estimate point และให้แต่ละคนเลือกงานที่จะทำใน sprint โดย คำนึงถึงความเหมาะสมของงานและความสามารถในการ burn point ของทีม

## [Basecamp](https://3.basecamp.com/5569566/projects/33601701)

ใช้สำหรับการติดตาม progress ของงานแต่ละ sprint ที่ plan เอาไว้ใน Coda โดย developer จะต้องเป็นคนเพิ่ม card เข้าไปใน Basecamp เอง เพื่อให้ PM ได้รับ notification ว่างานไหนเสร็จตอนไหน แล้วใน sprint เหลืองานอะไรบ้าง

# Contributing

## Pre-requisites

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [PNPM](https://pnpm.io/) - Package manager
- [Docker](https://www.docker.com/) - Containerization platform
- [Docker Compose](https://docs.docker.com/compose/) - Tool for defining and running multi-container Docker applications

## Getting Started

1. Clone the repository

   ```bash
   git clone git@github.com:softnetics/luminate.git
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

   > Check if you have the correct version of Node.js and PNPM. If not, we encourage you to use [corepack](https://github.com/nodejs/corepack)

3. Prepare .env file

   ```bash
   cp apps-api/marketplace/.env.sample apps-api/marketplace/.env
   cp apps-web/marketplace/.env.sample apps-web/marketplace/.env
   cp apps-web/tutor/.env.sample apps-web/tutor/.env
   ```

4. Prepare local database instance

   ```bash
   docker compose up -d
   ```

5. Code generation for Typescript

   ```bash
   pnpm codegen
   ```

6. Start the development server

   ```bash
    # All services
    pnpm dev --filter '@web/*' --filter '@api/*'
    # Student Only
    pnpm web:dev
    # Tutor Only
    pnpm tutor:dev
    # API Only
    pnpm api:dev
   ```

   See in the console for the URL of the development server. Basically, as shown below.

   | Service |          URL          |
   | :-----: | :-------------------: |
   |   Web   | http://localhost:3000 |
   |  Tutor  | http://localhost:3001 |
   |   API   | http://localhost:4000 |

# Deployments

เราจะใช้ [GitHub Action](https://github.com/features/actions) และ [Vercel](https://vercel.com/) ในการทำ deployment automation โดยเมื่อมี code ถึง push ขึ้นมาที่ main branch เครื่องมือทั้งสองจะทำการ build และ deploy ไปที่ production environment โดยอัตโนมัติ ในขณะที่ staging environment จะ deploy โดยอัตโนมัติเมื่อมี code ถึง push ขึ้นมาที่ staging branch

## Learning Space - Web

**Staging** https://learning-space-staging.vercel.app

**Production** https://learning-space-prod.vercel.app/

## Learning Space - Tutor

**Staging** https://learning-space-tutor-staging.vercel.app/

**Production** TODO

## Learning Space - API

**Staging** https://luminate-marketplace-api-staging.fly.dev

**Production** TODO

# Technologies

## Web-based Frontend

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Radix UI](https://radix-ui.com/) - Component Library
- [Shadcn UI](https://ui.shadcn.com/) - Designed components
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

## Backend

- [Fastify](https://www.fastify.io/) - Fast and low overhead web framework, for Node.js
- [Prisma](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM
- [@wessberg/di](https://github.com/wessberg/DI) - Compile-time dependency injection for TypeScript

## Communication

- [ts-rest](https://ts-rest.com/) - For e2e type-safe communication between frontend and backend

## Repository Management Tool

- [Turborepo](https://turborepo.com/) - Monorepo management tool

# Repository Structure

ประกอบไปด้วย 3 folder หลัก ๆ

```tree
lumiante/
├── .changeset
├── apps-api/
│   └── learning-space/
│       └── package.json
├── apps-web/
│   ├── learning-space/
│   │   └── package.json
│   └── tutor/
│       └── package.json
└── packages/
    ├── example-1
    └── example-2
```

**apps-api**: รวบรวม service ที่เกี่ยวข้องกับ backend ทั้งหมด

**apps-web**: รวบรวม service ที่เกี่ยวข้องกับ frontend ทั้งหมด

**packages**: รวบรวม internal package ที่สามารถแชร์ได้ระหว่าง service ไม้ว่าจะเป็นระหว่าง frontend กับ frontend, backend กับ backend หรือ frontend กับ backend ซึ่ง internal packages ทั้งหมดนี้มีจำนวนเยอะมาก สามารถอ่านรายละเอียดได้ที่ README.md ของแต่ละ package
