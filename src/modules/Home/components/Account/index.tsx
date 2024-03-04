"use client";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useToken,
  VStack,
} from "@chakra-ui/react";
import { useCopyToClipboard } from "@Hooks/common/useCopyToClipboard";
import { useEffect, useState } from "react";
import { useAccount, useBalance, useDisconnect } from "wagmi";

import SvgInsert from "@/components/SvgInsert";
import { truncateAddress } from "@/utils/truncateAddress";

import s from "./style.module.scss";

export function Account(): React.ReactElement {
  const [_, copy] = useCopyToClipboard();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const balance = useBalance({ address });
  const [truncatedAddress, setTruncatedAddress] = useState<string>("");
  const [brandCamo300] = useToken("colors", ["brand.camo.300"]);

  useEffect(() => {
    if (!address) return;
    setTruncatedAddress(truncateAddress(address));
  }, [address]);

  const handleCopy = (text: string) => () => {
    copy(text);
  };

  return (
    <Popover trigger="hover" placement="bottom-end">
      <PopoverTrigger>
        <HStack className={s.address}>
          <Box className={s.dot} />
          <Text fontSize="sm" color="brand.yellow.100">
            {truncatedAddress}
          </Text>
          <IconButton
            isRound
            size="sm"
            variant="ghost"
            onClick={handleCopy(address as string)}
            aria-label="Copy address"
            icon={<SvgInsert src="/icons/copy.svg" className={s.icon} />}
          />
        </HStack>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <VStack>
            <Text color="brand.yellow.200">
              {Number(balance.data?.formatted).toFixed(6)} (ETH)
            </Text>

            <Button
              width="full"
              justifyContent="space-between"
              variant="ghost"
              rightIcon={
                <SvgInsert src="/icons/log-out.svg" fill={brandCamo300} />
              }
              onClick={() => disconnect()}
            >
              Disconnect
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
