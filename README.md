# Next Steps

- Integrate Polygon ID for compliance, giving users tag (CNN)
- Create Spaces when data is asserted using Push Protocol
- Verified News App

---

# Polygon Mainnet Deployments

- "Locator" at 0x74e9e01C5D4cca57F84231a22f3fEC800341234a -- VERIFIED
- "Registry" at 0x8c2D7B25c9fF05b6a005319095DA468930377D28 -- VERIFIED
- "Provider" at 0xC1998894C5A8F4d6D4153E4CE1a7635475388905 -- VERIFIED
- "OptionsProviderTemplate" at 0x9cB66b42285E6bD33755780A4cE9673647b5F3ce -- VERIFIED
- "YesNoProviderTemplate" at 0x797aedcaD1FeFfcdf1653461Ca5e44C1deB1273c -- VERIFIED
- "BaseOptionsContest" at 0xb69F802d61cE484c9FC3B42e9e91D33956fD052c -- VERIFIED
- "OptionsContestFactory" at 0x1a7E54f930a0B94c5f5b7D31A2004d41173d0068 -- VERIFIED
- "YesNoContestFactory" at 0x7911b9B61894A4035Af7A3DE3cDC04398A9b8f3b -- VERIFIED
- "Operators" at 0x93EBa28e468d126A437f8833916fBb003730B9aa -- VERIFIED

UMA doesn't have availablity on Polygon ZkEvm, hence deployed to polygon mainnet.
https://docs.uma.xyz/resources/network-addresses

---

# Base Goerli Deployments

- "Locator" at 0xd3754DA3b9D2282a7850859D8413A8D91cd22b90 -- VERIFIED
- "Registry" at 0x19106190C3b46Efd30eEbC23dBEAdd1707af6ad3 -- VERIFIED
- "Provider" at 0x74e9e01C5D4cca57F84231a22f3fEC800341234a -- VERIFIED
- "OptionsProviderTemplate" at 0x8c2D7B25c9fF05b6a005319095DA468930377D28 -- VERIFIED
- "YesNoProviderTemplate" at 0xf608aD675AC542968435e1C500A768FcEE9874AD -- VERIFIED
- "BaseOptionsContest" at 0xfD324146dA4724cDB6d6A5B7934CA2915c3a85e6 -- VERIFIED
- "OptionsContestFactory" at 0x77EDBa34d4F5355Af6060D6E6cE6b2a41114f5Fe -- VERIFIED
- "YesNoContestFactory" at 0x2Db13ec5DF9582c13Cba97935A45676Ca2a78E1E -- VERIFIED
- "Operators" at 0x93EBa28e468d126A437f8833916fBb003730B9aa -- VERIFIED

Example: https://goerli.basescan.org/address/0x77EDBa34d4F5355Af6060D6E6cE6b2a41114f5Fe#code

---

# Alfajores Deployments

- "Locator" at 0xd3754DA3b9D2282a7850859D8413A8D91cd22b90 -- VERIFIED
- "Registry" at 0x19106190C3b46Efd30eEbC23dBEAdd1707af6ad3 -- VERIFIED
  LIMITATIONS DUE TO UMA DEPENDENCY

Example: https://alfajores.celoscan.io/address/0xd3754DA3b9D2282a7850859D8413A8D91cd22b90#code

---

# Scroll Sepolia Deployments

- "YourContract" at 0x140AD180FdCE87ab9610B3Bb6c2C28A5e9EBD08B -- VERIFIED
- "Locator" at 0xd3754DA3b9D2282a7850859D8413A8D91cd22b90 -- VERIFIED
- "Registry" at 0x19106190C3b46Efd30eEbC23dBEAdd1707af6ad3 -- VERIFIED
  LIMITATIONS DUE TO UMA DEPENDENCY

Example: https://sepolia-blockscout.scroll.io/address/0x19106190C3b46Efd30eEbC23dBEAdd1707af6ad3

---

# Arbitium Goerli Deployments

- "YourContract" at 0x140AD180FdCE87ab9610B3Bb6c2C28A5e9EBD08B -- VERIFIED
- "Locator" at 0xd3754DA3b9D2282a7850859D8413A8D91cd22b90 -- VERIFIED
- "Registry" at 0x19106190C3b46Efd30eEbC23dBEAdd1707af6ad3 -- VERIFIED
  LIMITATIONS DUE TO UMA DEPENDENCY

  Example: https://goerli.arbiscan.io/address/0x19106190C3b46Efd30eEbC23dBEAdd1707af6ad3#code

---

# Goerli Deployments

"YourContract" at 0x06EE5fA5E0E562Da3eF82472a7124a769EdccC16 -- VERIFIED
"Locator" at 0x75c5Ed1F90bCabD91e4C085Bcb1290d049a69242 -- VERIFIED --
"Registry" at 0x7D4840fcF7Fc621a380BbDd440215f214D28537d -- VERIFIED
"Provider" at 0xFD8E0bF9031b95Eb63dC49E4A9317E129390C733 -- VERIFIED --
"OptionsProviderTemplate" at 0xaB7717AB6DB02b37cE9331104b506B67f34346a0 -- VERIFIED
"YesNoProviderTemplate" at 0xF8CD697bfAfb17Bd8EA8d6070486fb85fa2945F5 -- VERIFIED
"BaseOptionsContest" at 0x22b858d2154f0F9e886A38287Cfd27EF199ED1b1 -- VERIFIED --
"OptionsContestFactory" at 0x4EC8f952B143c221BE6c1a62DE30f88C630180d8 -- VERIFIED
"YesNoContestFactory" at 0x1E165f544E627F5Dd975eD749f13950EC331fCd6 -- VERIFIED --
"Operators" at 0xc847bC2eCc7591BAeDE5B3f99E44a7261cD2496c -- VERIFIED --

UMA doesn't have availablity on base mainnet, hence deployed to base goerli.
https://docs.uma.xyz/resources/network-addresses

---

# The Graph

- Deployed to https://api.studio.thegraph.com/query/52089/eth-ind-goerli/"v0.0.2"

---

### Debug Tips

- Testnet UMA Oracle https://testnet.oracle.umaproject.org/
- How to Verify: npx hardhat verify --network goerli 0xc847bC2eCc7591BAeDE5B3f99E44a7261cD2496c --constructor-args providerConstructor.js
- graph add 0xc847bC2eCc7591BAeDE5B3f99E44a7261cD2496c --contract-name Operators
