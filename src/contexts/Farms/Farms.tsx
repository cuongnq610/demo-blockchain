import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useSushi from '../../hooks/useSushi'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned, getTestMasterChefContract } from '../../sushi/utils'
import { getFarms } from '../../sushi/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const sushi = useSushi()
  const { account } = useWallet()

  const farms = getFarms(sushi)

  const testMasterChefContract = getTestMasterChefContract(sushi);
  console.log({testMasterChefContract, testMethod: testMasterChefContract?.methods?.poolLength().call()})

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
