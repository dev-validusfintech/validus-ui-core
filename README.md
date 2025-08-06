# 🚀 validus-ui-core – Reusable TypeScript Utility Library

**validus-ui-core** is a lightweight, reusable utility library built with TypeScript for both frontend and backend applications.

This package is designed to promote:

- 🎯 **Maintainability** – Consistent, standardized utility functions across projects.
- ⚡ **Reusability** – DRY code via centralized logic and helpers.
- 🏗 **Scalability** – Seamless use across environments, including Node.js and browsers.

---

## 📦 Installation

This package is **publicly available on NPM** – no authentication required.

### Using npm

```bash
npm install validus-ui-core
```

### Using Yarn

```bash
yarn add validus-ui-core
```

---

## 💻 Usage

Import and use the utilities in your TypeScript or JavaScript projects:

### 🔢 Number Utilities

```ts
import { amountInWords } from "validus-ui-core";

console.log(amountInWords(123)); // "One Hundred Twenty-Three"
```

### 🔤 String Utilities

```ts
import { capitalize } from "validus-ui-core";

console.log(capitalize("hello world")); // "Hello World"
```

### 📅 Date Utilities

```ts
import { formatDate } from "validus-ui-core";

console.log(formatDate(new Date(), "YYYY-MM-DD")); // "2025-08-06"
```

---

## ⚙️ Scripts

### 🛠 Build

```bash
npm run build
```

### 🧪 Run Tests

```bash
npm test
```

---

## 🚀 Publishing to NPM

### 1. Ensure a clean Git state

```bash
git status
git add .
git commit -m "chore: prepare for release"
```

### 2. Bump version

Use the appropriate version update based on your changes:

```bash
# For bug fixes
npm version patch

# For new features
npm version minor

# For breaking changes
npm version major
```

### 3. Publish to npm

```bash
npm publish --access public
```

---

## 📏 Commit Guidelines

We follow **conventional commits** for clear and meaningful history:

| Type        | Description                     |
|-------------|---------------------------------|
| `feat`      | ✨ New feature                   |
| `fix`       | 🐛 Bug fix                      |
| `docs`      | 📖 Documentation changes        |
| `refactor`  | 🔄 Code restructuring            |
| `style`     | 🎨 Formatting (no code change)   |
| `test`      | 🧪 Add or update tests          |
| `build`     | 🏗 Build system changes          |
| `chore`     | 🏷 Maintenance or tooling       |
| `ci`        | 🚀 CI/CD config updates         |
| `perf`      | ⚡ Performance improvements     |

📌 **Example:**

```bash
git commit -m "feat: add amountInWords utility function"
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

> 💙 Built with care by the Validus team — for developers, by developers.
