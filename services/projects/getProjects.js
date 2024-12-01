// getProjects fetches all projects from the database
import axios from 'axios';
import { DEMO_COLUMNS, DEMO_PROJECTS } from './demoData';

export async function getProjects() {
  try {
    // Attach token

    return { data: DEMO_PROJECTS, columns: DEMO_COLUMNS };
  } catch (error) {
    return error.response.data;
  }
}
