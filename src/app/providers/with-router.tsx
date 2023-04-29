import { Suspense } from "react";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/**
 * A higher-order component that wraps the given component with a BrowserRouter
 * and a Suspense fallback.
 * 
 * @param {() => React.ReactNode} component - The component to wrap.
 * @returns {() => JSX.Element} A function that returns the wrapped component.
 */
export const withRouter = (component: () => React.ReactNode): () => JSX.Element => {

  /**
   * A function that returns the wrapped component with a BrowserRouter
   * and a Suspense fallback.
   * 
   * @returns {JSX.Element} The wrapped component.
   */
  const WithRouterComponent = (): JSX.Element => (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        {component()}
      </Suspense>
    </BrowserRouter>
  );

  return WithRouterComponent;
};
