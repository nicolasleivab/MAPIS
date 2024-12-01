export const selectProjects = (state) => state.projects.projects;
export const selectColumns = (state) => state.projects.columns;
export const selectProjectById = (state, projectId) =>
  state.projects.projects.find((project) => project.id === projectId);
export const selectProjectsLoading = (state) => state.projects.isLoading;
export const selectProjectsError = (state) => state.projects.error;
