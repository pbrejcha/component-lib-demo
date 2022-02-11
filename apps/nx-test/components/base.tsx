import { Table } from 'baseui/table-semantic';
import { StatefulMenu } from 'baseui/menu';
import { StatefulPopover } from 'baseui/popover';
import { Button } from 'baseui/button';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from 'baseui/modal';
import { KIND as ButtonKind } from 'baseui/button';
import { useState } from 'react';

const COLUMNS = ['Name', 'Age', 'Address'];
const DATA = [
  ['Sarah Brown', 31, '100 Broadway St., New York City, New York'],
  ['Jane Smith', 32, '100 Market St., San Francisco, California'],
  ['Joe Black', 33, '100 Macquarie St., Sydney, Australia'],
];

const Menu = (
  <StatefulMenu
    items={[
      { label: 'Item One' },
      { label: 'Item Two' },
      { label: 'Item Three' },
      { label: 'Item Four' },
    ]}
  />
);

const ModalImpl = ({ isOpen, onClose }: { isOpen: boolean; onClose: any }) => {
  return (
    <Modal
      onClose={onClose}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
    >
      <ModalHeader>Hello world</ModalHeader>
      <ModalBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
        faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
      </ModalBody>
      <ModalFooter>
        <ModalButton kind={ButtonKind.tertiary}>Cancel</ModalButton>
        <ModalButton>Okay</ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export const Base = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ gridArea: 'base' }}>
      <div className="container">
        <div className="content">
          <h3>Base Web</h3>
          <a href="https://baseweb.design/" target="_blank">
            {' '}
            Click for docs
          </a>
        </div>
        <div className="content">
          <Table columns={COLUMNS} data={DATA} />
        </div>
        <div className="content">
          <StatefulPopover
            content={() => Menu}
            returnFocus
            autoFocus
            placement="bottom"
          >
            <Button>Click me</Button>
          </StatefulPopover>
        </div>
        <div className="content">
          <Button onClick={() => setIsOpen(true)}>Click to open modal</Button>
          <ModalImpl isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
};
