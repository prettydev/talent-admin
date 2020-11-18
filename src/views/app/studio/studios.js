import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { ReactTableWithPaginationCard } from './components/TableStudios';
import { useGetStudiosQuery } from '../../../generated/types-and-hooks';

const Studios = ({ match }) => {
  const { data, error, loading } = useGetStudiosQuery();
  if (loading) return <div>Loading ...</div>;
  if (error) return <div>error ...</div>;

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.studios" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <ReactTableWithPaginationCard studios={data.studios} />
        </Colxx>
      </Row>
    </>
  );
};

export default Studios;
