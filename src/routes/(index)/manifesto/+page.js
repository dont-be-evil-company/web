/**
 * @type {import('@sveltejs/kit').Load}
 */
export const load = async ({ fetch }) => {
  const response = await fetch(`/api/manifesto`);
  const quotes = await response.json();

  return {
    quotes
  };
};
