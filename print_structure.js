const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Configuration
const excludeDirs = ["node_modules", ".git", ".next", "dist", "build"];
const outputFile = "structure.txt";

/**
 * Check if tree command is available
 * @returns {boolean} True if tree command is available
 */
function isTreeCommandAvailable() {
  try {
    execSync("tree --version", { stdio: "ignore" });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Generate structure using tree command
 */
function generateWithTreeCommand() {
  console.log("Generating structure using tree command...");

  const excludePattern = excludeDirs.map((dir) => `-I "${dir}"`).join(" ");
  const command = `tree ${excludePattern} > ${outputFile}`;

  try {
    execSync(command, { stdio: "inherit" });
    console.log(`✅ Repository structure saved to ${outputFile}`);
  } catch (error) {
    console.error(
      "❌ Failed to generate structure with tree command:",
      error.message
    );
    generateWithNodeJs();
  }
}

/**
 * Generate structure using Node.js (fallback method)
 */
function generateWithNodeJs() {
  console.log("Generating structure using Node.js...");

  /**
   * Walk through directory recursively
   * @param {string} dir Directory to walk
   * @param {number} level Current level of nesting
   * @param {string[]} result Array to store results
   */
  function walkDir(dir, level = 0, result = []) {
    const indent = "│   ".repeat(level);
    const files = fs.readdirSync(dir);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const filePath = path.join(dir, file);

      // Skip excluded directories
      if (excludeDirs.includes(file)) {
        continue;
      }

      try {
        const stats = fs.statSync(filePath);
        const isLast = i === files.length - 1;
        const prefix = isLast ? "└── " : "├── ";

        if (stats.isDirectory()) {
          result.push(`${indent}${prefix}${file}/`);
          walkDir(filePath, level + 1, result);
        } else {
          result.push(`${indent}${prefix}${file}`);
        }
      } catch (error) {
        result.push(`${indent}├── ${file} [error: ${error.code}]`);
      }
    }

    return result;
  }

  try {
    const structure = ["."];
    walkDir(".", 0, structure);

    fs.writeFileSync(outputFile, structure.join("\n"));
    console.log(`✅ Repository structure saved to ${outputFile}`);
  } catch (error) {
    console.error(
      "❌ Failed to generate structure with Node.js:",
      error.message
    );
  }
}

/**
 * Count files and directories in the repository (excluding specified directories)
 */
function countFilesAndDirectories() {
  let dirCount = 0;
  let fileCount = 0;

  /**
   * Count files and directories recursively
   * @param {string} dir Directory to start counting from
   */
  function count(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);

      // Skip excluded directories
      if (excludeDirs.includes(file)) {
        continue;
      }

      try {
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
          dirCount++;
          count(filePath);
        } else {
          fileCount++;
        }
      } catch (error) {
        // Skip files that can't be accessed
      }
    }
  }

  try {
    count(".");

    // Append counts to the output file
    const countSummary = `\n${dirCount} directories, ${fileCount} files`;
    fs.appendFileSync(outputFile, countSummary);
  } catch (error) {
    console.error("❌ Failed to count files and directories:", error.message);
  }
}

// Main execution
console.log("Generating repository structure...");

if (isTreeCommandAvailable()) {
  generateWithTreeCommand();
} else {
  console.log("Tree command not found, falling back to Node.js implementation");
  generateWithNodeJs();
  countFilesAndDirectories();
}
