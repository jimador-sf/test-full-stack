import React, { useState, useCallback } from 'react';
import { Grid, Cell } from '../util/grid';
import UserButton from '../user-button/user-button';
import { StyledUserEditModal, HeaderText, MarkerElement, Form, InputControl, InputLabel, Input } from './user-edit-modal.styles';
import { useForm } from 'react-hook-form';
import 'mapbox-gl/dist/mapbox-gl.css';
import { InteractiveMap, Marker } from 'react-map-gl';
import UserSearchInput from '../user-search-input/user-search-input';
import { User, useUpdateUserMutation } from '@test-full-stack/data-access';

const TOTALLY_NOT_A_MAPBOX_TOKEN_STORED_IN_SOURCE_CONTROL = `pk.eyJ1IjoiamR1bm5hbSIsImEiOiJja2M3dDIzMTkwNnZ2MnBwcTVkbGw0NW4wIn0.gWACb0ktQ7RGC8oOXHiuNQ`;

/* eslint-disable-next-line */
export interface UserEditModalProps {
  user: User;
  cancelFn: () => void;
}

export const UserEditModal = ({ user, cancelFn }: UserEditModalProps) => {
  const {
    lat = '37.8',
    lng = '-122.4'
  } = user;
  const { register, handleSubmit, errors } = useForm();
  const [viewport, setViewport] = useState({
    latitude: Number(lat),
    longitude: Number(lng),
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  const [addressValue, setAddressValue] = useState();

  const [updateUserMutation] = useUpdateUserMutation();

  const onSubmit = async (formData) => {
    const { longitude, latitude } = viewport;
    const address = addressValue || user.address;
    const updates = { ...formData, lat: `${latitude}`, lng: `${longitude}` };
    const userInput = { ...user, ...updates, address, __typename: undefined };
    try {
      console.log(`Saving ${JSON.stringify(userInput)}`);
      console.log(`address was ${address}`);

      const { data, errors } = await updateUserMutation({ variables: { user: userInput } });
      if (data.updateUser) {
        console.log(`Successfully saved: ${JSON.stringify(data.updateUser)}`);
        cancelFn();
      } else {
        console.log(`Error saving ${userInput.id}: ${JSON.stringify(userInput)}`);
        errors.map(e => console.error(`Error: ${e.message}`));
      }
    } catch ( e ) {
      console.error(e.message);
    }

  };

  const handleViewportChange = useCallback(updated => {
    console.log(`handleViewportChange: ${JSON.stringify(updated)}`);
    setViewport({ ...viewport, ...updated });
  }, [viewport]);

  const handleViewChange = (updated, newAddress = undefined) => {
    console.log(`handleGeocoderViewportChange: ${JSON.stringify(updated)}`);
    const overrides = { transitionDuration: 250 };
    setViewport({ ...updated, ...overrides });
    if (newAddress) {
      setAddressValue(newAddress);
    }
  };

  return (
    // TODO - God component
    <StyledUserEditModal>
      <Grid
        gap={'20px'}
        columns={'500px auto 1fr'}
        rows={'171px 337px 217px'}
        areas={[
          'header header  header',
          'map    form    form  ',
          'footer save    cancel'
        ]}
      >
        <Cell area="header" center middle>
          <HeaderText>Edit User</HeaderText>
        </Cell>
        <Cell area="map">
          <InteractiveMap
            {...viewport}
            mapStyle={'mapbox://styles/mapbox/streets-v9'}
            width='100%'
            height='100%'
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken={TOTALLY_NOT_A_MAPBOX_TOKEN_STORED_IN_SOURCE_CONTROL}
          >
            <Marker latitude={viewport.latitude}
                    longitude={viewport.longitude}
                    offsetLeft={-20}
                    offsetTop={-10}
                    draggable={true}
                    onDragEnd={(({ lngLat }) => {
                      const [lng, lat] = lngLat;
                      handleViewChange(
                        {
                          latitude: lat,
                          longitude: lng
                        }
                      );
                    })}
            >
              {viewport.latitude && viewport.longitude && <MarkerElement/>}
            </Marker>
          </InteractiveMap>
        </Cell>
        <Cell area="form">
          {/*TODO: form component*/}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputControl>
              <InputLabel htmlFor={'name'}>Name</InputLabel>
              <br/>
              <Input type="text"
                     name="name"
                     id={'name'}
                     defaultValue={user.name}
                     ref={register({ required: true, max: 100, min: 1, maxLength: 100 })}
              />
            </InputControl>
            <InputControl>
              <InputLabel htmlFor={'address'}>Location</InputLabel>
              <br/>
              <UserSearchInput
                htmlFor={'address'}
                name={'address'}
                ref={register({ required: true })}
                defaultValue={user.address}
                onChange={
                  ({ suggestion: { latlng, value } }) => {
                    const updated = {
                      latitude: latlng.lat,
                      longitude: latlng.lng
                    };
                    handleViewChange(updated, value);
                  }
                }
              />
            </InputControl>
            <InputControl>
              <InputLabel htmlFor={'description'}>Description</InputLabel>
              <br/>
              <Input type="text"
                     name="description"
                     id={'description'}
                     defaultValue={user.description}
                     ref={register({ required: true, max: 4000, min: 1, maxLength: 4000 })}/>
            </InputControl>
          </Form>
        </Cell>
        <Cell area={'save'} middle style={{ width: '88%', margin: '0px auto' }}>
          <UserButton action={handleSubmit(onSubmit)} buttonText={'Save'}/>
        </Cell>
        <Cell area={'cancel'} middle style={{ width: '66%', margin: '0px auto' }}>
          <UserButton action={cancelFn} buttonText={'Cancel'}/>
        </Cell>
      </Grid>
    </StyledUserEditModal>
  );
};

export default UserEditModal;
