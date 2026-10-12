const message = process.argv[2];

if (!message) {
  console.error("Usage: npm run msg -- <message>");
  process.exit(1);
}

console.log(message);