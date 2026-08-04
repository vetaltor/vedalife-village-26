export function generateScopedName(
  name: string,
  filename: string,
  css: string
): string {
  const base = filename!
    .split('/')!
    .pop()!
    .replace(/\.module.css$/, '');

  // get hash from full path to file
  const hash = hashCode(filename, 3);

  // root & root_mod selectors
  if (name.startsWith('root')) {
    return `${name.replace('root', base)}-${hash}`;
  }

  return `${base}__${name}-${hash}`;
}

function hashCode(string: string, hashLength = 5): string {
  let hash;
  for (let i = 0; i < string.length; i++) {
    hash = (Math.imul(31, hash) + string.charCodeAt(i)) | 0;
  }

  return Math.abs(hash).toString().slice(0, hashLength);
}
