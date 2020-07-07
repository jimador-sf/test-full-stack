import React from 'react';
import { StyledUserCard, UserName, Description, Truncate } from './user-card.styles';
import UserAvatar from '../user-avatar/user-avatar';
import { Cell } from '../util/grid';
import { UserEditButton } from '../user-edit-button/user-edit-button';
import { UserEditModal } from '../user-edit-modal/user-edit-modal';
import { User } from '@test-full-stack/data-access';
import { useModal } from 'react-modal-hook/dist';
import ReactModal from 'react-modal';

export interface UserCardProps {
  user: User
  imageSrc: string
}

const contentStyles = {
  width: '1328px',
  height: '750px',
  display: 'grid',
  gridTemplateColumns: '1fr',
  marginLeft: '42px',
  borderRadius: '8px'
};

const overlayStyle = {
  background: `rgba(0, 0, 0, 0.3)`
};

// TODO God Component
export const UserCard = ({ user, imageSrc }: UserCardProps) => {

  const [showModal, hideModal] = useModal(
    () => (
      <ReactModal isOpen style={{ content: contentStyles, overlay: overlayStyle }}>
        <UserEditModal user={user} cancelFn={hideModal}/>
      </ReactModal>
    ),
    [user]
  );

  return (
    <>
      <Cell>
        <StyledUserCard>
          <UserEditButton action={showModal}/>
          <UserAvatar src={imageSrc}/>
          <UserName>
            <Truncate>
              {user.name}
            </Truncate>
          </UserName>
          <Description>
            <Truncate>
              {user.description}
            </Truncate>
          </Description>
        </StyledUserCard>
      </Cell>
    </>
  );
};

export default UserCard;
