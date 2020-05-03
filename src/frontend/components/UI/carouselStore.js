import { readable } from 'svelte/store';

export const cur = readable(0, set => {
    let n = 0;
    const interval = setInterval(() => {
        n++;
        set(n);
    }, 5000);

    return () => {
        clearInterval(interval);
    };
});
