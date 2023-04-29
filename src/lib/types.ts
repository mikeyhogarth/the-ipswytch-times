import type { InputValue } from '@portabletext/svelte/ptTypes';

export interface NewsStory {
    headline: string;
    slug: string;
    content: InputValue;
}