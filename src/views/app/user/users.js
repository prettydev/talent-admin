import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { ReactTableWithPaginationCard } from './components/TableUsers';
import { useGetAllUserQuery } from '../../../generated/types-and-hooks';

const BlankPage = ({ match }) => {
  const { data, error, loading } = useGetAllUserQuery();
  if (loading) return <div>Loading ...</div>;
  if (error) return <div>error ...</div>;

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.users" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <ReactTableWithPaginationCard users={data.users} />
        </Colxx>
      </Row>
    </>
  );
};

export default BlankPage;
