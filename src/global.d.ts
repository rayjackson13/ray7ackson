declare module '*.jpg';
declare module '*.jpeg';

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
