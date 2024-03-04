// Define a simple mapping of addresses to collection names
const addressToCollectionMapping: Record<string, string> = {
  "0xed5af388653567af2f388e6224dc7c4b3241c544": "Azuki",
  "0x524cab2ec69124574082676e6f654a18df49a048": "Lil Pudgy",
  "0xbd3531da5cf5857e7cfaa92426877b022e612cf8": "Pudgy",
  "0x5af0d9827e0c53e4799bb226655a1de152a425a5": "Milady",
  "0x60E4d786628Fea6478F785A6d7e704777c86a7c6": "Mutant Ape Yacht",
  "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d": "Bored Ape Yacht",
};

export const collectionMapping = (
  address: string | undefined,
): string | undefined => {
  if (!address) return "";
  const collectionName =
    addressToCollectionMapping[address.toString().toLowerCase()];
  if (!collectionName) return "/";
  return collectionName;
};

export const collectionRevertMapping = (
  collectionName: string | undefined,
): string | undefined => {
  if (!collectionName) return "";

  // Find the address by searching through the mapping
  const address = Object.keys(addressToCollectionMapping).find(
    (key) => addressToCollectionMapping[key] === collectionName,
  );

  return address || "/";
};
