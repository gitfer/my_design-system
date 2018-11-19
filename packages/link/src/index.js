import React, { Component } from "react";

export default function Link({ className, children, ...props }) {
  return (
    <a className={className} href="#" {...props}>
      My link advanced {children}
    </a>
  );
}
