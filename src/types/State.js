// @flow

export type Block = {
  id: number,
  order: number,
  content: string,
};

export type Page = {
  id: number,
  title: string,
  blocks: Array<Block>,
};

export type Pages = {
  pages: Array<Pages>,
};
