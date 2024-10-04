import React, { ChangeEvent, useState } from 'react';
import { Styled } from '../styles/main';
import { useUsers } from '../service/hooks/useUsers';
import { useSearchParams } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material';
import Search from '../components/main/Search';
import Table from '../components/main/Table';

export default function Main() {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || 1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading, isError } = useUsers({ page, limit });

  const handlePageChange = (page: number) => {
    setPage(page);
    setSearchParams(`page=${page.toString()}`);
  };

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleChangeLimit = (e: SelectChangeEvent<unknown>) => {
    const { value } = e.target;
    setLimit(parseInt(value as string));
  };

  return (
    <Styled.Container>
      <Search
        searchValue={searchValue}
        handleChangeSearchValue={handleChangeSearchValue}
      />
      <Table
        rows={data?.data?.data}
        totalPage={data?.totalPages}
        page={parseInt(page as string)}
        handlePageChange={handlePageChange}
        limit={limit}
        handleChangeLimit={handleChangeLimit}
      />
    </Styled.Container>
  );
}
