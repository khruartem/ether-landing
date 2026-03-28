import { type FC, lazy, Suspense } from "react";

import { PreloaderUI } from "../ui/preloader";
import { Layout } from "../../layouts/main/layout.tsx";
import { ScrollToHash } from "../scroll-to-hash/scroll-to-hash.tsx";

import type { TPageProps } from "./type.ts";

const PageContent = lazy(() => import("../page-content/page-content.tsx"));

export const Page: FC<TPageProps> = ({ children }) => {
  return (
    <Suspense fallback={<PreloaderUI />}>
      <Layout>
        <PageContent>{children}</PageContent>
        <ScrollToHash />
      </Layout>
    </Suspense>
  );
};
