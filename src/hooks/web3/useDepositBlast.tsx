import { useEffect, useState } from "react";
import { erc721Abi } from "viem";
import { useReadContract } from "wagmi";

const useDepositBlast = (owner: `0x${string}`): boolean => {
  const [isQualified, setIsQualified] = useState<boolean>(false);

  const { data } = useReadContract({
    abi: erc721Abi,
    address: "0x5F6AE08B8AeB7078cf2F96AFb089D7c9f51DA47d",
    functionName: "balanceOf",
    args: [owner],
  });

  useEffect(() => {
    if (!data) return;
    if (Number(data) > Number(100000000000000000))
      setIsQualified(true);
  }, [data, owner]);

  return isQualified;
};

export default useDepositBlast;
