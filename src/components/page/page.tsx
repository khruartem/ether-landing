import { type FC, lazy, Suspense } from "react";

import { PreloaderUI } from "../ui/preloader";

import type { TPageProps } from "./type.ts";
import { Layout } from "../../layouts/main/layout.tsx";

const PageContent = lazy(() => import("../page-content/page-content.tsx"));

export const Page: FC<TPageProps> = ({ children }) => {
  return (
    <Suspense fallback={<PreloaderUI />}>
      <Layout>
        <PageContent>{children}</PageContent>
      </Layout>
    </Suspense>
  );
};
