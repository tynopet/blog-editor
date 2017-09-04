// minimal server impolementation. Replace to api.
export const add = () =>
  Promise.resolve()
    .then(() => {
      const pages = JSON.parse(localStorage.getItem('pages')) || [];
      const page = {
        id: pages.length ? pages[pages.length - 1].id + 1 : 0,
        title: 'Новая страница',
        blocks: [],
      };
      localStorage.setItem('pages', JSON.stringify([...pages, page]));
      return page;
    });

export const get = () =>
  Promise.resolve()
    .then(() => JSON.parse(localStorage.getItem('pages')) || []);

export const save = page =>
  Promise.resolve()
    .then(() => {
      const pages = JSON.parse(localStorage.getItem('pages')) || [];
      const updatedPages = pages.map(oldPage => (page.id === oldPage.id ? page : oldPage));
      localStorage.setItem('pages', JSON.stringify(updatedPages));
      return true;
    });

export const remove = id =>
  Promise.resolve()
    .then(() => {
      const pages = JSON.parse(localStorage.getItem('pages')) || [];
      localStorage.setItem('pages', JSON.stringify(pages.filter(page =>
        page.id !== id)));
      return true;
    });
