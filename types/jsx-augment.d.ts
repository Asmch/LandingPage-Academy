// Bridge JSX IntrinsicElements from the automatic JSX runtime
import type { JSX as ReactJSX } from "react/jsx-runtime";

declare global {
  namespace JSX {
    // Extend rather than replace to preserve any existing declarations
    interface IntrinsicElements extends ReactJSX.IntrinsicElements {}
  }
}


