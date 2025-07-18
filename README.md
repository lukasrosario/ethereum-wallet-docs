# Ethereum Wallet Documentation

A unified reference for standard Ethereum wallet JSON-RPC methods, providing developers with consistent documentation for any EIP-compliant wallet integration.

## About

This documentation site consolidates the standard JSON-RPC methods that Ethereum wallets expose through the [EIP-1193](https://eip.tools/eip/1193) provider interface. Rather than hunting through multiple wallet-specific docs, developers can reference a single source of truth for wallet integration.

## Development

This project uses [Vocs](https://vocs.dev) for documentation generation.

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build
```

## Contributing

Contributions are welcome! Please ensure any new method documentation follows the existing structure and includes:

- Clear method descriptions
- Parameter specifications
- Return value examples
- Usage examples
