import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { blastSepolia, mainnet, sepolia } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

const projectId =
  process.env.NEXT_PUBLIC_PID || "2d946c74c39f06b482e6a8d71875a209";

export const config = createConfig({
  chains: [mainnet, sepolia, blastSepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  connectors: [walletConnect({ projectId })],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [blastSepolia.id]: http(),
  },
});
