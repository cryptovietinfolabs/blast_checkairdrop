import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";

import Title from "@/components/Title";

interface EligibleCardProps {
  isHoldNFTQualified: boolean;
  isHoldPepeQualified: boolean;
  isDepositBlastQualified: boolean;
  collections: string[];
}

export default function EligibleCard({
  isHoldNFTQualified,
  isHoldPepeQualified,
  isDepositBlastQualified,
  collections,
}: EligibleCardProps): React.ReactElement {
  return (
    <Card>
      <CardHeader>
        <Box textAlign="center">
          <Title color="brand.yellow.100" size="md">
            You&apos;re Eligible
          </Title>
        </Box>
      </CardHeader>
      <CardBody>
        <Stack alignItems="center" justifyContent="space-between">
          <List>
            {isHoldNFTQualified && (
              <ListItem>
                <HStack>
                  <ListIcon as={Image} src={"/icons/check.svg"} />

                  <Stack>
                    <Text
                      fontSize="2xl"
                      display="flex"
                      alignItems="center"
                      color="#41C365"
                    >
                      NFT Holder: {collections.join(", ")}
                    </Text>
                  </Stack>
                </HStack>
              </ListItem>
            )}
            {isHoldPepeQualified && (
              <ListItem>
                <HStack>
                  <ListIcon as={Image} src={"/icons/check.svg"} />

                  <Text
                    fontSize="2xl"
                    display="flex"
                    alignItems="center"
                    color="#41C365"
                  >
                    Top 30% Pepe Holders
                  </Text>
                </HStack>
              </ListItem>
            )}
            {isDepositBlastQualified && (
              <ListItem>
                <HStack>
                  <ListIcon as={Image} src={"/icons/check.svg"} />

                  <Text
                    fontSize="2xl"
                    display="flex"
                    alignItems="center"
                    color="#41C365"
                  >
                    Staked 0.01+ $ETH on Blast
                  </Text>
                </HStack>
              </ListItem>
            )}
          </List>
        </Stack>
      </CardBody>
    </Card>
  );
}
