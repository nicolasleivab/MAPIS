export const DEMO_USERS = [
  {
    id: '2',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Collaborator',
    created_at: '2023-10-02T13:00:00Z',
    updated_at: '2023-10-02T13:00:00Z',
    view_ids: ['1'],
    projects: [{ id: '1', name: 'Project Alpha' }],
  },
  {
    id: '3',
    name: 'Alice Smith',
    email: '',
    role: 'Admin',
    created_at: '2023-10-02T13:00:00Z',
    updated_at: '2023-10-02T13:00:00Z',
    view_ids: ['1', '2'],
    projects: [{ id: '1', name: 'Project Beta' }],
  },
];
