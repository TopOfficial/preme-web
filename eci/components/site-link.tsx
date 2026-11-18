import type { ComponentProps } from 'react';

// Use native page navigation: the deployed Vinext client router throws after
// preventing the click's default action. Anchors also work without JavaScript.
export default function SiteLink({ children, ...props }: ComponentProps<'a'>) {
  return <a {...props}>{children}</a>;
}
