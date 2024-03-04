import { useEffect, useState } from "react";
import { erc721Abi } from "viem";
import { useReadContract } from "wagmi";

const useHoldPepe = (owner: `0x${string}`): boolean => {
  const [isQualified, setIsQualified] = useState<boolean>(false);

  const { data } = useReadContract({
    abi: erc721Abi,
    address: "0x6982508145454ce325ddbe47a25d4ec3d2311933",
    functionName: "balanceOf",
    args: [owner],
  });

  useEffect(() => {
    if (!data) return;
    if (Number(data) > Number(5000000000000000000000000000))
      setIsQualified(true);
  }, [data, owner]);

  return isQualified;
};

export default useHoldPepe;
