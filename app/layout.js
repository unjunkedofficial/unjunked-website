@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: 255 255 255;
  --fg: 17 17 17;
}

html,
body {
  height: 100%;
}

body {
  color: rgb(var(--fg));
  background: rgb(var(--bg));
}

.container-page {
  @apply mx-auto w-full max-w-6xl px-4;
}

.btn {
  @apply inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition;
}

.btn-primary {
  @apply bg-black text-white hover:opacity-90;
}

.btn-ghost {
  @apply border border-black/15 bg-white text-black hover:bg-black/5;
}

.card {
  @apply rounded-3xl border border-black/10 bg-white shadow-sm;
}

.muted {
  @apply text-black/60;
}

.h1 {
  @apply text-4xl font-extrabold tracking-tight sm:text-5xl;
}

.h2 {
  @apply text-2xl font-bold tracking-tight sm:text-3xl;
}
