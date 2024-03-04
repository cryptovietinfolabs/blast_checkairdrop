import { useEffect, useState } from "react";
import { erc721Abi } from "viem";
import { useReadContracts } from "wagmi";

const useHoldNFT = (owner: `0x${string}`): boolean => {
  const [isQualified, setIsQualified] = useState<boolean>(false);

  const { data } = useReadContracts({
    contracts: [
      {
        abi: erc721Abi,
        address: "0xed5af388653567af2f388e6224dc7c4b3241c544",
        functionName: "balanceOf",
        args: [owner],
      },
      {
        abi: erc721Abi,
        address: "0x524cab2ec69124574082676e6f654a18df49a048",
        functionName: "balanceOf",
        args: [owner],
      },
      {
        abi: erc721Abi,
        address: "0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
        functionName: "balanceOf",
        args: [owner],
      },
      {
        abi: erc721Abi,
        address: "0x5af0d9827e0c53e4799bb226655a1de152a425a5",
        functionName: "balanceOf",
        args: [owner],
      },
      {
        abi: erc721Abi,
        address: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
        functionName: "balanceOf",
        args: [owner],
      },
      {
        abi: erc721Abi,
        address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
        functionName: "balanceOf",
        args: [owner],
      },
    ],
  });

  useEffect(() => {
    if (!data) return;
    data.some((d) => {
      if (Number(d.result) > 0) setIsQualified(true);
    });
  }, [data, owner]);

  return isQualified;
};

export default useHoldNFT;
