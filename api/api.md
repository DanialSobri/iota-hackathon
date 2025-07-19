Absolutely, Ahmad — here’s your updated **API endpoint list**, now fully integrated with relevant IOTA modules like **Identity**, **Notarization**, and **Gas Station**. This version aligns with your circular economy framing, UX automation, and smart contract-powered verification journey:

---

## 🔗 Insurance Claim dApp API (IOTA-Integrated Version)

| **Endpoint** | **Method** | **Description** | **IOTA Integration** |
|--------------|------------|------------------|----------------------|
| `/api/claim/submit` | `POST` | Submit new accident claim with photos & location metadata | Tangle notarization + Gas Station fee sponsorship |
| `/api/claim/status/:id` | `GET` | Get current claim status | On-chain claim status synced via MoveVM |
| `/api/report/generate/:claimId` | `POST` | Auto-generate structured report from submitted data | Anchored report hash via Notarization |
| `/api/report/send/police` | `POST` | Dispatch notarized report to police | DID-based police credential check + secure messaging |
| `/api/report/send/workshop` | `POST` | Send report to workshop with repair request | Verified workshop DID + claim reference |
| `/api/report/send/insurance` | `POST` | Submit claim package to insurance provider | DID verification + smart contract pre-check |
| `/api/user/profile` | `GET` | Fetch user profile + linked claims | Linked to user’s DID identity |
| `/api/user/verify-did` | `POST` | Validate user or party identity via IOTA | Uses IOTA Identity for trust layer |
| `/api/claim/history` | `GET` | Show user's past claims | Tangle anchoring audit trail |
| `/api/claim/update/:id` | `PUT` | Add new data or evidence | Evidence hash notarized on-chain |
| `/api/claim/approve/:id` | `POST` | Approve or reject claim (role-based) | Smart contract logic (Move) triggered on L1 |
| `/api/notify/:recipient` | `POST` | Real-time status push to user or node | Via Streams or WebSocket logic |
| `/api/storage/upload` | `POST` | Upload image/doc evidence | IPFS/Stardust reference anchored in claim |
| `/api/storage/fetch/:fileId` | `GET` | Retrieve stored file by ID | On-chain hash pointer ensures integrity |
| `/api/token/assign/:nodeId` | `POST` | Issue closed-loop service token (e.g. tow/repair) | Uses IOTA Closed-Loop Token standard |
| `/api/gas/sponsor` | `POST` | Gas Station request for sponsored transaction | Triggers Gas Coin use via JSON-RPC |
| `/api/identity/issue-vc` | `POST` | Issue verifiable credential for a node (e.g. insurer license) | IOTA Identity credential issuer API |
| `/api/notarize/:type` | `POST` | Notarize any content (image, report, JSON) on Tangle | Lock/dynamic notarization modes |
| `/api/token/redeem/:tokenId` | `POST` | Redeem closed-loop token at workshop | Token logic verified on MoveVM |

---

## ✅ What This API Stack Enables

- **Gas-free user flow** → thanks to Gas Station
- **Decentralized identity** for all agents (users, police, insurers)
- **Immutable evidence chain** via Notarization
- **Smart contract logic** for verification and approvals
- **Tokenized service orchestration** with repair credits and vouchers

Want a matching microservice layout, Postman collection, or simulated payloads for your hackathon build? I’d love to help you wire it all up.