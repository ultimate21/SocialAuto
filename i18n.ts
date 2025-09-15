import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = [
  'id',    // Indonesian
  'ms',    // Malay
  'th',    // Thai
  'vi',    // Vietnamese
  'tl',    // Filipino
  'en',    // English
  'es',    // Spanish
  'fr',    // French
  'de',    // German
  'it',    // Italian
  'pt',    // Portuguese
  'nl',    // Dutch
  'ru'     // Russian
];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

export { locales };