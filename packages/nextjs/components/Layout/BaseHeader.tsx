import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { WhatsappIcon, WhatsappShareButton } from "next-share";
import { useAccount } from "wagmi";
import { DevicePhoneMobileIcon, ListBulletIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const BaseHeader = ({ children }: { children: ReactNode }) => {
  const { address, isConnected } = useAccount();
  const [open, setopen] = useState(false);
  return (
    <div className="bg-white w-full md:max-w-lg mx-auto">
      <div className="drawer">
        <input
          id="my-drawer-3"
          type="checkbox"
          checked={open}
          onChange={() => setopen(true)}
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-white-500">
            <div className="flex-1">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
                onClick={() => setopen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="flex-none lg:px-2 mx-2">
              <RainbowKitCustomConnectButton />
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full flex flex items-start justify-start  bg-base-200">
            {/* Sidebar content here */}
            <button className="btn btn-ghost self-end" onClick={() => setopen(false)}>
              Close
            </button>
            <li>
              <FaucetButton />
            </li>
            <Link href={"/providers"} passHref className="text-secondary">
              <button className="btn btn-ghost" onClick={() => setopen(false)}>
                <ListBulletIcon className="h-6 w-6" /> All Providers
              </button>
            </Link>
            <Link href={"/providers/add-provider"} passHref className="text-secondary ">
              <button className="btn btn-ghost" onClick={() => setopen(false)}>
                <PlusIcon className="h-6 w-6" /> Add provider
              </button>
            </Link>
            {isConnected ? (
              <Link href={`/play?operatorAddress=${address}`} passHref className="text-secondary ">
                <button className="btn btn-ghost" onClick={() => setopen(false)}>
                  <DevicePhoneMobileIcon className="h-6 w-6" /> My Contests
                </button>
              </Link>
            ) : null}
            {isConnected ? (
              <button className="btn btn-ghost mx-2">
                <WhatsappShareButton
                  url={`bet11.eth/play?operatorAddress=${address}`}
                  title={"Play and Earn on FairPlay"}
                  separator=":: "
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                Share
              </button>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BaseHeader;
