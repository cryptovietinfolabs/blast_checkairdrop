"use client";

import { State } from "wagmi";

import { BlastThemeProvider } from "@/contexts/BlastThemeProvider";
import QueryClientProviders from "@/contexts/QueryClientProvider";
import { UiProvider } from "@/contexts/UiProvider";
import WagmiProviders from "@/contexts/WagmiProvider";

type ProviderType = {
  children: React.ReactNode;
  initialState: State;
};

export default function Providers({
  children,
  initialState,
}: ProviderType): React.ReactElement {
  return (
    <UiProvider>
      <WagmiProviders initialState={initialState}>
        <QueryClientProviders>
          <BlastThemeProvider cookies={"blastTheme"}>
            {children}
          </BlastThemeProvider>
        </QueryClientProviders>
      </WagmiProviders>
    </UiProvider>
  );
}
