# Fish Improvement Proposal Process

A FIP, which stands for [Iron] Fish Improvement Proposal, is a proposal to amend, change, introduce, or upgrade any part of the Iron Fish protocol, consensus, process or ecosystem. Proposals can range from introducing a change to the networking layer to naming convention or even to the Iron Fish governance process itself.

## Contributing

Before writing a FIP, make sure to have first discussed your idea on the [Discourse](https://discourse.ironfish.network/) site for Iron Fish and addressed any open questions. If you feel like you need more feedback, always feel free to advertise your idea on [Discord](https://discord.ironfish.network/).

Once your idea is well formulated, and you’re ready to write an improvement proposal, please first read FIP-0 and use it as a starting point. Once you have your draft, please make a pull request (PR) to this repo.

## FIP Categories

For organization’s sake, FIPs should fall under one of these categories:

- **Core** - This is any proposal to modify the Iron Fish protocol, consensus, or networking layer.
- **Interface** - This is for anything related to how users and other protocols or applications interact with Iron Fish, such as proposing RPC call amendments, APIs, wallet improvements, and so on.
- **Hardfork** - This is for proposals regarding hardforks.
- **Meta** - This category is for proposals around any process (including governance) for Iron Fish.

## FIP Status

The status of your FIP gets tracked once you make a PR. The lifecycle of a FIP is:

- **Idea** - This is when the FIP is still a PR and not merged into the FIP repository
- **Review** - The FIP is merged into the FIP repository, properly formatted, but not yet reviewed. It is marked as ready for Review and a Discord topic thread is provided for discussion.
- **Last Call** - This is the final review for a FIP. This stage lasts around 14 days, after which the FIP moves to Final, Final Not Code Complete (if applicable), or Withdrawn. A FIP can move back to Review stage if significant changes need to be made, it’s active, an the author/community needs more time.
- **Final Not Code Complete** - This only applies to FIPs that require an implementation change. The FIP is finalized, but its implementation is to the core Iron Fish repository has not started or is not merged.
- **Final** - The FIP is implemented and complete.
- **Stagnant** - If a FIP is stagnant with no significant activity for 1 month, it’s marked as Stagnant. It can be resurrected by being moved back to Drafts.
- **Withdrawn** - The state of the FIP when it wasn’t able to move to any Final stage.
- **Living** - For FIPs that describe a process (e.g. how one can apply to be a FIP editor) that can be changed over time.

## FIP Number System

The number of the PR is the number associated with your FIP for naming convention.

## FIP Stewards

Anyone can write a FIP and open up a PR to start the process, but only FIP Stewards have merge permissions to the repository and shepherd the FIP from start to finish. By default, anyone who has merge permissions to the main Iron Fish repository has merge permissions for the FIPs repository as well.

FIP Stewards may also reject or delete a FIP if it is deemed inappropriate. Examples of this are:

- spam / irrelevant / lacks good intentions
- reveals a security flaw (please use the [bug bounty](https://hackerone.com/iron_fish_bbp?type=scope) program)
- impersonates the author of the FIP or is being otherwise blatantly untruthful

Interested in becoming a FIP Steward yourself? Reach out on [Discord](https://discord.ironfish.network/) or stay tuned for an official process on how to become one.

## Build the FIP site locally

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
