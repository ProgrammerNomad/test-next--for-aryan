import Link from "next/link";

import { useTheme } from "next-themes";

import React, { useRef, useState } from "react";

const Header = ({ HeaderType }) => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <header>This is header</header>
    </>
  );
};
export default Header;
