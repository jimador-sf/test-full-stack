import React, { useState, useCallback } from 'react';

import styled from '@emotion/styled';
import { Grid, Cell } from '../util/grid';
import UserButton from '../user-button/user-button';
import { inputCss, inputLabelCss, formCss, inputControlCss, headerText, Pin, Pulse } from './user-edit-modal.styles';
import { useForm } from 'react-hook-form';
import 'mapbox-gl/dist/mapbox-gl.css';
import { InteractiveMap, Marker } from 'react-map-gl';
import UserSearchInput from '../user-search-input/user-search-input';
import { User } from '@test-full-stack/data-access';

const TOTALLY_NOT_A_MAPBOX_TOKEN_STORED_IN_SOURCE_CONTROL = `pk.eyJ1IjoiamR1bm5hbSIsImEiOiJja2M3dDIzMTkwNnZ2MnBwcTVkbGw0NW4wIn0.gWACb0ktQ7RGC8oOXHiuNQ`

/* eslint-disable-next-line */
export interface UserEditModalProps {
  user: User;
  cancelFn: () => void;
  submitFn?: (user: User) => void;
}

const Input = styled.input(inputCss);

const InputLabel = styled.label(inputLabelCss);

const Form = styled.form(formCss);

const InputControl = styled.div(inputControlCss);

const StyledUserEditModal = styled.div`
  width: 90%;
  height: 90%;
  display: grid;
  margin-left: 42px;
  place-items: center;
`;

const HeaderText = styled.div(headerText);

const MarkerElement = () => <><Pin/><Pulse/></>

export const UserEditModal = ({user, submitFn, cancelFn}: UserEditModalProps) => {
  const {
    lat = '37.8',
    lng = '-122.4'
  } = user
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  const [viewport, setViewport] = useState({
    latitude: Number(lat),
    longitude: Number(lng),
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  const handleViewportChange = useCallback(updated => {
    console.log(`handleViewportChange: ${JSON.stringify(updated)}`);
    setViewport({ ...viewport, ...updated });
  }, [viewport]);

  const handleGeocoderViewportChange = useCallback(updated => {
    console.log(`handleGeocoderViewportChange: ${JSON.stringify(updated)}`);
    const geocoderDefaultOverrides = { transitionDuration: 250 };

    return handleViewportChange({
      ...updated,
      ...geocoderDefaultOverrides
    });
  }, [viewport, handleViewportChange]);

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
                    onDragEnd={(({lngLat}) => {
                      const [lng, lat] = lngLat
                      handleGeocoderViewportChange(
                        {
                          latitude: lat,
                          longitude: lng
                        }
                      )
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
                     name="Name"
                     id={'name'}
                     defaultValue={user.name}
                     ref={register({ required: true, max: 100, min: 1, maxLength: 100 })}
              />
            </InputControl>
            <InputControl>
              <InputLabel htmlFor={'location'}>Location</InputLabel>
              <br/>
              <UserSearchInput
                htmlFor={'location'}
                defaultValue={user.address}
                onChange={({ suggestion }) =>
                  handleGeocoderViewportChange(
                    {
                      latitude: suggestion.latlng.lat,
                      longitude: suggestion.latlng.lng
                    }
                  )
                }
              />
            </InputControl>
            <InputControl>
              <InputLabel htmlFor={'description'}>Description</InputLabel>
              <br/>
              <Input type="text"
                     name="Description"
                     id={'description'}
                     defaultValue={user.description}
                     ref={register({ required: true, max: 4000, min: 1, maxLength: 4000 })}/>
            </InputControl>
          </Form>
        </Cell>
        <Cell area={'save'} middle style={{ width: '88%', margin: '0px auto' }}>
          <UserButton action={handleSubmit(data => alert(JSON.stringify({...user, ...data})))} buttonText={'Save'}/>
        </Cell>
        <Cell area={'cancel'} middle style={{ width: '66%', margin: '0px auto' }}>
          <UserButton action={cancelFn} buttonText={'Cancel'}/>
        </Cell>
      </Grid>
    </StyledUserEditModal>
  );
};

export default UserEditModal;
