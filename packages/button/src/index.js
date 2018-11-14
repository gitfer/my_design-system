import React, { Component } from "react";

export default function Button({ className, children, ...props }) {
  return (
    <button className={className} {...props}>
      My button {children}
    </button>
  );
}
