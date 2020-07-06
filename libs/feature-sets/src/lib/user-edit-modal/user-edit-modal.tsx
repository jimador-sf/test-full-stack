import React, { useState, useCallback } from 'react';

import styled from '@emotion/styled';
import { Grid, Cell } from '../util/grid';
import UserButton from '../user-button/user-button';
import { inputCss, inputLabelCss, formCss, inputControlCss, headerText, Pin, Pulse } from './user-edit-modal.styles';
import { useForm } from 'react-hook-form';
import 'mapbox-gl/dist/mapbox-gl.css';
import { InteractiveMap, Marker } from 'react-map-gl';
import UserSearchInput from '../user-search-input/user-search-input';

const TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

/* eslint-disable-next-line */
export interface UserEditModalProps {
}

const Input = styled.input(inputCss);

const InputLabel = styled.label(inputLabelCss);

const Form = styled.form(formCss);

const InputControl = styled.div(inputControlCss);

const StyledUserEditModal = styled.div`
  width: 1328px;
  height: 725px;
  display: grid;
  margin-left: 42px;
  place-items: center;
`;

const HeaderText = styled.div(headerText);

const MarkerElement = () => <><Pin/><Pulse/></>

export const UserEditModal = (props: UserEditModalProps) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);


  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  const handleViewportChange = useCallback(updated => {
    console.log(`handleViewportChange: ${JSON.stringify(updated)}`);
    setViewport({
      ...viewport, ...updated
    });
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
        columns={'582px auto 1fr'}
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
            mapboxApiAccessToken={TOKEN}
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
                     ref={register({ required: true, max: 100, min: 1, maxLength: 100 })}
              />
            </InputControl>
            <InputControl>
              <InputLabel htmlFor={'location'}>Location</InputLabel>
              <br/>
              <UserSearchInput
                htmlFor={'location'}
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
                     ref={register({ required: true, max: 4000, min: 1, maxLength: 4000 })}/>
            </InputControl>
          </Form>
        </Cell>
        <Cell area={'save'} middle style={{ width: '88%', margin: '0px auto' }}>
          <UserButton action={() => alert('ouch')} buttonText={'Save'}/>
        </Cell>
        <Cell area={'cancel'} middle style={{ width: '66%', margin: '0px auto' }}>
          <UserButton action={() => alert('ouch')} buttonText={'Cancel'}/>
        </Cell>
      </Grid>
    </StyledUserEditModal>
  );
};

export default UserEditModal;
