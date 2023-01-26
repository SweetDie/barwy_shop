import { ReactElement } from 'react';

// declare global {
//     interface Window {
//         google: any,
//         [key: string]: any
//     }
// }

declare global {
    const google: typeof import('google-one-tap');
  }