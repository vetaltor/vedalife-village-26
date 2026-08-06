export function getPublicAsset(path: string) {
  return `${import.meta.env.BASE_URL}/${path}`;
}
