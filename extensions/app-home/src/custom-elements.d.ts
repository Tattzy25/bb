import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // This tells TypeScript that <canvas-orb> is a real thing 
      // and defines which attributes it is allowed to accept.
      'canvas-orb': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'data-wireframe'?: string;
        'data-scale'?: string;
        'data-color-base'?: string;
        'data-speed'?: string;
      };
    }
  }
}