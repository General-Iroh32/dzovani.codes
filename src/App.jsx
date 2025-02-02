import { Suspense, lazy } from "react";
import "./app.scss";
import "./components/shared.scss";
import Topbar from "./components/topbar/topbar";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load components
const About = lazy(() => import("./components/about/about"));
const Portfolio = lazy(() => import("./components/portfolio/portfolio"));
const Work = lazy(() => import("./components/work/work"));
const Contact = lazy(() => import("./components/contact/contact"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="loader"></div>
  </div>
);

function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <Topbar />
        <div className="sections">
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Portfolio />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Work />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Contact />
            </Suspense>
          </ErrorBoundary>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
