import Title from "@/components/Title";
import s from "./style.module.scss";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { evening } from "@/constants/fonts";
import { useDisconnect } from "wagmi";

interface NotifModalProps {
  status: "success" | "failed";
}

export default function NotifModal({
  status,
}: NotifModalProps): React.ReactElement {
  const { disconnect } = useDisconnect();

  return (
    <>
      <Card className={s.notif}>
        <CardHeader>
          <Box textAlign="center">
            <Title color="brand.yellow.200" size="md">
              {`${status === "success" ? "#Bleble Congratulation!" : "Sorry"}`}
            </Title>
          </Box>
        </CardHeader>
        <CardBody>
          <Stack spacing={6}>
            <Text color="brand.yellow.100" fontSize="xl" textAlign="center">
              {`${status === "success" ? "REACHED the Blast membership!" : "You are not on the Holders list"}`}
            </Text>
            <Box className={s.notif_img}>
              {status === "success" ? (
                <Image src="/bleble-face.png" alt="happy ble ble" fill />
              ) : (
                <Image src="/bleble-sad.png" alt="sad ble ble" fill />
              )}
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Flex alignSelf="center">
        {status === "success" ? (
          <Button width="fit-content" isDisabled>
            <Text className={evening.className} fontSize="2xl">
              Claim your airdrop: coming soon
            </Text>
          </Button>
        ) : (
          <Button
            width="fit-content"
            onClick={() => {
              disconnect();
            }}
          >
            <Text className={evening.className} fontSize="2xl">
              Back to home
            </Text>
          </Button>
        )}
      </Flex>
    </>
  );
}
