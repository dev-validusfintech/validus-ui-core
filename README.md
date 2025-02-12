# 🚀 **Shared Utils - Reusable TypeScript Utility Library**

Welcome to **Shared Utils**, a TypeScript-based utility package designed for **frontend and backend** development.

This package ensures:

- 🎯 **Maintainability** – Standardized utility functions.
- ⚡ **Reusability** – Avoid duplicating logic across projects.
- 🏗 **Scalability** – Works across different environments seamlessly.

---

## 🔧 **Installation Guide**

### 📥 **Install via npm**
```sh
npm install @dev-validusfintech/validus-ui-core
```

### 📥 **Install via Yarn**
```sh
yarn add @dev-validusfintech/validus-ui-core
```

---

## 💻 **Usage**

Import and use the utilities in your **TypeScript/JavaScript** projects:

### 🔢 **Number Utilities**
```typescript
import { amountInWords } from "@dev-validusfintech/validus-ui-core";

console.log(amountInWords(123)); // "One Hundred Twenty-Three"
```

### 🔤 **String Utilities**
```typescript
import { capitalize } from "@dev-validusfintech/validus-ui-core";

console.log(capitalize("hello world")); // "Hello World"
```

### 📅 **Date Utilities**
```typescript
import { formatDate } from "@dev-validusfintech/validus-ui-core";

console.log(formatDate(new Date(), "YYYY-MM-DD")); // "2025-02-12"
```

---

## 📦 **Building & Testing**
### 🚀 **Build the Package**
```sh
npm run build
```

### 🧪 **Run Tests**
```sh
npm test
```

---

## 📊 **Versioning & Publishing**

### ✅ **1️⃣ Ensure Clean Git State**
```sh
git status
git add .
git commit -m "chore: prepare for release"
```

### 🔢 **2️⃣ Version Update**
📌 **For a patch release (bug fixes):**
```sh
npm version patch
```
📌 **For a minor release (new features):**
```sh
npm version minor
```
📌 **For a major release (breaking changes):**
```sh
npm version major
```

### 🚀 **3️⃣ Push & Publish**
```sh
git push origin main --follow-tags
npm publish --access=restricted
```

---

## 📊 **Commit Guidelines**
This project follows **conventional commits** for structured commit history:

- 🎉 `feat`: New feature
- 🐛 `fix`: Bug fix
- 📖 `docs`: Documentation update
- 🔄 `refactor`: Code restructuring
- 🏗 `build`: Build system updates
- 🏷 `chore`: Maintenance work
- ⚡ `perf`: Performance improvements
- 🧪 `test`: Add/modify tests
- 🚀 `ci`: CI/CD changes
- 🎨 `style`: Code formatting & style

📌 **Example Commit:**
```sh
git commit -m "feat: add amountInWords utility function"
```

---

## 📜 **License**
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

💙 **Crafted with ❤️ for Developers** 🚀

---