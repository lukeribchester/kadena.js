# React Components

Component library of Kadena.

## Getting started

### Install

The component library is not yet published, to use it in an app outside of this
mono repo you first clone this repo and then reference this library from your
app.

```
git clone git@github.com:kadena-community/kadena.js.git
cd kadena.js
cd libs/react-components
rush install
rushx build
cd ~/your-app-root
```

Then in your package.json add:

```
{
  "dependencies": {
    "@kadena/react-components": "link:../kadena.js/packages/libs/react-components"
  }
}
```

Then in your app init `stitches` with:

```
import {
  getCssText,
  globalCss,
  baseGlobalStyles,
} from "@kadena/react-components";

const globalStyles = globalCss(baseGlobalStyles as Record<string, any>);

globalStyles();

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Running storybook

You can start storybook after installing:

```
rushx storybook
```