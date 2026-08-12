import { browser } from '$app/environment';

export const redirectTo = (url: string): url => {
  if (browser) {
    document.title = `Redirecting to ${url}...`;
    window.location.href = url;
  }
  return url;
};
