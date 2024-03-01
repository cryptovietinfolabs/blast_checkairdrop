import {
  Card,
  CardBody,
  CardHeader,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import Title from "@/components/Title";

export default function Requirements(): React.ReactElement {
  return (
    <Card>
      <CardHeader>
        <Title color="brand.yellow.200" size="md">
          Blast Membership Requirements:
        </Title>
      </CardHeader>
      <CardBody>
        <Stack gap={6}>
          <Text color="brand.camo.200" fontSize="xl">
            You only need to satisfy one of three conditions to receive the
            airdrop
          </Text>
          <UnorderedList>
            <ListItem>
              <Text fontSize="2xl" color="brand.yellow.100">
                Holder 1+ NFT collections: Milady, Pugdy, Lid Pudgy, Azuki, Yuga
                Labs
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="2xl" color="brand.yellow.100">
                Top 10% Pepe Holders
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="2xl" color="brand.yellow.100">
                Staked 0.01+ $ETH on Blast
              </Text>
            </ListItem>
          </UnorderedList>
        </Stack>
      </CardBody>
    </Card>
  );
}
