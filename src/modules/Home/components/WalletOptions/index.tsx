"use client";

import { Button, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import * as React from "react";
import { Connector, useAccount, useConnect, useSwitchChain } from "wagmi";

import SvgInsert from "@/components/SvgInsert";

import s from "./style.module.scss";

interface IWalletOptions {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletOptions({
  isOpen,
  onClose,
}: IWalletOptions): React.ReactElement {
  const { connectors, connect } = useConnect();
  const { isConnected } = useAccount();
  const router = useRouter();
  const { switchChain } = useSwitchChain();

  useEffect(() => {
    if (isConnected) router.push("/notif");
  }, [isConnected]);

  const handleConnectWallet = async (connector: Connector): Promise<void> => {
    onClose();
    await connect({ connector });
  };

  const handleSwitchChain = (): void => {
    switchChain({
      chainId: parseInt(process.env.NEXT_PUBLIC_CHAINID as string),
    });
  };

  useEffect(() => {
    if (!isConnected) return;
    handleSwitchChain();
  }, [isConnected]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        {connectors.map((connector) => (
          <WalletOption
            key={connector.uid}
            connector={connector}
            onClick={() => handleConnectWallet(connector)}
          />
        ))}
      </ModalContent>
    </Modal>
  );
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}): React.ReactElement {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    (async (): Promise<void> => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <Button
      variant="ghost"
      justifyContent="flex-start"
      gap={6}
      py={8}
      size="lg"
      disabled={!ready}
      onClick={onClick}
    >
      <SvgInsert
        src={`/branding/${connector.name.toLowerCase()}-icon.svg`}
        className={s.walletIcon}
      />
      {connector.name}
    </Button>
  );
}
