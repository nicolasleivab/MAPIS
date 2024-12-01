import React, { useEffect } from 'react';
import { Box, Flex } from '@mantine/core';
import { CustomTable } from '../../../presentation/components';
import * as styles from './Dashboard.module.css';
import {
  selectProjects,
  useIntlContext,
  selectColumns,
  selectProjectsError,
  selectProjectsLoading,
  fetchProjectsAsync,
} from '../../../model';
import { useDispatch, useSelector } from 'react-redux';

export default function Operations() {
  const { intl } = useIntlContext();
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const columns = useSelector(selectColumns);
  const isLoading = useSelector(selectProjectsLoading);
  const error = useSelector(selectProjectsError);

  useEffect(() => {
    dispatch(fetchProjectsAsync());
  }, [dispatch]);

  if (isLoading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  const formattedData = projects.map((item) => {
    return {
      ...item,
      deadline: intl.formatDate(new Date(item.deadline)), // Formatting the deadline date
    };
  });

  return (
    <div className={styles.Dashboard}>
      <Flex>
        <Box w={'50%'}>
          <CustomTable columns={columns} data={formattedData} />
        </Box>
      </Flex>
    </div>
  );
}
