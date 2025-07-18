import { defineConfig } from "vocs";

export default defineConfig({
  title: "Ethereum Wallets",
  titleTemplate: "%s · Ethereum Wallets",
  description: "Ethereum wallet documentation",
  ogImageUrl: "https://vocs.dev/api/og?title=%title&description=%description",
  head() {
    return (
      <>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };",
          }}
        />
        <script defer src="/_vercel/insights/script.js" />
      </>
    );
  },
  sidebar: [
    {
      text: "Introduction",
      link: "/introduction",
    },
    {
      text: "Reference",
      collapsed: false,
      items: [
        {
          text: "Authenticate Users",
          items: [
            {
              text: "eth_requestAccounts",
              link: "/reference/authentication/eth_requestAccounts",
            },
            {
              text: "wallet_getCapabilities",
              link: "/reference/authentication/wallet_getCapabilities",
            },
            {
              text: "Experimental",
              items: [
                {
                  text: "wallet_grantPermissions",
                  link: "/reference/authentication/wallet_grantPermissions",
                },
                {
                  text: "wallet_connect",
                  link: "/reference/authentication/wallet_connect",
                },
              ],
            },
          ],
        },
        {
          text: "Send Transactions",
          items: [
            {
              text: "wallet_sendCalls",
              link: "/reference/sendTransactions/wallet_sendCalls",
            },
            {
              text: "wallet_getCallsStatus",
              link: "/reference/sendTransactions/wallet_getCallsStatus",
            },
            {
              text: "wallet_showCallsStatus",
              link: "/reference/sendTransactions/wallet_showCallsStatus",
            },
            {
              text: "Capabilities",
              collapsed: true,
              items: [
                {
                  text: "Paymaster Service",
                  link: "/reference/sendTransactions/capabilities/paymaster-service",
                },
              ],
            },
            {
              text: "eth_sendTransaction",
              link: "/reference/sendTransactions/eth_sendTransaction",
            },
          ],
        },
        {
          text: "Sign Messages",
          items: [
            {
              text: "personal_sign",
              link: "/reference/signMessages/personal_sign",
            },
            {
              text: "eth_signTypedData_v4",
              link: "/reference/signMessages/eth_signTypedData_v4",
            },
            {
              text: "Experimental",
              items: [
                {
                  text: "wallet_sign",
                  link: "/reference/signMessages/wallet_sign",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
