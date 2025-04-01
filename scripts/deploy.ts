import {
  Contract,
  ContractFactory
} from "ethers"
import { ethers } from "hardhat"
import { VToken } from "../typechain-types"

const main = async(): Promise<any> => {
  const VToken: ContractFactory = await ethers.getContractFactory("VToken")
  const VToken: Contract = await VToken.deploy() as Contract

  const address =  await VToken.getAddress()
  console.log(`VToken deployed to: ${address}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error)
      process.exit(1)
    })