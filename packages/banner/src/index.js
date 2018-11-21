import React, { Component } from "react";

export default function Banner({ className, children, ...props }) {
  return (
    <a className={className} href="#" {...props}>
      My Banner {children}
    </a>
  );
}
