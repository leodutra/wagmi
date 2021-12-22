import * as React from 'react'
import { Contract, ContractInterface, Signer } from 'ethers'
import { Provider } from '@ethersproject/providers'

type Config = {
  addressOrName: string
  contractInterface: ContractInterface
  signerOrProvider?: Signer | Provider
}

export const useContract = <T = any>({
  addressOrName,
  contractInterface,
  signerOrProvider,
}: Config) => {
  const contract = React.useMemo(() => {
    return <T>(
      (<unknown>(
        new Contract(addressOrName, contractInterface, signerOrProvider)
      ))
    )
  }, [addressOrName, contractInterface, signerOrProvider])

  return { contract }
}