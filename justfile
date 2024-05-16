[private]
default:
  just --choose

# Launches the dev server, hot reloading for changes
dev:
  npm run dev --host --open

# builds the site for production
build:
  npm run build

# builds and previews the website
preview: build
  npm run preview

sloc:
  @echo "`wc -l *.c` lines of code"
