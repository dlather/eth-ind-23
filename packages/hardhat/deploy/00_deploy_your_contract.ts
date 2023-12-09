import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
// import { Contract } from "ethers";
// Networks: https://github.com/UMAprotocol/protocol/tree/ae65deda00cbfbe466fe666c93ac236e8a552ee7/packages/core/networks
const goerliFinderAddress = "0xE60dBa66B85E10E7Fd18a67a6859E241A243950e"; // Verified
const polygonMumbaiAddress = "0xb22033fF04AD01fbE8d78ef4622a20626834271B"; // Verified
// const goerliOOV3 = "0x9923D42eF695B5dd9911D05Ac944d4cAca3c4EAB";

const baseGoerliFinderAddress = "0x2BC84A3777469f67e040DAb9d00512a5D5258f39";

// PROD
const polygonMainnetAddress = "0x09aea4b2242abC8bb4BB78D537A67a245A7bEC64"; // Verified
/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 *
 *
 */

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const selectedChainId = await hre.getChainId();
  const oov3FinderAddress =
    selectedChainId === "5" || selectedChainId === "31337"
      ? goerliFinderAddress
      : selectedChainId === "137"
      ? polygonMainnetAddress
      : selectedChainId == "84531"
      ? baseGoerliFinderAddress
      : polygonMumbaiAddress;

  await deploy("YourContract", {
    from: deployer,
    args: [deployer],
    log: true,
    autoMine: true,
  });

  await deploy("Locator", {
    from: deployer,
    log: true,
    autoMine: true,
  });
  const locator = await hre.ethers.getContract("Locator", deployer);

  await deploy("Registry", {
    from: deployer,
    log: true,
    autoMine: true,
  });
  const registry = await hre.ethers.getContract("Registry", deployer);

  await deploy("Provider", {
    from: deployer,
    args: [oov3FinderAddress, locator.address],
    log: true,
    autoMine: true,
  });
  const provider = await hre.ethers.getContract("Provider", deployer);

  await deploy("OptionsProviderTemplate", {
    from: deployer,
    args: [locator.address],
    log: true,
    autoMine: true,
  });
  const optionsProviderTemplate = await hre.ethers.getContract("OptionsProviderTemplate", deployer);

  await deploy("YesNoProviderTemplate", {
    from: deployer,
    args: [locator.address],
    log: true,
    autoMine: true,
  });
  const yesNoProviderTemplate = await hre.ethers.getContract("YesNoProviderTemplate", deployer);

  await deploy("BaseOptionsContest", {
    from: deployer,
    // Contract constructor arguments
    args: [],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });
  const baseOptionsContest = await hre.ethers.getContract("BaseOptionsContest", deployer);
  await deploy("OptionsContestFactory", {
    from: deployer,
    // Contract constructor arguments
    args: [locator.address, baseOptionsContest.address],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });
  const optionsContestFactory = await hre.ethers.getContract("OptionsContestFactory", deployer);

  await deploy("YesNoContestFactory", {
    from: deployer,
    // Contract constructor arguments
    args: [locator.address, baseOptionsContest.address],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });
  const yesNoContestFactory = await hre.ethers.getContract("YesNoContestFactory", deployer);

  await deploy("Operators", {
    from: deployer,
    // Contract constructor arguments
    args: [],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });
  const operators = await hre.ethers.getContract("Operators", deployer);

  // await locator.changeAddress("CONTRACT", "Provider", provider.address);
  await locator.changeAddress("TEMPLATE", "OPTIONS_PROVIDER_TEMPLATE", optionsProviderTemplate.address);
  await locator.changeAddress("TEMPLATE", "YES_NO_PROVIDER_TEMPLATE", yesNoProviderTemplate.address);
  await locator.changeAddress("CONTRACT", "Registry", registry.address);
  await locator.changeAddress("CONTRACT", "Provider", provider.address);
  await locator.changeAddress("CONTRACT", "Operators", operators.address);
  await locator.changeAddress("FACTORY", "YES_NO_PROVIDER_TEMPLATE", yesNoContestFactory.address);
  await locator.changeAddress("FACTORY", "OPTIONS_PROVIDER_TEMPLATE", optionsContestFactory.address);
  // Will be used to query contests against a template
  // await registry.setConfig("MY_CONTESTS", "OptionsWithGroup", [optionsWithGroupContest.address]);
  // await addMockProviders(provider, deployer);
};

export default deployYourContract;

// function addMonths(date: Date, months: number) {
//   const d = date.getDate();
//   date.setMonth(date.getMonth() + +months);
//   if (date.getDate() != d) {
//     date.setDate(0);
//   }
//   return Math.floor(date.getTime() / 1000);
// }

// async function addMockProviders(provider: Contract, deployer: string) {
// const mockGoerliProviderData = {
//   "_name": "Will India win 2023 Cricket World Cup ?",
//   "_description": "Will India win the 2023 Cricket world cupt held in India, the final of which is gonna be played on 19th November,2023. If India wins, the market resolves to Yes, in all other cases to No. Source to be used: https://www.cricbuzz.com/",
//   "_fee": {
//     "fee": 2,
//     "decimals": 100
//   },
//   "_endTimeStamp": 1700530194,
//   "_bond": 0,
//   "_currency": "0xBa950974AFdae520cEE596c98295150Cf8D9659c",
//   "_providerAddress": "0x7F063438C5f3b7d90e4C48477618A927373b7c49",
//   "_assertiionLiveness": 1200,
//   "_template": "OPTIONS_WITH_GROUP",
//   "_templateData": ""
// }
// await provider.addProvider(
//   `name-1`,
//   `desc-1`,
//   { fee: 5, decimals: 100 },
//   addMonths(new Date(), 1).toString(),
//   0,
//   "0xBa950974AFdae520cEE596c98295150Cf8D9659c",
//   deployer,
//   1200,
//   "OPTIONS_WITH_GROUP",
// );
// await provider.addProvider(
//   `name-2`,
//   `desc-2`,
//   { fee: 10, decimals: 100 },
//   addMonths(new Date(), 2).toString(),
//   0,
//   "0xBa950974AFdae520cEE596c98295150Cf8D9659c",
//   deployer,
//   86400,
//   "OPTIONS_WITH_GROUP",
// );
// }

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["YourContract"];
