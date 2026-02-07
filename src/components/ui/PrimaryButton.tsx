import React from "react";
import Link from "next/link";

type PrimaryButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function PrimaryButton({
  children,
  href,
  onClick,
}: PrimaryButtonProps) {
  const className =
    "inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium";

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
