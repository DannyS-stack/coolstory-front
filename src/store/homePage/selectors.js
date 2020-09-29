export const selectHomePageLoading = (state) => state.homepage.loading;

export const selectHomepages = (state) => state.homepage.pages;

export const selectHomePage = (homepageid) => (state) =>
  state.homepage.pages.find((p) => p.id === parseInt(homepageid));

// export const sortedStories = (homepageid) => (state) => {
//   const specificHomePage = state.homepage.pages.find(
//     (p) => p.id === parseInt(homepageid)
//   );

//   const sortedStories = specificHomePage.stories.sort(function (a, b) {
//     return a - b;
//   });
//   return sortedStories
// }
