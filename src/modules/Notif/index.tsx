"use client";

import { Box } from "@chakra-ui/react";
import { useAccount } from "wagmi";

import NotifModal from "./components/NotifModal";
import s from "./style.module.scss";

export default function NotifPage(): React.ReactElement {
  const { isConnected } = useAccount();

  return (
    <Box className={s.notif}>
      {isConnected && <NotifModal status="failed" />}
    </Box>
  );
}
