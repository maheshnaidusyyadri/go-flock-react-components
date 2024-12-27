// src/declaration.d.ts or src/images.d.ts
declare module "*.png" {
  const value: string;
  const src: string;
  export default { value, src };
}

declare module "*.jpg" {
  const value: string;
  const src: string;
  export default { value, src };
}

declare module "*.svg" {
  const value: string;
  const src: string;
  export default { value, src };
}
