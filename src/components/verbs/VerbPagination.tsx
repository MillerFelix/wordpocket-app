import React from 'react';
import { Pagination } from '../shared/Pagination';


export interface VerbPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
}

export const VerbPagination: React.FC<VerbPaginationProps> = (props) => {
  return (
    <Pagination
      {...props}
      itemLabel="verbos"
      ariaLabel="Paginação de verbos irregulares"
      accentColor="blue"
    />
  );
};

