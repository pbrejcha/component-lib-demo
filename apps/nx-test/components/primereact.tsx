import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Menu } from 'primereact/menu';
import { useRef } from 'react';
import { Button } from 'primereact/button';
import styled from 'styled-components';

const StyledMenu = styled(Menu)``;
export const PrimeReactUI = ({ products }: { products: any[] }) => {
  const menu = useRef(null);
  const onClick = () => alert('clicked');

  // This kind of sucks
  const items = [
    {
      label: 'Actions',
      items: [
        {
          label: 'Action 1',
          command: onClick,
        },
        {
          label: 'Action 2',
          command: onClick,
        },
      ],
    },
  ];

  return (
    <div style={{ gridArea: 'prime' }}>
      <div className="container">
        <div className="content">
          <h3>Prime React</h3>
          <a
            href="https://www.primefaces.org/primereact/setup/"
            target="_blank"
          >
            Click for docs
          </a>
        </div>
        <div className="content">
          <DataTable value={products} responsiveLayout="scroll">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
          </DataTable>
        </div>
        <div className="content">
          <Menu model={items} popup ref={menu} id="popup_menu" />
          <Button
            label="This stupid thing won't open"
            icon="pi pi-bars"
            onClick={(event) => menu.current.toggle(event)}
            aria-controls="popup_menu"
            aria-haspopup
          />
        </div>
      </div>
    </div>
  );
};
