function isInternal(url: string | URL | undefined) {
  if (!url) return false;
  if (typeof url === "string") return /^\/(?!\/)/.test(url);

  return /^\/(?!\/)/.test(url.toString());
}

export default isInternal;