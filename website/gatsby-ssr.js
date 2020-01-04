/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
     <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"/>
  ]);
}