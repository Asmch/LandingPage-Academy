// Wide JSX fallback so JSX elements type-check without React namespace issues
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};


