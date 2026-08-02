export function slugify(...parts: string[]) {
  const combiningMarks = /[̀-ͯ]/g;
  const base = parts
    .join(" ")
    .toLowerCase()
    .normalize("NFD")
    .replace(combiningMarks, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const suffix = Math.random().toString(36).slice(2, 6);
  return `${base}-${suffix}`;
}
