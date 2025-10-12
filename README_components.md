# 🧩 Components Folder Structure Guide

This document explains how to organize and name component folders in this project for consistency and clarity.

---

## 📁 Overview

All reusable or section-specific React components live inside the `src/components/` directory.
We follow two main folder naming conventions:

1. **PascalCase** → Used for single React component folders
2. **lowercase / kebab-case** → Used for folders that group related components

---

## 🧱 1. PascalCase — for individual components

When a folder represents a **single component** (e.g., `HowItWorks`, `Header`, `Footer`),
the folder name should follow **PascalCase** — capitalizing the first letter of each word.

This helps developers instantly recognize that:

> “This folder is one component, not just a group.”

**Example:**

```
components/
 └─ HowItWorks/
     ├─ HowItWorks.tsx
     ├─ HowItWorks.module.scss
     └─ index.ts
```

**Reasoning:**

* React components are capitalized (`function HowItWorks()`)
* Easier to identify components during imports
* Keeps related files together (TSX, styles, tests, etc.)

---

## 📦 2. lowercase / kebab-case — for grouped folders

When a folder only **groups multiple components** (and is not a React component itself),
use **lowercase** or **kebab-case**.

**Example:**

```
components/
 ├─ ui/
 │   ├─ Button.tsx
 │   ├─ Card.tsx
 │   └─ Modal.tsx
 │
 ├─ layout/
 │   ├─ Header.tsx
 │   ├─ Footer.tsx
 │   └─ Sidebar.tsx
 │
 └─ sections/
     ├─ Hero/
     ├─ Features/
     └─ HowItWorks/
```

**Reasoning:**

* Group folders aren’t React components, so they don’t need PascalCase
* Keeps imports predictable and clean

  ```tsx
  import HowItWorks from "@/components/sections/HowItWorks";
  import { Button } from "@/components/ui";
  ```

---

## 🧠 Quick Rules

| Type             | Example                       | Naming                     | Description                                   |
| ---------------- | ----------------------------- | -------------------------- | --------------------------------------------- |
| Component Folder | `HowItWorks/`                 | **PascalCase**             | Represents one React component                |
| Group Folder     | `ui/`, `layout/`, `sections/` | **lowercase / kebab-case** | Contains multiple related components          |
| File inside      | `Button.tsx`, `Header.tsx`    | **PascalCase**             | React components start with uppercase letters |

---

## ✅ Summary

* Use **PascalCase** for component folders.
* Use **lowercase/kebab-case** for grouping folders.
* Keep structure clean, readable, and consistent.
* Each main component should have its own folder containing its code, styles, and optional index/test files.

---

**Example Full Structure**

```
src/
 └─ components/
     ├─ ui/
     │   ├─ Button.tsx
     │   └─ Card.tsx
     │
     ├─ layout/
     │   ├─ Header/
     │   │   ├─ Header.tsx
     │   │   └─ Header.module.scss
     │   └─ Footer/
     │       └─ Footer.tsx
     │
     └─ sections/
         ├─ Hero/
         │   └─ Hero.tsx
         └─ HowItWorks/
             └─ HowItWorks.tsx
```

---
