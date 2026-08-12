import { json } from '@sveltejs/kit';

/**
 * Fetch all quotes
 * @returns {Promise<Array<string>>} - An array of quotes
 */
const fetchQuotes = async () => {
  const quotes = import.meta.glob('./*.json', { eager: true });
  return Object.values(quotes)
    .map((quote) => quote.default)
    .flat();
};

export const GET = async () => {
  const quotes = await fetchQuotes();
  return json(quotes);
};
