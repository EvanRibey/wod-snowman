import type { WoDAPIResult } from '../types';

export async function getWordOfTheDay(): Promise<WoDAPIResult> {
  let result = {
    word: '',
    definition: '',
    pronunciation: '',
    partOfSpeech: '',
  };

  try {
    const feedResults = await fetch('https://www.merriam-webster.com/wotd/feed/rss2');
    const feedText = await feedResults?.text();
    const feedAsDom = new window.DOMParser().parseFromString(feedText, 'text/xml');
    const wodDescription = new window.DOMParser().parseFromString(feedAsDom?.querySelector('item')?.querySelector('description')?.innerHTML || '', 'text/html');
    const [, wodBase, wodExample] = wodDescription.querySelectorAll('p');

    const [word, pronunciation, partOfSpeech] = wodBase.innerText.replaceAll('\n', '').split(' • ').map(part => part.trim());
    const definition = wodExample.innerText;

    result = {
      word,
      definition,
      pronunciation,
      partOfSpeech,
    };
  } catch (error) {
    console.error(error);
  }

  return result;
}
