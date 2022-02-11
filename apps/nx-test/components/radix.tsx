import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

const Trigger = styled(DropdownMenu.Trigger)`
  padding: 8px;
  cursor: pointer;
`;
const StyledDropdownContent = styled(DropdownMenu.Content)`
  padding: 8px 16px;
  background-color: tomato;
  color: white;
`;
const Item = styled(DropdownMenu.Item)`
  margin: 8px 0;
`;
const StyledOverlay = styled(Dialog.Overlay)`
  background-color: gray;
  position: 'fixed';
  inset: 0;
`;
const StyledContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  z-index: 100000;
`;

function Content({ children, ...props }) {
  return (
    <Dialog.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </Dialog.Portal>
  );
}

export const Radix = ({ products }: { products: any[] }) => {
  return (
    <div style={{ gridArea: 'radix' }}>
      <div className="container">
        <div className="content">
          <h3>Radix</h3>
          <a href="https://www.radix-ui.com/" target="_blank">
            Click for docs
          </a>
        </div>
        <div className="content">No table component</div>
        <div className="content">
          <DropdownMenu.Root>
            <Trigger>Actions </Trigger>
            <StyledDropdownContent align="start">
              <Item>Action 1</Item>
              <Item>Action 2</Item>
            </StyledDropdownContent>
          </DropdownMenu.Root>
        </div>
        <div className="content">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Edit profile</button>
            </Dialog.Trigger>
            <Content>
              <Dialog.Title>Some Modal Junk</Dialog.Title>
              <Dialog.Description>This is a modal</Dialog.Description>
              <Dialog.DialogClose asChild>
                <button>
                  <Cross2Icon />
                </button>
              </Dialog.DialogClose>
            </Content>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
};
