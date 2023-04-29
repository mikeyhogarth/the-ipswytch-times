import client from "$lib/sanity-client";
import type { PageLoad } from './$types';

export const load =  (async () => {
    const data = await client.fetch(`*[_type == "news-story"]`);

  if (data) {
    return {
      stories: data
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };

}) satisfies PageLoad;