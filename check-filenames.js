const fs = require("fs");
const path = require("path");

// Next.js special files that should be lowercase
const NEXTJS_SPECIAL_FILES = [
  "page.tsx",
  "layout.tsx",
  "loading.tsx",
  "error.tsx",
  "not-found.tsx",
  "route.tsx",
  "template.tsx",
  "default.tsx",
];

// File extensions to check
const VALID_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];

// Directories to ignore
const IGNORE_DIRS = ["node_modules", ".next", ".git", "dist", "build"];

function isPascalCase(str) {
  return /^[A-Z][a-zA-Z0-9]*$/.test(str.split(".")[0]);
}

function checkFilenames(dir, issues = []) {
  try {
    // Skip ignored directories
    if (IGNORE_DIRS.some((ignoreDir) => dir.includes(ignoreDir))) {
      return issues;
    }

    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const dirent of files) {
      const fullPath = path.join(dir, dirent.name);
      const ext = path.extname(dirent.name);
      const isValidExtension = VALID_EXTENSIONS.includes(ext);

      try {
        if (dirent.isDirectory()) {
          // Check folder naming convention (lowercase with hyphens allowed)
          if (!/^[a-z0-9-]+$/.test(dirent.name)) {
            issues.push(
              `Directory "${fullPath}" should be lowercase with optional hyphens`
            );
          }
          // Recursively check subdirectories
          checkFilenames(fullPath, issues);
        } else if (dirent.isFile() && isValidExtension) {
          // Skip checking special Next.js files
          if (NEXTJS_SPECIAL_FILES.includes(dirent.name)) {
            continue;
          }

          // Check if file is in pages or components directory
          const isComponentOrPage =
            fullPath.includes("components") ||
            fullPath.includes("pages") ||
            fullPath.includes("app");

          if (isComponentOrPage && !isPascalCase(dirent.name)) {
            issues.push(`Component/Page "${fullPath}" should be in PascalCase`);
          }

          // Check for invalid special file locations
          if (
            NEXTJS_SPECIAL_FILES.some(
              (specialFile) =>
                dirent.name.toLowerCase() === specialFile &&
                dirent.name !== specialFile
            )
          ) {
            issues.push(
              `Next.js special file "${fullPath}" should be lowercase`
            );
          }
        }
      } catch (error) {
        if (error.code !== "ENOENT") {
          console.warn(
            `Warning: Error processing ${fullPath}: ${error.message}`
          );
        }
      }
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.warn(`Warning: Error reading directory ${dir}: ${error.message}`);
    }
  }

  return issues;
}

// Usage
const projectRoot = process.cwd(); // Or specify your project path
const issues = checkFilenames(projectRoot);

if (issues.length === 0) {
  console.log("✅ All filenames follow Next.js conventions");
} else {
  console.log("❌ Found filename issues:");
  issues.forEach((issue) => console.log(`- ${issue}`));
  process.exit(1); // Exit with error code if issues found
}
// To run this script, use the command:
// node check-filenames.js
