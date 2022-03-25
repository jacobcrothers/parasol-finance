import React, { createContext, useState } from "react";
import { Connection } from "@metaplex/js";
import { PublicKey, clusterApiUrl } from "@solana/web3.js";

interface Context {
  setNfts: (n: any) => void;
  nfts: any;
  metaConnection: any;
}

export const NftContext = createContext<Context>({
  setNfts: () => {},
  nfts: [],
  metaConnection: null,
});

export const NftProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [nfts, setNfts] = useState<any>([]);
  const metaConnection = new Connection(
    clusterApiUrl(process.env.NETWORK as any)
  );

  const setData = (n: any): void => {
    setNfts(n);
  };
  return (
    <NftContext.Provider
      value={{
        setNfts: setData,
        nfts,
        metaConnection,
      }}
    >
      {children}
    </NftContext.Provider>
  );
};
